import { useState, useEffect } from 'react'

import { Box, Grid } from '@mui/material'
import InviteCard from '../components/InviteCard.jsx'
import TypoMain from '../components/TypoMain'
import { useParams } from 'react-router-dom'

import { api } from '../services/api'
import { toast } from 'react-toastify'

import backInvitesCS from '../assets/images/cs-invites.svg'
import backInvitesVal from '../assets/images/val-invites.svg'

export function GameInvite() {
  const [invites, setInvites] = useState([])
  const { game } = useParams()

  useEffect(() => {
    async function fetchGameInvites() {
      try {
        const response = await api.get(`/invites/${game}`)

        setInvites(response.data.invites)
      } catch (err) {
        toast.error('Falha ao listar os convites.')
      }
    }

    fetchGameInvites()
  }, [game])

  return (
    <>
      {game === 'valorant' ? (
        <img
          src={backInvitesVal}
          alt="Raze"
          style={{
            position: 'fixed',
            bottom: 0,
            right: 0,
            width: '640px',
            opacity: 0.6,
            zIndex: -10
          }}
        />
      ) : (
        <img
          src={backInvitesCS}
          alt="Contra-Terrorista"
          style={{
            position: 'fixed',
            bottom: 0,
            right: 0,
            width: '540px',
            opacity: 0.6,
            zIndex: -10
          }}
        />
      )}

      <Box sx={{ width: '100%' }}>
        <TypoMain
          sx={{
            fontSize: '32px',
            paddingTop: '24px',
            paddingBottom: '24px',
            textAlign: 'right'
          }}
        >
          Esses são todos os convites de{' '}
          {game === 'counter-strike' ? 'Counter Strike' : 'Valorant'}.
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
                <InviteCard {...invite} blank={true} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  )
}
