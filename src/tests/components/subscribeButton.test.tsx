import { fireEvent, render, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { SubscribeButton } from '../../components/SubscribeButton'

jest.mock('next-auth/client');
jest.mock('next/router');

describe('SubscribeButton component', () => {
  it('Renders correctly', () => {
    const useSessionMocked = mocked(useSession);

    //retorna [null, false] como deslogado
    useSessionMocked.mockReturnValueOnce([null, false])

    render(
      <SubscribeButton />
    )
    //É esperado que o elemento exista
    expect(screen.getByText('Subscribe now')).toBeInTheDocument()
  });


  it('Renders user to sign in when not authenticated', () => {
    //mockando a função de login
    const signInMocked = mocked(signIn);
    const useSessionMocked = mocked(useSession);

    //retorna [null, false] como deslogado
    useSessionMocked.mockReturnValueOnce([null, false])

    render(
      <SubscribeButton />
    )

    const subscribeButton = screen.getByText('Subscribe now');

    //fireEvent dispara eventos de usuario
    fireEvent.click(subscribeButton)

    //verifica se a função foi chamada
    expect(signInMocked).toHaveBeenCalled();
  });

  it('Redirects to posts when user alread has a subscription', () => {
    //mockando a função de useRouter
    const useRouterMocked = mocked(useRouter);
    //mockando a função de useSession
    const useSessionMocked = mocked(useSession);
    const pushMock = jest.fn();

    useSessionMocked.mockReturnValue([
      {
        user: {
          name: 'John Doe',
          email: 'john.doe@example.com'
        },
        activeSubscription: 'fake-active-subscription',
        expires: 'fake-expires'
      },
      false
    ]);

    useRouterMocked.mockReturnValueOnce({
      push: pushMock
    } as any)

    render(<SubscribeButton />)

    const subscribeButton = screen.getByText('Subscribe now');

    fireEvent.click(subscribeButton)

    //verifica se a função foi chamada
    expect(pushMock).toHaveBeenCalledWith('/posts');
  })
});