import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';
const Navbar = (props) => {
  function toLog(){
    console.log("To the LogIn Page");
  }
  function toSign(){
    console.log("To the SignIn Page");
  }
  return (
    <>
    <div className={styles.navbarContainer}>
      <div className={styles.logoNavbar}></div>
      {props.loged ? (
      <>
      <div className={styles.frameEntrar}>
        <Link to="/login">
          <button className={styles.button} 
            style={{ '--background_color': '#172848' }}>
            Entrar
          </button>
        </Link>
      </div>
      <div className={styles.frameConta}>
        <Link to="/signin">
          <button className={styles.button} 
            style={{ '--background_color': '#172848' }}>
            Criar Conta
          </button>
        </Link>
      </div>
      </>):(<div></div>)}
    </div>
    </>
  )
}

export default Navbar
