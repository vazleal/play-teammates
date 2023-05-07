import styles from '../styles/Gamestrip.module.css'
import {Link} from 'react-router-dom'
import { Box , Typography} from '@mui/material'

import '../fonts.css'
const Gamestrip = (props) => {
    return(
        <Box sx={{
            position: 'absolute',
            textAlign: 'center',
            width: '92.78%',
            height: '42px',
            background: `${props.strip_color}`,
            opacity: '0.7',
            top: `${props.top_var}`,
            left: '50%',
            transform: 'translateX(-50%)',
        }}>
            <Typography sx={{
                position: 'absolute',
                width: '198px',
                height: '48px',
                left: '42%',
                top: '0px',
                fontFamily: 'Post No Bills Jaffna Light',
                fontStyle: 'normal',
                fontWeight: '300',
                fontSize: '32px',
                lineHeight: '42px',
                /* identical to box height */
                textAlign: 'center',
                color: '#FFFFFF',
                textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                opacity: '1',
                }}>
                {props.text}
            </Typography>
            <Typography sx={{
                position: 'absolute',
                width: '112px',
                height: '29px',
                right: '50px',
                top: '5px',
                fontFamily: 'Advent Pro',
                fontStyle: 'normal',
                fontWeight: '250',
                fontSize: '24px',
                lineHeight: '29px',
                /* identical to box height */
                textAlign: 'right',
                textDecorationLine: 'underline',
            }}>
                <Link to={props.link} style={{ color: '#FFFFFF' }}>Ver Mais</Link>
            </Typography>
        </Box>
    );
}

export default Gamestrip;