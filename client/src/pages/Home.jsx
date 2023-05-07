import Gamestrip from '../components/Gamestrip.jsx'
import { Box, Container, Grid, Typography } from '@mui/material'
import InviteCard from '../components/InviteCard.jsx'
import CardTag from '../components/CardTag.jsx'
import backHomeCS from '../assets/images/6-2-counter-strike.png'
import backHomeVal from '../assets/images/CITY1.png'
import { Link } from 'react-router-dom'

function Home(){
    return(
        <>
          <Container
            sx={{
              backgroundImage: `url(${backHomeCS})`,
              position: 'absolute',
              width: '451px',
              height: '321px',
              left: '200px',
              top: '16.69%',
              backgroundRepeat: 'no-repeat',
            }}
          />

          <Container
            sx={{
              backgroundImage: `url(${backHomeVal})`,
              position: 'absolute',
              width: '538px',
              height: '80%',
              left: '360px',
              top: '130px',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              clip: 'rect(0px, 1000px, 289px, 0px)'
            }}
          />
          <Typography sx={{
            position: 'absolute',
            width: '418px',
            height: '72px',
            left: '48.20%',
            top: '86px',
            fontFamily: 'Post No Bills Jaffna Light',
            fontStyle: 'normal',
            fontWeight: 300,
            fontSize: '48px',
            lineHeight: '72px',
            textAlign: 'left',
            color: '#FFFFFF',
        }}>
          Complete seu time.
        </Typography>
        <Typography sx={{
          position: 'absolute',
          width: '40.41%',
          height: '87px',
          right: '17.78%',
          top: '168px',
          fontFamily: 'Advent Pro',
          fontStyle: 'normal',
          fontWeight: 250,
          fontSize: '24px',
          lineHeight: '29px',
          textAlign: 'right',
          color: '#FFFFFF',
        }}>
          Encontre outros jogadores para subir de rank e fazer amizades. <br />
          Cadastre-se ou entre em uma conta existente para poder postar <br />
          convites e acessar os convites existentes.
        </Typography>
        <Link to='/allInvites'>
          <Typography sx={{
            position: 'absolute',
            width: '15.63%',
            height: '29px',
            right: '18.96%',
            top: '261px',
            fontFamily: 'Advent Pro',
            fontStyle: 'normal',
            fontWeight: 250,
            fontSize: '24px',
            lineHeight: '29px',          
            textAlign: 'right',
            textDecorationLine: 'underline',
            color: '#FFFFFF',
          }}>
            Ver todos os convites → 
          </Typography>
        </Link>
        <Gamestrip top_var='44%' 
        strip_color='linear-gradient(270deg, rgba(255, 163, 0, 0) 0%, rgba(253, 95, 109, 1) 50.28%, rgba(255, 163, 1, 0) 100%)' 
        text='Valorant'
        link='/inviteVal'/>
        <Box sx={{
            marginTop: '24%',
        }}>
            <Grid container spacing={2} sx={{height: '190px',}}>
                <Grid item xs={4} >
                    <InviteCard title='Unranked' number='2' engagement="casados" communication="Nenhuma"/>
                </Grid>
                <Grid item xs={4}>
                    <InviteCard title='Ranked' number='1' engagement="casados" communication="Nenhuma" />
                </Grid>
                <Grid item xs={4}>
                    <InviteCard title='Ranked' number='3' engagement="casados" communication="Nenhuma">
                      <CardTag text='espero que funfe'/>
                    </InviteCard>
                </Grid>
            </Grid>
        </Box>
        <Gamestrip top_var='71.4%' 
        strip_color='linear-gradient(270deg, rgba(255, 95, 106, 0) 0%, rgba(255, 163, 1, 0.8) 50.28%, rgba(254, 93, 108, 0) 100%)' 
        text='Counter Strike'
        link='/inviteCS'/>        
    </>
    )}

export default Home;