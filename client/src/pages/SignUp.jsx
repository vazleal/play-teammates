import { useState } from 'react'
import { Box, TextField, Grid, Button } from '@mui/material'
import '../fonts.css'
import TypoMain from '../components/TypoMain'
import TypoSecond from '../components/TypoSecond'

export function SignUp() {
  const [user, setUser] = useState(null)
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      <Box
        sx={{
          background: 'linear-gradient(180deg, #1D2C49 0%, #0F1922 100%)',
          opacity: '0.8',
          borderRadius: '5px',
          padding: '27px 38px',
          height: '500px',
          width: '872px'
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

        <TypoSecond
          sx={{
            fontSize: '24px'
          }}
        >
          Escolha um nome de usuário{' '}
        </TypoSecond>
        <TextField
          id="filled-basic"
          label="seu nome de usuário aqui"
          variant="filled"
          sx={{
            width: '100%',
            margin: '0px 0px 30px 0px'
          }}
        ></TextField>

        <TypoSecond
          sx={{
            fontSize: '24px'
          }}
        >
          Seu e-mail{' '}
        </TypoSecond>
        <TextField
          id="filled-basic"
          label="seu e-mail aqui"
          variant="filled"
          sx={{
            width: '100%',
            margin: '0px 0px 30px 0px'
          }}
        ></TextField>

        <Grid container>
          <Grid item xs={6}>
            <TypoSecond
              sx={{
                fontSize: '24px'
              }}
            >
              Crie uma senha{' '}
            </TypoSecond>
            <TextField
              id="filled-basic"
              label="insira sua senha"
              type="password"
              variant="filled"
              sx={{
                width: '95%',
                margin: '0px 0px 30px 0px',
                input: { fontColor: 'white' }
              }}
            ></TextField>
          </Grid>
          <Grid item xs={6}>
            <TypoSecond
              sx={{
                fontSize: '24px'
              }}
            >
              Repita sua senha{' '}
            </TypoSecond>
            <TextField
              id="filled-basic"
              label="insira a senha novamente"
              type="password"
              variant="filled"
              sx={{
                width: '95%',
                margin: '0px 0px 30px 0px'
              }}
            ></TextField>
          </Grid>
        </Grid>
        <Box
          sx={{
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
            padding: '10px 0px 0px 0px'
          }}
        >
          <Button
            size="large"
            variant="contained"
            sx={{
              textTransform: 'none',
              backgroundColor: '#2F405C',
              borderRadius: '11px',
              fontSize: '25px',
              padding: '2px 15px'
            }}
          >
            <TypoMain
              sx={{
                fontSize: '25px'
              }}
            >
              Criar Conta
            </TypoMain>
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
