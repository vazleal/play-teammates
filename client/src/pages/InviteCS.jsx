import styles from '../styles/Invites.module.css'
import { Box, Container, Grid } from '@mui/material'
import inviteCSImg from '../assets/images/CS-DUO.png'
import InviteCard from '../components/InviteCard.jsx'
import CardTag from '../components/CardTag'

function InviteCS(){
  async function getInvitesCS() {
    try {
      const response = await api.get('/users/Counter_Strike');
      return response.data;
    } catch (error) {
      console.error('Não foi possível pegar os dados do back end');
      return;
    }
  }

  return (
    <>
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
      <Box sx={{
            marginTop: '22%',
        }}>
            <Grid container spacing={2} sx={{height: '190px',}}>
                <Grid item xs={4} >
                    <InviteCard title='Unranked' number='2' engage="casados" communication="Nenhuma" discord='Obrigatório'/>
                </Grid>
                <Grid item xs={4}>
                    <InviteCard title='Ranked' number='1' engage="casados" communication="Nenhuma" discord='Obrigatório'/>
                </Grid>
                <Grid item xs={4}>
                    <InviteCard title='Ranked' number='3' engage="casados" communication="Nenhuma" discord='Obrigatório'>
                      <CardTag text='espero que funfe'/>
                    </InviteCard>
                </Grid>
            </Grid>
        </Box>
    </>
  )
}

export default InviteCS