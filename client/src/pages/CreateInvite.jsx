import {
  Box,
  Button,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography
} from '@mui/material'
import '../fonts.css'
import individual from '../assets/images/vectors/individual.svg'
import discord from '../assets/images/vectors/discord.svg'
import mic from '../assets/images/vectors/mic.svg'
import tryhard from '../assets/images/vectors/tryhard.svg'
import smile from '../assets/images/vectors/smile.svg'
import { useState } from 'react'
import { makeStyles } from '@mui/styles'
import { useAuth } from '../hooks/useAuth'
import { api } from '../services/api'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import MainButton from '../components/MainButton'

import backCreateInviteVal from '../assets/images/val-create-invite.svg'
import backCreateInviteCS from '../assets/images/cs-create-invite.svg'

import TypoMain from '../components/TypoMain'
import TypoSecond from '../components/TypoSecond'
import { getErrorMessage } from '../utils/getErrorMessage'

const useStyles = makeStyles({
  text: {
    fontFamily: 'AdventPro',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '32px',
    lineHeight: '38px',
    color: '#FFFFFF'
  },
  textMilitary: {
    fontFamily: 'PostNoBillsJaffna !important',
    fontStyle: 'normal !important',
    fontWeight: 300,
    fontSize: '32px !important',
    lineHeight: '38px !important',
    color: '#FFFFFF !important'
  },
  indiv: {
    position: 'absolute',
    left: '3.51%',
    top: '43.23%'
  },
  post: {
    position: 'absolute',
    align: 'center',
    top: '40%',
    padding: '6px 15px !important'
  }
})

