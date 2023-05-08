import { useState } from 'react'
import { Box, Grid, Modal } from '@mui/material'
import '../fonts.css'
import TypoMain from '../components/TypoMain'
import TypoSecond from '../components/TypoSecond'
import MainButton from '../components/MainButton'
import WhiteTextField from '../components/WhiteTextField.jsx'
import ProfileContainer from '../components/ProfileContainer'

import { api } from '../services/api'

import { toast } from 'react-toastify'
import { getErrorMessage } from '../utils/getErrorMessage'

import { useNavigate } from 'react-router-dom'

export function SignUp() {
  const [username, setUsername] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)

  const [modalOpen, setModalOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const navigate = useNavigate()

  function handleModalOpen(message) {
    setModalOpen(true)
    setErrorMessage(message)
  }

  async function handleSignUp(event) {
    event.preventDefault()

    if (!username) {
      handleModalOpen('Por favor, insira um nome de usuário válido.')
      return
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      handleModalOpen('Por favor, insira um endereço de e-mail válido.')
      return
    }

    if (!password || password.length < 6) {
      handleModalOpen('A senha precisa ter pelo menos seis caracteres.')
      return
    }

    if (password !== confirmPassword) {
      handleModalOpen('A senha e a confirmação de senha não são iguais.')
      return
    }

    try {
      await api.post('/users', {
        username,
        email,
        password
      })

      toast.success('Conta criada com sucesso!')

      navigate('/sign-in')
    } catch (err) {
      toast.error(getErrorMessage(err))
    }
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '180px'
        }}
      >
        <ProfileContainer>
          <TypoMain
            sx={{
              fontSize: '44px',
              padding: '0px 0px 10px 0px'
            }}
          >
            Cadastre-se
          </TypoMain>

          <form onSubmit={handleSignUp}>
            <TypoSecond>Escolha um nome de usuário:</TypoSecond>
            <WhiteTextField
              value={username}
              onChange={e => setUsername(e.target.value)}
              sx={{
                width: '100%'
              }}
            />

            <TypoSecond sx={{ marginTop: '-18px' }}>Seu e-mail:</TypoSecond>
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
                marginTop: '-18px',
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
                <TypoSecond>Crie uma senha:</TypoSecond>
                <WhiteTextField
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
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
                <TypoSecond>Repita sua senha:</TypoSecond>
                <WhiteTextField
                  type="password"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  sx={{
                    width: '100%'
                  }}
                />
              </Box>
            </Box>
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
                  Cadastrar
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
              fontSize: '24px'
            }}
          >
            Erro
          </TypoMain>
          <TypoSecond>{errorMessage}</TypoSecond>
        </Box>
      </Modal>
    </>
  )
}
