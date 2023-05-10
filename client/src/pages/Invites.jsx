import { Box, Grid } from '@mui/material'
import InviteCard from '../components/InviteCard.jsx'
import TypoMain from '../components/TypoMain'
import { useEffect, useState } from 'react'

import { api } from '../services/api'
import { toast } from 'react-toastify'

import backInviteCS from '../assets/images/cs-invite-list.svg'
import backInviteVal from '../assets/images/val-invite-list.svg'

export function Invites() {
  const [invites, setInvites] = useState([])

  useEffect(() => {
    async function fetchInvites() {
      try {
        const response = await api.get('/invites/all')

        setInvites(response.data.invites)
      } catch (err) {
        toast.error('Falha ao listar os convites.')
      }
    }

    fetchInvites()
  }, [])

  return (
    <>
      <img
        src={backInviteCS}
        alt="Contra-Terrorista"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '400px',
          opacity: 0.5,
          zIndex: -10
        }}
      />

      <img
        src={backInviteVal}
        alt="Reyna"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 110,
          width: '480px',
          opacity: 0.5,
          zIndex: -12
        }}
      />

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

        {invites.length === 0 ? (
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: '24px',
              paddingBottom: '24px'
            }}
          >
            <TypoMain sx={{ fontSize: '28px' }}>
              Não existem convites no momento, volte mais tarde ou crie o seu!
            </TypoMain>
          </Box>
        ) : (
          <Grid container spacing={3} sx={{ paddingBottom: '40px' }}>
            {invites.map(invite => (
              <Grid item xs={4} key={invite.id}>
                <InviteCard {...invite} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  )
}
