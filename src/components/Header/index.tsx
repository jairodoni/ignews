import { useRouter } from 'next/router';
import Link from 'next/link';
import { SignInButton } from '../SingnInButton';
import styles from './styles.module.scss';
import { ActiveLink } from '../ActiveLink';


export function Header() {
  const router = useRouter();
  
  function handleGoHome(){
    router.push(`/`)
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" onClick={handleGoHome}>
        </img>
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          {/* prefetch deixa os posts pré-carregados */}
          <ActiveLink activeClassName={styles.active} href="/posts" prefetch>
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}
// className={asPath === '/' ? styles.active : ''}