import { useState } from 'react'
import { Box, Grid, Avatar } from '@mui/material'
import '../fonts.css'
import TypoMain from '../components/TypoMain'
import TypoSecond from '../components/TypoSecond'
import MainButton from '../components/MainButton'
import WhiteTextField from '../components/WhiteTextField.jsx'
import ProfileContainer from '../components/ProfileContainer'
import avatarIMG from '../assets/images/Multiavatar-Teammates.jpg'

export function Profile() {
  const [user, setUser] = useState(null)
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid
          item
          xs={12}
          sx={{
            // display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '50px 0px 0px 0px',
            textAlign: 'center',
            verticalAlign: 'middle'
          }}
        >
          <Avatar
            src={avatarIMG}
            sx={{
              height: '140px',
              width: '140px',
              margin: 'auto',
              display: 'inline-block'
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            // display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0px',
            textAlign: 'center',
            verticalAlign: 'middle'
          }}
        >
          <TypoMain
            sx={{
              fontSize: '30px',
              margin: 'auto',
              display: 'inline-block'
            }}
          >
            Username
          </TypoMain>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          // display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          border: 'none',
          textAlign: 'center',
          verticalAlign: 'middle'
        }}
      >
        <ProfileContainer
          sx={{
            height: '570px',
            margin: 'auto',
            display: 'inline-block'
          }}
        >
          <Grid container>
            <Grid item xs={6}>
              <Grid item xs={12}>
                <TypoSecond>Riot ID</TypoSecond>
                <WhiteTextField
                  label="Seu Riot ID aqui"
                  sx={{
                    width: '98%',
                    margin: '0px 0px 10px 0px !important'
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TypoSecond>Riot Tag</TypoSecond>
                <WhiteTextField
                  label="Sua Riot Tag aqui"
                  sx={{
                    width: '98%',
                    margin: '0px 0px 10px 0px !important'
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <MainButton>
                  <TypoMain
                    sx={{
                      fontSize: '25px'
                    }}
                  >
                    Alterar
                  </TypoMain>
                </MainButton>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid item xs={12}>
                <TypoSecond>Perfil da Steam</TypoSecond>
                <WhiteTextField
                  label="Link do perfil da Steam"
                  sx={{
                    width: '100%',
                    margin: '0px 0px 10px 0px !important'
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TypoSecond>Nome da Steam</TypoSecond>
                <WhiteTextField
                  label="Nome de usuário na Steam:"
                  sx={{
                    width: '100%',
                    margin: '0px 0px 10px 0px !important'
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <MainButton>
                  <TypoMain
                    sx={{
                      fontSize: '25px'
                    }}
                  >
                    Alterar
                  </TypoMain>
                </MainButton>
              </Grid>
            </Grid>
          </Grid>
          <TypoSecond>Seu e-mail </TypoSecond>
          <WhiteTextField
            label="altere seu e-mail aqui"
            type="email"
            sx={{
              width: '100%',
              margin: '0px 0px 10px 0px !important'
            }}
          />

          <TypoSecond>Sua senha </TypoSecond>
          <WhiteTextField
            label="altere sua senha"
            type="password"
            sx={{
              width: '100%',
              margin: '0px 0px 15px 0px !important'
            }}
          />

          <Box
            sx={{
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <MainButton>
              <TypoMain
                sx={{
                  fontSize: '25px'
                }}
              >
                Alterar
              </TypoMain>
            </MainButton>
          </Box>
        </ProfileContainer>
      </Grid>
    </Grid>
  )
}
