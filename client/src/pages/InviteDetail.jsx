import { Box, Typography } from '@mui/material'
import TypoMain from '../components/TypoMain'
import { useEffect, useState } from 'react'

import { api } from '../services/api'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import TypoSecond from '../components/TypoSecond.jsx'

import individual from '../assets/images/vectors/individual.svg'
import discord from '../assets/images/vectors/discord.svg'
import mic from '../assets/images/vectors/mic.svg'
import tryhard from '../assets/images/vectors/tryhard.svg'
import smile from '../assets/images/vectors/smile.svg'

import { formatDistance } from 'date-fns'

import { pt } from 'date-fns/locale'

import backInviteDetailCS from '../assets/images/cs-invite-detail.png'
import backInviteDetailVal from '../assets/images/val-invite-detail.svg'

export function InviteDetail() {
  const [invite, setInvite] = useState(null)

  const { inviteId } = useParams()

  useEffect(() => {
    async function fetchInvite() {
      try {
        const response = await api.get(`/invites/show/${inviteId}`)

        setInvite(response.data.invite)
      } catch (err) {
        toast.error('Falha ao buscar os dados desse convite.')
      }
    }

    fetchInvite()
  }, [inviteId])

  return (
    <>
      {!invite ? (
        <></>
      ) : invite?.game === 'valorant' ? (
        <img
          src={backInviteDetailVal}
          alt="Fade"
          style={{
            position: 'fixed',
            bottom: 0,
            right: 40,
            width: '460px',
            opacity: 0.6,
            zIndex: -10
          }}
        />
      ) : (
        <img
          src={backInviteDetailCS}
          alt="Terrorista"
          style={{
            position: 'fixed',
            bottom: 0,
            right: 40,
            width: '380px',
            opacity: 0.6,
            zIndex: -10
          }}
        />
      )}

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '50px'
        }}
      >
        <Box
          sx={{
            width: '1020px',
            background:
              'linear-gradient(180deg, rgba(253, 95, 109, 0.7) 0%, rgba(20, 28, 39, 0.7) 100%)',
            mixBlendMode: 'luminosity',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            padding: '24px',
            borderRadius: '8px'
          }}
        >
          {!invite ? (
            <TypoMain sx={{ fontSize: '24px' }}>Carregando...</TypoMain>
          ) : (
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}
            >
              <TypoMain sx={{ fontSize: '38px' }}>
                {invite.isRanked ? 'Ranked' : 'Unranked'} de{' '}
                {invite.game === 'valorant' ? 'Valorant' : 'Counter Strike'}
              </TypoMain>

              <Box sx={{ width: '100%', marginTop: '12px' }}>
                <TypoSecond sx={{ fontSize: '24px' }}>
                  Convite criado por <strong>{invite.user.username}</strong> há{' '}
                  {formatDistance(new Date(invite?.createdAt), new Date(), {
                    locale: pt
                  })}
                </TypoSecond>

                {invite.game === 'valorant' ? (
                  <TypoSecond sx={{ fontSize: '24px' }}>
                    Riot ID e Tag:{' '}
                    <strong>
                      {invite.user.riotId} #{invite.user.riotTag}
                    </strong>
                  </TypoSecond>
                ) : (
                  <TypoSecond sx={{ fontSize: '24px' }}>
                    Perfil da Steam: <strong>{invite.user.steamId}</strong>
                  </TypoSecond>
                )}
              </Box>

              <Box sx={{ width: '100%', marginTop: '12px' }}>
                <TypoSecond sx={{ fontSize: '24px' }}>
                  Descrição do convite:
                </TypoSecond>

                <Box
                  sx={{
                    width: '100%',
                    marginTop: '4px',
                    borderRadius: '8px',
                    background:
                      'linear-gradient(180deg, rgba(17, 27, 37, 0.72) 0%, rgba(29, 44, 73, 0.44) 100%)',
                    padding: '16px'
                  }}
                >
                  <TypoSecond>{invite.notes}</TypoSecond>
                </Box>
              </Box>

              <Box sx={{ width: '100%', marginTop: '16px' }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: '12px'
                  }}
                >
                  <img
                    src={individual}
                    alt="Person"
                    style={{ width: '24px' }}
                  />
                  <Typography
                    sx={{
                      fontSize: '24px',
                      fontFamily: 'AdventPro',
                      color: '#fff'
                    }}
                  >
                    {invite.numPlayers} jogadores no grupo
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '16px',
                  marginTop: '24px'
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'AdventPro',
                    fontSize: '20px',
                    color: '#fff',
                    padding: '0px 12px',
                    backgroundColor: '#858C99',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  {invite.motivation === 'ranked' ? (
                    <>
                      <img
                        src={tryhard}
                        alt="Tryhard"
                        style={{ width: '20px' }}
                      />
                      Jogando sério
                    </>
                  ) : (
                    <>
                      <img src={smile} alt="Smile" style={{ width: '16px' }} />
                      Jogando por diversão
                    </>
                  )}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: 'AdventPro',
                    fontSize: '20px',
                    color: '#fff',
                    padding: '0px 12px',
                    backgroundColor: '#858C99',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}
                >
                  {invite.communication === 'discord' ? (
                    <>
                      <img
                        src={discord}
                        alt="Discord"
                        style={{ width: '16px' }}
                      />
                      Usando Discord
                    </>
                  ) : (
                    <>
                      <img
                        src={mic}
                        alt="Microphone"
                        style={{ width: '16px' }}
                      />
                      Usando chat de voz do jogo
                    </>
                  )}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  )
}
