import styles from './Background.module.css'

const Background = (props) =>{
    return (
        <div className={styles.background}></div>
    );
}

export default Background;

/*const Background = (props) =>{
    return (
        <div className={styles.background}>
            {(window.location.pathname === '/')?(
                <>
                    <div className={styles.counterStrikeHome}></div>
                    <div className={styles.valorantHome}></div>
                </>
                ):(<></>)
            }
        </div>
    );
}*/