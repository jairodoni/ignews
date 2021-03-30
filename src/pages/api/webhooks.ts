import { Subscription } from "faunadb/src/types/Stream";
import { NextApiRequest, NextApiResponse } from "next";
import { Readable } from 'stream';
import Stripe from "stripe";
import { stripe } from "../../services/stripe";
import { saveSubscription } from "./_lib/managerSubscription";

async function buffer(readable: Readable) {
  const chunks = [];

  for await (const chunk of readable) {
    chunks.push(
      typeof chunk === "string" ? Buffer.from(chunk) : chunk
    );
  }

  return Buffer.concat(chunks);
}
  //para consumir a Stream
  export const config = {
    api: {
      bodyParser: false
    }
  }

  const relevantEvents = new Set([
    'checkout.session.completed', 
    'customer.subscription.updated',
    'customer.subscription.deleted',
  ])

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if(req.method === 'POST') {
    const buf = await buffer(req);
    const secret = req.headers['stripe-signature'];

    let event: Stripe.Event

    try {
      //atribui o buf, secret e a key do CLI stripe ao event 
      //(seria a forma segura de usar o stripe)
      event = stripe.webhooks.constructEvent(buf, secret, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (error) {
      return res.status(400).send(`Webhook error: ${error.message}`)
    }
    const type = event.type;

    if(relevantEvents.has(type)){
      try {
        switch(type) {
          case 'customer.subscription.updated':
          case 'customer.subscription.deleted':
            const subscription = event.data.object as Stripe.Subscription;
            //renova inscrição
            await saveSubscription(
              subscription.id,
              subscription.customer.toString(),
              false
            );

            break;

          case 'checkout.session.completed':
            const checkouSession = event.data.object as Stripe.Checkout.Session
            //cria nova inscrição
            await saveSubscription(
              checkouSession.subscription.toString(),
              checkouSession.customer.toString(),
              true
            );

            break;
          default:
            //se não ouvir o evento o error é executado
            throw new Error('Unhandled.event.')
        }
      } catch (error) {
        return res.json({ error: 'Webhook handler filed.' });
      }
    }

    res.json({ received: true });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method not allowed');
  }
}
