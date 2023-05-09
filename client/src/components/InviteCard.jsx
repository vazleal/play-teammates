import { Box, Typography } from '@mui/material'
import individual from '../assets/images/vectors/individual.svg'
import TypoMain from './TypoMain'

function InviteCard({ isRanked, numPlayers, game, blank }) {
  function handleClickInvite() {
    console.log('click')
  }

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        background:
          game === 'valorant'
            ? 'linear-gradient(180deg, rgba(253, 95, 109, 0.7) 0%, rgba(20, 28, 39, 0.7) 100%)'
            : 'linear-gradient(180deg, rgba(255, 163, 1, 0.7) 0%, rgba(29, 45, 73, 0.7) 100%)',
        mixBlendMode: blank ? 'luminosity' : 'normal',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        padding: '24px',
        borderRadius: '8px',
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
        <TypoMain sx={{ fontSize: '44px', color: '#fff' }}>
          {isRanked ? 'Ranked' : 'Unranked'}
        </TypoMain>

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
            sx={{ fontSize: '36px', fontFamily: 'AdventPro', color: '#fff' }}
          >
            {numPlayers}
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
            fontFamily: 'AdventPro',
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
            fontFamily: 'AdventPro',
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
            fontFamily: 'AdventPro',
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
