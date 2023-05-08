import styles from '../styles/Invites.module.css'
import { Box, Container } from '@mui/material'
import inviteCSImg from '../assets/images/CS-DUO.png'
const InviteCS = () => {
  return (
    <Box sx={{overflow: 'hidden',}}>
      <Container
            sx={{
              backgroundImage: `url(${inviteCSImg})`,
              position: 'absolute',
              width: '538px',
              height: '80%',
              left: '70.71%',
              top: '20%',
              opacity: 0.5,
              backgroundRepeat: 'no-repeat',
              //backgroundSize: 'contain',
              //clip: 'rect(0px, 1000px, 289px, 0px)'
            }}
          />
      <div className={styles.textBox} style={{ '--width': '29.167%' }}>
        Esses são todos os convites de CounterStrike.
      </div>
    </ Box>
  )
}

export default InviteCS