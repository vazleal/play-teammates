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

  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [userError, setUserError] = useState(false)

  const [openModal, setOpenModal] = useState(false)

  const navigate = useNavigate()

  const handleModalOpen = message => {
    setModalOpen(true)
    setErrorMessage(message)
  }

  async function handleSignUp() {
    if (!username) {
      alert('Please enter a username')
      return
    }
    if (!email) {
      alert('Please enter an email')
      return
    }
    if (!password) {
      alert('Please enter a password')
      return
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      handleModalOpen('Por favor, insira um endereço de e-mail válido')
      return
    }
    if (!password || password.length < 8) {
      handleModalOpen('A senha precisa ter pelo menos oito caracteres')
      return
    }

    try {
      await api.post('/users', {
        username,
        email,
        password
      })

      toast.success('Account successfully created!')

      navigate('/sign-in')
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
          height: '570px'
        }}
      >
        <TypoMain
          sx={{
            fontSize: '48px',
            padding: '0px 0px 10px 0px'
          }}
        >
          Cadastre-se{' '}
        </TypoMain>

        <TypoSecond>Escolha um nome de usuário</TypoSecond>
        <WhiteTextField
          label="seu nome de usuário aqui"
          value={username}
          onChange={e => setUsername(e.target.value)}
          sx={{
            width: '100%'
          }}
        />

        <TypoSecond>Seu e-mail</TypoSecond>
        <WhiteTextField
          label="seu e-mail aqui"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          sx={{
            width: '100%'
          }}
        />

        <Grid container>
          <Grid item xs={6}>
            <TypoSecond>Crie uma senha</TypoSecond>
            <WhiteTextField
              label="insira sua senha"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              sx={{
                width: '98%'
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TypoSecond>Repita sua senha</TypoSecond>
            <WhiteTextField
              label="insira sua senha novamente"
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              sx={{
                width: '100%'
              }}
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <MainButton onClick={handleSignUp}>
            <TypoMain
              sx={{
                fontSize: '25px'
              }}
            >
              Criar Conta
            </TypoMain>
          </MainButton>
        </Box>
      </ProfileContainer>
    </Box>
  )
}
