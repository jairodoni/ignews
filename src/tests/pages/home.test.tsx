import { render, screen } from '@testing-library/react';
import { stripe } from '../../services/stripe';
import { mocked } from 'ts-jest/utils';
import Home, { getStaticProps } from '../../pages';

jest.mock('next/router');
jest.mock('next-auth/client', () => {
  return {
    useSession: () => [null, false]
  }
});
jest.mock('../../services/stripe');

describe('Home page', () => {
  it('Renders corretly', () => {
    render(
      <Home product={{ priceId: 'fake-price-id', amount: 'R$10,00' }} />
    )

    expect(screen.getByText("for R$10,00 month")).toBeInTheDocument();
  });

  it('Loads initial data', async () => {
    const retriveStripePricesMocked = mocked(stripe.prices.retrieve);

    //Caso a função seja uma promessa use mockResolvedValueOnce
    retriveStripePricesMocked.mockResolvedValueOnce({
      id: 'fake-price-id',
      unit_amount: 1000,
    } as any)

    const response = await getStaticProps({})

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          product: {
            priceId: 'fake-price-id',
            amount: '$10.00'
          }
        }
      })
    );
  })
});


