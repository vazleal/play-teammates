import styles from './Background.module.css'

const Background = (props) =>{
    return (
        <div className={styles.background}>
            <div className={styles.counterStrikeHome}></div>
            <div className={styles.valorantHome}></div>
        </div>
    );
}

export default Background;