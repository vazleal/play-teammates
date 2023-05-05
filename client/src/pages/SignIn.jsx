import { useState } from 'react'
import { Box, Modal } from '@mui/material'
import '../fonts.css'
import TypoMain from '../components/TypoMain'
import TypoSecond from '../components/TypoSecond'
import MainButton from '../components/MainButton'
import WhiteTextField from '../components/WhiteTextField.jsx'
import ProfileContainer from '../components/ProfileContainer'

import { useAuth } from '../hooks/useAuth'

import { toast } from 'react-toastify'
import { getErrorMessage } from '../utils/getErrorMessage'

export function SignIn() {
  const { signIn } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const [modalOpen, setModalOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  function handleModalOpen(message) {
    setModalOpen(true)
    setErrorMessage(message)
  }

  async function handleSubmit() {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      handleModalOpen('Por favor, insira um endereço de e-mail válido')
      return
    } else {
      setEmailError(false)
    }

    if (!password || password.length < 6) {
      handleModalOpen('A senha precisa ter pelo menos seis caracteres')
      return
    } else {
      setPasswordError(false)
    }

    try {
      await signIn({ email, password })
    } catch (err) {
      toast.error(getErrorMessage(err))
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      <ProfileContainer
        sx={{
          height: '430px'
        }}
      >
        <TypoMain
          sx={{
            fontSize: '48px',
            padding: '0px 0px 10px 0px'
          }}
        >
          Entre na sua conta{' '}
        </TypoMain>

        <TypoSecond>Seu e-mail </TypoSecond>
        <WhiteTextField
          label="seu e-mail aqui"
          type="email"
          sx={{
            width: '100%'
          }}
          value={email}
          onChange={e => setEmail(e.target.value)}
          error={emailError}
          helperText={
            emailError ? 'Por favor, insira um endereço de e-mail válido' : ''
          }
        />

        <TypoSecond>Sua senha </TypoSecond>
        <WhiteTextField
          label="insira sua senha"
          type="password"
          sx={{
            width: '100%'
          }}
          value={password}
          onChange={e => setPassword(e.target.value)}
          error={passwordError}
          helperText={passwordError ? 'Por favor, insira uma senha válida' : ''}
        />

        <Box
          sx={{
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <MainButton onClick={handleSubmit}>
            <TypoMain
              sx={{
                fontSize: '25px'
              }}
            >
              Entrar
            </TypoMain>
          </MainButton>
        </Box>
      </ProfileContainer>
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
    </Box>
  )
}
