import { query as q } from 'faunadb'
import { fauna } from "../../../services/fauna";
import { stripe } from '../../../services/stripe';

export async function saveSubscription(
    subscriptionId: string,
    customerId: string,
    createAction = false,
  ) {
    //buscar o usuario no banco do FaunaDB com o id customerId(stripe_customer_id)
    // Salvar os dados da subscription no FaunaDB

    const userRef = await fauna.query(
      q.Select(
        "ref",
        q.Get(
          q.Match(
            q.Index('user_by_stripe_customer_id'),
            customerId
          )
        )
      )
    );

    const subscription = await stripe.subscriptions.retrieve(subscriptionId);

    const subscriptionData = {
      id: subscription.id,
      userId: userRef,
      status: subscription.status,
      price_id: subscription.items.data[0].price.id
    }
    // se createAction for true cria a inscrição
    if(createAction) {
      await fauna.query(
        q.Create(
          q.Collection('subscriptions'),
          { data: subscriptionData }
        )
      )
    } else {
      // busca os dados de inscrição por ref 
      // e substitui todos os dados com exceção da ref
      await fauna.query(
        q.Replace(
          q.Select(
            "ref", 
            q.Get(
              q.Match(
                q.Index('subscription_by_id'), 
                subscriptionId, 
              )
            )
          ),
          { data: subscriptionData }
        )
      )
    }

  }