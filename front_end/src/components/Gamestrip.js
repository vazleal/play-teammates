import styles from './Gamestrip.module.css'
import {Link} from 'react-router-dom'
const Gamestrip = (props) => {
    const GenerateStyle = {
        '--top': props.top_var,
        '--gradient': props.strip_color
      };
    return(
        <>
            <div className={styles.Gamestrip} style={GenerateStyle}>
                <Link to="/inviteVal">    
                    <div className={styles.stripText} style={GenerateStyle}>
                        {props.game_name}
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Gamestrip;