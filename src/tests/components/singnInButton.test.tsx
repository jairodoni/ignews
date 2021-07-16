import { render, screen } from '@testing-library/react'
import { useSession } from 'next-auth/client'
import { mocked } from 'ts-jest/utils'
import { SignInButton } from '../../components/SignInButton'


jest.mock('next-auth/client')

describe('SignInButton component', () => {
  it('Renders correctly when user is not authenticated', () => {
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValue([null, false]);

    render(
      <SignInButton />
    )

    //É esperado que o elemento exista
    expect(screen.getByText('Sign In with GitHub')).toBeInTheDocument()
  });

  it('Renders correctly when user is authenticated', () => {
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValue([
      { user: { name: 'John Doe', email: 'john.doe@example.com' }, expires: 'fake-expires' },
      false
    ]);
    render(
      <SignInButton />
    )

    //É esperado que o elemento exista
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  });
});