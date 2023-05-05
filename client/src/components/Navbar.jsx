import styles from '../styles/Navbar.module.css'
import { Link } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'

export function Navbar() {
  const { isAuthenticated, signOut } = useAuth()

  return (
    <>
      <div className={styles.navbarContainer}>
        <Link to="/">
          <div className={styles.logoNavbar}></div>
        </Link>
        {!isAuthenticated ? (
          <>
            <div className={styles.frameEntrar}>
              <Link to="/sign-in">
                <button
                  className={styles.button}
                  style={{ '--background_color': '#172848' }}
                >
                  Entrar
                </button>
              </Link>
            </div>
            <div className={styles.frameConta}>
              <Link to="/sign-up">
                <button
                  className={styles.button}
                  style={{ '--background_color': '#172848' }}
                >
                  Criar Conta
                </button>
              </Link>
            </div>
          </>
        ) : (
          <div className={styles.frameEntrar}>
            <button
              className={styles.button}
              style={{ '--background_color': '#172848' }}
              onClick={signOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar
