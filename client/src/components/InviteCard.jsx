import { Box, Typography } from '@mui/material'
import individual from '../assets/images/vectors/individual.svg'
import TypoMain from './TypoMain'

function InviteCard({ title, number, engage, communication, discord }) {
  function handleClickInvite() {
    console.log('click')
  }

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        background: 'linear-gradient(180deg, #FD5F6D 0%, #141C27 100%)',
        mixBlendMode: 'luminosity',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        padding: '24px',
        border: 'none',
        cursor: 'pointer'
      }}
      component="button"
      type="button"
      onClick={handleClickInvite}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '8px'
        }}
      >
        <TypoMain sx={{ fontSize: '44px', color: '#fff' }}>Ranked</TypoMain>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          <img src={individual} alt="Person" style={{ width: '24px' }} />
          <Typography
            sx={{ fontSize: '36px', fontFamily: 'Advent Pro', color: '#fff' }}
          >
            3
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '16px'
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Advent Pro',
            fontSize: '22px',
            color: '#fff',
            padding: '0px 12px',
            backgroundColor: '#858C99',
            borderRadius: '16px'
          }}
        >
          Jogando sério
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Advent Pro',
            fontSize: '22px',
            color: '#fff',
            padding: '0px 12px',
            backgroundColor: '#858C99',
            borderRadius: '16px'
          }}
        >
          Microfone obrigatório
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Advent Pro',
            fontSize: '22px',
            color: '#fff',
            padding: '0px 12px',
            backgroundColor: '#858C99',
            borderRadius: '16px'
          }}
        >
          Discord obrigatório
        </Typography>
      </Box>
    </Box>
  )
}

export default InviteCard
