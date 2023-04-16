import styles from './Navbar.module.css'
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
        <div className={styles.frameEntrar}>
        <button className={styles.button} onClick={toLog}>Entrar</button>
        </div>
        <div className={styles.frameConta}>
        <button className={styles.button} onClick={toSign}>Conta</button>
        </div>
    </div>
    </>
  )
}

export default Navbar
