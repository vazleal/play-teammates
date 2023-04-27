import styles from './Gamestrip.module.css'
const Gamestrip = (props) => {
    const GenerateStyle = {
        '--top_responsive': props.top_var,
        '--gradient': props.strip_color
      };
    return(
        <>
            <div className={styles.Gamestrip} style={GenerateStyle}>
                <h1>Gamestrip</h1>
            </div>
        </>
    );
}

export default Gamestrip;