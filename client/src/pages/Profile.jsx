import { useState } from 'react'
import { Box, Avatar, Modal } from '@mui/material'
import '../fonts.css'
import TypoMain from '../components/TypoMain'
import TypoSecond from '../components/TypoSecond'
import MainButton from '../components/MainButton'
import WhiteTextField from '../components/WhiteTextField.jsx'
import ProfileContainer from '../components/ProfileContainer'

import { useAuth } from '../hooks/useAuth'

import { api } from '../services/api'
import { toast } from 'react-toastify'
import { getErrorMessage } from '../utils/getErrorMessage'

export function Profile() {
  const { user, updateUser } = useAuth()

  const [riotId, setRiotId] = useState(user.riotId || '')
  const [riotTag, setRiotTag] = useState(user.riotTag || '')
  const [steamId, setSteamId] = useState(user.steamId || '')
  const [steamName, setSteamName] = useState(user.steamName || '')
  const [username, setUsername] = useState(user.username)
  const [email, setEmail] = useState(user.email)

  const [modalOpen, setModalOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  function handleModalOpen(message) {
    setModalOpen(true)
    setErrorMessage(message)
  }

  async function handleUpdateUser(event) {
    event.preventDefault()

    if (!username) {
      handleModalOpen('Por favor, insira um nome de usuário válido.')
      return
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      handleModalOpen('Por favor, insira um endereço de e-mail válido.')
      return
    }

    try {
      const response = await api.put('/users', {
        riotId,
        steamId,
        riotTag,
        steamName,
        username,
        email
      })

      const { newUser } = response.data

      updateUser(newUser)

      setRiotId(newUser.riotId)
      setSteamId(newUser.steamId)
      setRiotTag(newUser.riotTag)
      setSteamName(newUser.steamName)
      setUsername(newUser.username)
      setEmail(newUser.email)

      toast.success('Informações atualizadas com sucesso!')
    } catch (err) {
      toast.error(getErrorMessage(err))
    }
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '40px'
        }}
      >
        <Avatar src={user.avatar} sx={{ width: '120px', height: '120px' }} />

        <TypoMain
          sx={{ fontSize: '32px', paddingTop: '8px', paddingBottom: '16px' }}
        >
          {user.username}
        </TypoMain>

        <ProfileContainer>
          <form onSubmit={handleUpdateUser}>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                gap: '12px'
              }}
            >
              <Box
                sx={{
                  width: '100%'
                }}
              >
                <TypoSecond sx={{ fontFamily: 'AdventPro', color: '#fff' }}>
                  Riot ID:
                </TypoSecond>
                <WhiteTextField
                  value={riotId}
                  onChange={e => setRiotId(e.target.value)}
                  sx={{
                    width: '100%'
                  }}
                />
              </Box>

              <Box
                sx={{
                  width: '100%'
                }}
              >
                <TypoSecond sx={{ fontFamily: 'AdventPro', color: '#fff' }}>
                  Link do perfil da Steam:
                </TypoSecond>
                <WhiteTextField
                  value={steamId}
                  onChange={e => setSteamId(e.target.value)}
                  sx={{
                    width: '100%'
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                gap: '12px',
                marginTop: '-18px'
              }}
            >
              <Box
                sx={{
                  width: '100%'
                }}
              >
                <TypoSecond sx={{ fontFamily: 'AdventPro', color: '#fff' }}>
                  Riot Tag:
                </TypoSecond>
                <WhiteTextField
                  value={riotTag}
                  onChange={e => setRiotTag(e.target.value)}
                  sx={{
                    width: '100%'
                  }}
                />
              </Box>

              <Box
                sx={{
                  width: '100%'
                }}
              >
                <TypoSecond sx={{ fontFamily: 'AdventPro', color: '#fff' }}>
                  Nome de usuário na Steam:
                </TypoSecond>
                <WhiteTextField
                  value={steamName}
                  onChange={e => setSteamName(e.target.value)}
                  sx={{
                    width: '100%'
                  }}
                />
              </Box>
            </Box>

            <TypoSecond sx={{ fontFamily: 'AdventPro', color: '#fff' }}>
              Seu nome de usuário:
            </TypoSecond>
            <WhiteTextField
              value={username}
              onChange={e => setUsername(e.target.value)}
              sx={{
                width: '100%'
              }}
            />

            <TypoSecond
              sx={{
                marginTop: '-18px',

                fontFamily: 'AdventPro',
                color: '#fff'
              }}
            >
              Seu e-mail:
            </TypoSecond>
            <WhiteTextField
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              sx={{
                width: '100%'
              }}
            />

            <Box
              sx={{
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <MainButton type="submit">
                <TypoMain
                  sx={{
                    fontSize: '25px'
                  }}
                >
                  Alterar
                </TypoMain>
              </MainButton>
            </Box>
          </form>
        </ProfileContainer>
      </Box>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'linear-gradient(180deg, #1D2C49 0%, #0F1922 100%)',
            borderRadius: '8px',
            boxShadow: 24,
            p: 4,
            maxWidth: '90vw',
            maxHeight: '90vh',
            overflow: 'auto'
          }}
        >
          <TypoMain
            sx={{
              fontSize: '36px'
            }}
          >
            Erro
          </TypoMain>
          <TypoSecond sx={{ fontSize: '24px', fontFamily: 'AdventPro' }}>
            {errorMessage}
          </TypoSecond>
        </Box>
      </Modal>
    </>
  )
}
