import { Box, Grid } from '@mui/material'
import InviteCard from '../components/InviteCard.jsx'
import TypoMain from '../components/TypoMain'

export function Invites() {
  return (
    <Box sx={{ width: '100%' }}>
      <TypoMain
        sx={{
          fontSize: '32px',
          paddingTop: '24px',
          paddingBottom: '24px',
          textAlign: 'right'
        }}
      >
        Esses são todos os convites de Valorant e de Counter Strike.
      </TypoMain>

      <Grid container spacing={3}>
        <Grid item xs={4}>
          <InviteCard />
        </Grid>
        <Grid item xs={4}>
          <InviteCard />
        </Grid>
        <Grid item xs={4}>
          <InviteCard />
        </Grid>
        <Grid item xs={4}>
          <InviteCard />
        </Grid>
      </Grid>
    </Box>
  )
}
