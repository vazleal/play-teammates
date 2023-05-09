import Gamestrip from '../components/Gamestrip.jsx'
import { Box, Typography } from '@mui/material'
import InviteCard from '../components/InviteCard.jsx'
import CardTag from '../components/CardTag.jsx'
import backHomeCS from '../assets/images/6-2-counter-strike.png'
import backHomeVal from '../assets/images/jet.png'
import { Link } from 'react-router-dom'
import TypoMain from '../components/TypoMain'

export function Home() {
  return (
    <>
      <Box
        sx={{
          margin: '0 auto',
          paddingTop: '40px',
          paddingBottom: '40px',
          display: 'flex',
          width: '100%',
          justifyContent: 'flex-end'
        }}
      >
        <Box
          sx={{
            width: '720px',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            flexDirection: 'column'
          }}
        >
          <Typography
            sx={{
              fontFamily: 'PostNoBillsJaffna',
              fontStyle: 'normal',
              fontWeight: 300,
              fontSize: '48px',
              lineHeight: '72px',
              textAlign: 'left',
              color: '#FFFFFF'
            }}
          >
            Complete seu time.
          </Typography>
          <Typography
            sx={{
              fontFamily: 'AdventPro',
              fontStyle: 'normal',
              fontWeight: 250,
              fontSize: '26px',
              lineHeight: '29px',
              textAlign: 'right',
              color: '#FFFFFF'
            }}
          >
            Encontre outros jogadores para subir de rank e fazer amizades.
            <br />
            Cadastre-se ou entre em uma conta existente para poder postar <br />
            convites e acessar os convites existentes.
          </Typography>

          <Link to="/invites">
            <Typography
              sx={{
                marginTop: '12px',
                fontFamily: 'AdventPro',
                fontStyle: 'normal',
                fontWeight: 250,
                fontSize: '24px',
                lineHeight: '29px',
                textAlign: 'right',
                textDecorationLine: 'underline',
                color: '#FFFFFF'
              }}
            >
              Ver todos os convites →
            </Typography>
          </Link>
        </Box>
      </Box>

      <Box sx={{ width: '100%', position: 'relative', marginTop: '128px' }}>
        <img
          src={backHomeCS}
          alt="Contra-Terrorista"
          style={{
            position: 'absolute',
            bottom: 42,
            width: '480px'
          }}
        />

        <img
          src={backHomeVal}
          alt="Jet"
          style={{
            position: 'absolute',
            bottom: 42,
            left: 310,
            width: '540px'
          }}
        />

        <Gamestrip
          strip_color="linear-gradient(270deg, rgba(255, 163, 0, 0) 0%, rgba(253, 95, 109, 1) 50.28%, rgba(255, 163, 1, 0) 100%)"
          text="VALORANT"
          link="/invites/valorant"
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          width: '100%',
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '40px',
          paddingBottom: '40px'
        }}
      >
        <TypoMain sx={{ fontSize: '36px' }}>
          Não existem convites no momento, volte mais tarde ou crie o seu!
        </TypoMain>
      </Box>

      <Gamestrip
        strip_color="linear-gradient(270deg, rgba(255, 95, 106, 0) 0%, rgba(255, 163, 1, 0.8) 50.28%, rgba(254, 93, 108, 0) 100%)"
        text="COUNTER STRIKE"
        link="/invites/counter-strike"
      />

      <Box
        sx={{
          display: 'flex',
          width: '100%',
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '40px',
          paddingBottom: '70px'
        }}
      >
        <InviteCard
          title="Ranked"
          number="3"
          engage="casados"
          communication="Nenhuma"
          discord="Obrigatório"
        >
          <CardTag text="espero que funfe" />
        </InviteCard>

        <InviteCard
          title="Ranked"
          number="3"
          engage="casados"
          communication="Nenhuma"
          discord="Obrigatório"
        >
          <CardTag text="espero que funfe" />
        </InviteCard>

        <InviteCard
          title="Ranked"
          number="3"
          engage="casados"
          communication="Nenhuma"
          discord="Obrigatório"
        >
          <CardTag text="espero que funfe" />
        </InviteCard>
      </Box>
    </>
  )
}
