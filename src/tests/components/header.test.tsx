import { render, screen } from '@testing-library/react'
import { Header } from '../../components/Header'

//O mock vai simular e substituir funções de dependencias externas

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

jest.mock('next-auth/client', () => {
  return {
    useSession() {
      //O false diz se esta em loading ou não
      return [null, false]
    }
  }
})

describe('Header component', () => {
  it('Renders correctly', () => {
    render(
      <Header />
    )

    //É esperado que o elemento exista
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Posts')).toBeInTheDocument();
  });
});