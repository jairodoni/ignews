import { render, screen } from '@testing-library/react'
import { ActiveLink } from '../../components/ActiveLink'

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

describe('ActiveLink component', () => {
  it('Renders correctly', () => {
    render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    )

    //É esperado que o elemento exista
    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it('Adds active class if the link as currently active', () => {
    render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    )

    //É esperado que o elemento contenha a classe active
    expect(screen.getByText('Home')).toHaveClass('active');
  })
})