export function CreateInvite() {
  const { user } = useAuth()

  const navigate = useNavigate()

  const classes = useStyles()

  const [game, setGame] = useState(null)
  const [ranked, setRanked] = useState(false)
  const [communication, setCommunication] = useState(null)
  const [notes, setNotes] = useState('')
  const [numPlayers, setNumPlayers] = useState(0)
  const [rankPlayers, setRankPlayers] = useState(null)
  const [motivation, setMotivation] = useState(null)

  const [modalOpen, setModalOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  function handleModalOpen(message) {
    setModalOpen(true)
    setErrorMessage(message)
  }

  async function handlePostInvite(event) {
    if (!game) {
      handleModalOpen('Por favor, informe o jogo do convite.')
      return
    }

    if (!ranked) {
      handleModalOpen('Por favor, informe se a partida é ranqueada ou não.')
      return
    }

    if (!numPlayers) {
      handleModalOpen(
        'Por favor, informe a quantidade de jogadores que estão no grupo.'
      )
      return
    }

    if (!rankPlayers) {
      handleModalOpen(
        'Por favor, informe o elo mínimo para participar do seu grupo.'
      )
      return
    }

    if (!motivation) {
      handleModalOpen(
        'Por favor, informe se está/estão jogando sério ou apenas se divertindo.'
      )
      return
    }

    if (!communication) {
      handleModalOpen('Por favor, informe como a comunicação irá acontecer.')
      return
    }

    try {
      await api.post('/invites', {
        userId: user.id,
        isRanked: ranked === 'ranked',
        game,
        notes,
        numPlayers,
        rankPlayers,
        motivation,
        communication
      })

      toast.success('Convite criado com sucesso!')

      navigate('/')
    } catch (err) {
      toast.error(getErrorMessage(err))
    }
  }

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          width: '1020px',
          margin: '0 auto',
          display: 'flex',
          align: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: '8px',
          marginTop: '270px',
          marginBottom: '50px'
        }}
      >
        <img
          src={backCreateInviteCS}
          alt="Contra-Terrorista"
          style={{
            position: 'absolute',
            top: -174,
            width: '520px',
            left: 420,
            zIndex: -11
          }}
        />

        <img
          src={backCreateInviteVal}
          alt="Viper"
          style={{
            position: 'absolute',
            top: -239,
            left: 120,
            width: '580px'
          }}
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            background:
              'linear-gradient(180deg, rgba(253, 95, 109, 0.7) 0%, rgba(20, 28, 39, 0.7) 100%)',
            mixBlendMode: 'luminosity',
            borderRadius: '8px',
            padding: '32px'
          }}
          className={classes.mainBox}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              gap: '12px'
            }}
          >
            <Button
              sx={{
                fontSize: '34px',
                color: '#fff',
                fontFamily: 'PostNoBillsJaffna',
                background: game !== 'valorant' ? '#858C99' : '#AFB4BF',
                padding: '0 14px',
                height: '52px',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  background: game !== 'valorant' ? '#858C99' : '#AFB4BF'
                }
              }}
              onClick={() => setGame('valorant')}
            >
              Valorant
            </Button>
            <Button
              sx={{
                fontSize: '34px',
                color: '#fff',
                fontFamily: 'PostNoBillsJaffna',
                background: game !== 'counter-strike' ? '#858C99' : '#AFB4BF',
                padding: '0 14px',
                height: '52px',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  background: game !== 'counter-strike' ? '#858C99' : '#AFB4BF'
                }
              }}
              onClick={() => setGame('counter-strike')}
            >
              Counter Strike
            </Button>
          </Box>

          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              gap: '12px',
              marginTop: '16px'
            }}
          >
            <Button
              sx={{
                fontSize: '34px',
                color: '#fff',
                fontFamily: 'PostNoBillsJaffna',
                background: ranked === 'ranked' ? '#AFB4BF' : '#858C99',
                padding: '0 14px',
                height: '52px',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  background: ranked === 'ranked' ? '#AFB4BF' : '#858C99'
                }
              }}
              onClick={() => setRanked('ranked')}
            >
              Ranked
            </Button>
            <Button
              sx={{
                fontSize: '34px',
                color: '#fff',
                fontFamily: 'PostNoBillsJaffna',
                background: ranked === 'unranked' ? '#AFB4BF' : '#858C99',
                padding: '0 14px',
                height: '52px',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  background: ranked === 'unranked' ? '#AFB4BF' : '#858C99'
                }
              }}
              onClick={() => setRanked('unranked')}
            >
              Unranked
            </Button>
          </Box>

          <Typography
            sx={{
              fontFamily: 'AdventPro',
              fontSize: '26px',
              color: '#fff',
              marginTop: '30px'
            }}
          >
            Descrição do convite:
          </Typography>

          <TextField
            variant="standard"
            sx={{
              color: '#fff',
              padding: '12px 16px',
              background:
                'linear-gradient(180deg, rgba(17, 27, 37, 0.5) 0%, rgba(29, 44, 73, 0.44) 100%)',
              borderRadius: '8px',
              input: {
                color: '#fff',
                padding: '12px 16px',
                fontSize: '22px',
                fontFamily: 'AdventPro'
              },
              textarea: {
                color: '#fff',
                fontSize: '22px',
                fontFamily: 'AdventPro'
              },
              '& .MuiInputLabel-root': {
                color: '#fff !important',
                padding: '0px 10px'
              }
            }}
            InputProps={{
              disableUnderline: true
            }}
            value={notes}
            onChange={e => setNotes(e.target.value)}
            multiline
            rows={5}
            maxRows={5}
          />

          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '16px',
              marginTop: '24px'
            }}
          >
            <img src={individual} style={{ width: '24px' }} />
            <Typography
              sx={{
                fontFamily: 'AdventPro',
                fontSize: '28px',
                color: '#FFFFFF'
              }}
            >
              Número de jogadores no grupo:
            </Typography>

            <Select
              value={numPlayers}
              onChange={e => setNumPlayers(e.target.value)}
              sx={{
                color: '#fff',
                fontFamily: 'AdventPro',
                fontSize: '24px',
                fontWeight: 600
              }}
              disabled={!game}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
            </Select>
          </Box>

          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '16px',
              marginTop: '16px'
            }}
          >
            <Typography
              sx={{
                fontFamily: 'AdventPro',
                fontSize: '28px',
                color: '#FFFFFF'
              }}
            >
              Elo mínimo:
            </Typography>

            {game === 'counter-strike' ? (
              <Select
                value={rankPlayers}
                onChange={e => setRankPlayers(e.target.value)}
                sx={{
                  color: '#fff',
                  fontFamily: 'AdventPro',
                  fontSize: '24px',
                  fontWeight: 600
                }}
                disabled={!game}
              >
                <MenuItem value="unranked">Unranked</MenuItem>
                <MenuItem value="prata">Prata</MenuItem>
                <MenuItem value="ouro">Ouro</MenuItem>
                <MenuItem value="ak">AK</MenuItem>
                <MenuItem value="xerife">Xerife</MenuItem>
                <MenuItem value="aguia">Águia</MenuItem>
                <MenuItem value="supremo">Supremo</MenuItem>
                <MenuItem value="global">Global</MenuItem>
              </Select>
            ) : (
              <Select
                value={rankPlayers}
                onChange={e => setRankPlayers(e.target.value)}
                sx={{
                  color: '#fff',
                  fontFamily: 'AdventPro',
                  fontSize: '24px',
                  fontWeight: 600
                }}
              >
                <MenuItem value="unranked">Unranked</MenuItem>
                <MenuItem value="ferro">Ferro</MenuItem>
                <MenuItem value="bronze">Bronze</MenuItem>
                <MenuItem value="prata">Prata</MenuItem>
                <MenuItem value="ouro">Ouro</MenuItem>
                <MenuItem value="platina">Platina</MenuItem>
                <MenuItem value="diamante">Diamante</MenuItem>
                <MenuItem value="ascendente">Ascendente</MenuItem>
                <MenuItem value="imortal">Imortal</MenuItem>
                <MenuItem value="radiante">Radiante</MenuItem>
              </Select>
            )}
          </Box>

          <Typography
            sx={{
              fontFamily: 'AdventPro',
              fontSize: '30px',
              color: '#FFFFFF',
              alignSelf: 'center',
              marginTop: '24px'
            }}
          >
            Tags:
          </Typography>

          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '16px',
              marginTop: '24px'
            }}
          >
            <Typography
              sx={{
                fontFamily: 'AdventPro',
                fontSize: '30px',
                color: '#FFFFFF'
              }}
            >
              Motivação:
            </Typography>

            <Button
              sx={{
                fontFamily: 'AdventPro',
                fontSize: '22px',
                color: '#fff',
                padding: '0px 12px',
                backgroundColor: motivation === 'serio' ? '#858C99' : '#636669',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textTransform: 'none',
                gap: '8px',
                '&:hover': {
                  backgroundColor:
                    motivation === 'serio' ? '#858C99' : '#636669'
                }
              }}
              onClick={() => setMotivation('serio')}
            >
              <img src={tryhard} alt="Tryhard" style={{ width: '20px' }} />
              Jogando sério
            </Button>

            <Button
              sx={{
                fontFamily: 'AdventPro',
                fontSize: '22px',
                color: '#fff',
                padding: '0px 12px',
                backgroundColor:
                  motivation === 'diversao' ? '#858C99' : '#636669',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textTransform: 'none',
                gap: '8px',
                '&:hover': {
                  backgroundColor:
                    motivation === 'diversao' ? '#858C99' : '#636669'
                }
              }}
              onClick={() => setMotivation('diversao')}
            >
              <img src={smile} alt="Smile" style={{ width: '16px' }} />
              Jogando por diversão
            </Button>
          </Box>

          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '16px',
              marginTop: '24px'
            }}
          >
            <Typography
              sx={{
                fontFamily: 'AdventPro',
                fontSize: '30px',
                color: '#FFFFFF'
              }}
            >
              Comunicação:
            </Typography>

            <Button
              sx={{
                fontFamily: 'AdventPro',
                fontSize: '22px',
                color: '#fff',
                padding: '0px 12px',
                backgroundColor:
                  communication === 'discord' ? '#858C99' : '#636669',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textTransform: 'none',
                gap: '8px',
                '&:hover': {
                  backgroundColor:
                    communication === 'discord' ? '#858C99' : '#636669'
                }
              }}
              onClick={() => setCommunication('discord')}
            >
              <img src={discord} alt="Discord" style={{ width: '16px' }} />
              Usando Discord
            </Button>

            <Button
              sx={{
                fontFamily: 'AdventPro',
                fontSize: '22px',
                color: '#fff',
                padding: '0px 12px',
                backgroundColor:
                  communication === 'ingame' ? '#858C99' : '#636669',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textTransform: 'none',
                gap: '8px',
                '&:hover': {
                  backgroundColor:
                    communication === 'ingame' ? '#858C99' : '#636669'
                }
              }}
              onClick={() => setCommunication('ingame')}
            >
              <img src={mic} alt="Microphone" style={{ width: '16px' }} />
              Usando chat de voz do jogo
            </Button>
          </Box>

          <Box
            sx={{
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
              marginTop: '40px'
            }}
          >
            <MainButton onClick={handlePostInvite}>
              <TypoMain
                sx={{
                  fontSize: '25px'
                }}
              >
                Criar convite
              </TypoMain>
            </MainButton>
          </Box>
        </Box>
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
