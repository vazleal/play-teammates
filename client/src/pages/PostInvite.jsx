import { Box, Grid, MenuItem, Select, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import '../fonts.css'
import individual from '../assets/images/vectors/individual.svg';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { useAuth } from '../hooks/useAuth'
import { api } from '../services/api'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import MainButton from '../components/MainButton';


const useStyles = makeStyles({
  text: {
    fontFamily: 'Advent Pro',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '32px',
    lineHeight: '38px',
    color: '#FFFFFF',
  },
  textMilitary: {
    fontFamily: 'Post No Bills Jaffna Light !important',
    fontStyle: 'normal !important',
    fontWeight: 300,
    fontSize: '32px !important',
    lineHeight: '38px !important',
    color: '#FFFFFF !important',
  },
  indiv: {
    position: 'absolute',
    left: '23.5%',
    top: '70.25%',
  },
  post: {
    position: 'absolute',
    align: 'center',
    top: '40%',
    padding: '6px 15px !important'
  }
})

function handleModalOpen(message) {
  setModalOpen(true)
  setErrorMessage(message)
}

function PostInvite() {
  const { user } = useAuth();

    const navigate = useNavigate();

    const classes = useStyles();

    const [game, setGame] = useState('');

    const [isRanked, setIsRanked] = useState(0);

    const [communication, setCommunication] = useState('');

    const [notes, setNotes] = useState('');

    const [numPlayers, setNumPlayers] = useState(0);

    const [rankPlayers, setRankPlayers] = useState('');

    const [motivation, setMotivation] = useState('');

    async function handlePostInvite(event) {
      if (!numPlayers) {
        handleModalOpen('Por favor, a quantidade de jogadores que estão no grupo')
        return
      }
      if (!game) {
        handleModalOpen('Por favor, informe o jogo do convite')
        return
      }
      if (!rankPlayers) {
        handleModalOpen(
          'Por favor, informe o elo mínimo para participar do seu grupo'
        )
        return
      }
      if (!motivation) {
        handleModalOpen('Por favor, informe a motivação do convite')
        return
      }
      if (!communication) {
        handleModalOpen('Por favor, informe qual a categoria de comunicação')
        return
      }
      if (!isRanked) {
        handleModalOpen('Por favor, informe se é ranqueada ou não')
        return
      }

    try {
      await api.post('/invites', {
        userId: user.id,
        isRanked,
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
      toast.error('Não foi possível criar o convite')
    }
  };

  return (
    <>
      <Box sx={{
        height: '28.22vh',
      }} />
      <Grid container spacing={50} >
        <Grid item>
        </Grid>
        <Grid item sx={{ width: '90vw', }}>
          <Box sx={{
            display: 'flex',
            align: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80.31%',
            height: '92.38vh',
            background: 'linear-gradient(180deg, #FD5F6D 0%, #141C27 100%)',
            mixBlendMode: 'luminosity',
            opacity: 0.7,
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          }} >
            <ToggleButtonGroup
              value={isRanked} // o valor do botão selecionado atualmente
              exclusive // define que apenas um botão pode ser selecionado por vez
              onChange={(e, value) => setIsRanked(value)} // função chamada quando um botão é selecionado
              aria-label="Selecionar rankeada ou não"
              sx={{
                position: 'absolute',
                left: '40%',
                gap: '20%',
                top: '36%',
              }}>
              <ToggleButton value={true} aria-label="Ranked" sx={{ background: '#F00F15', }}>
                <Typography className={classes.textMilitary}>
                  Ranked
                </Typography>
              </ToggleButton>
              <ToggleButton value={false} aria-label="Unranked" sx={{ background: '#F00F15', }}>
                <Typography className={classes.textMilitary}>
                  Unranked
                </Typography>
              </ToggleButton>
            </ToggleButtonGroup>

            <ToggleButtonGroup
              value={game}
              exclusive
              onChange={(e, value) => setGame(value)}
              aria-label="Selecionar jogo"
              sx={{
                position: 'absolute',
                left: '40%',
                gap: '10%',
                top: '45%',
                minWidth: '500px',
              }}
            >
              <ToggleButton value="counter-strike" aria-label="CS" sx={{ background: '#F00F15', }}>
                <Typography className={classes.textMilitary} sx={{ width: '500' }}>
                  Counter Strike
                </Typography>
              </ToggleButton>
              <ToggleButton value="valorant" aria-label="Valorant" sx={{
                background: '#F00F15',
              }}>
                <Typography className={classes.textMilitary}>
                  Valorant
                </Typography>
              </ToggleButton>
            </ToggleButtonGroup>
            <Typography sx={{
              position: 'absolute',
              width: '300px',
              height: '29px',
              left: '423px',
              top: '50%',
              fontFamily: 'Advent Pro',
              fontStyle: 'normal',
              fontWeight: 250,
              fontSize: '24px',
              lineHeight: '29px',
              textAlign: 'right',
              color: '#FFFFFF',
            }}>
              Descrição do convite
            </Typography>
            <TextField variant='outlined'
              multiline
              label="Descrição do convite"
              type="notes"
              value={notes}
              onChange={e => setNotes(e.target.value)}
              sx={{
                position: 'absolute',
                width: '805px',
                height: '167px',
                left: '550px',
                top: '53%',
                background: 'linear-gradient(180deg, rgba(17, 27, 37, 0.72) 0%, rgba(29, 44, 73, 0.44) 100%)',
                opacity: 0.8,
                borderRadius: '8.13679px',
              }}
            />
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
            }}>
              <img src={individual} className={classes.indiv} />
              <Typography sx={{
                position: 'absolute',
                width: 'auto',
                height: '29px',
                left: '25%',
                top: '70%',
                fontFamily: 'Advent Pro',
                fontStyle: 'normal',
                fontWeight: 250,
                fontSize: '30px',
                lineHeight: '29px',
                textAlign: 'right',
                color: '#FFFFFF',
              }}>
                Número de jogadores no grupo:
              </Typography>
            </Box>
            <Select value={numPlayers}
              onChange={e => setNumPlayers(e.target.value)}
              sx={{
                position: 'absolute',
                left: '45%',
                top: '69.5%',
              }}
            >
              <MenuItem value="" />
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
            </Select>

            <Typography sx={{
              position: 'absolute',
              width: 'auto',
              height: '29px',
              left: '25%',
              top: '80%',
              fontFamily: 'Advent Pro',
              fontStyle: 'normal',
              fontWeight: 250,
              fontSize: '30px',
              lineHeight: '29px',
              textAlign: 'right',
              color: '#FFFFFF',
            }}>
              Elo mínimo:
            </Typography>
            {(game != "Valorant") ? (
              <Select value={rankPlayers} onChange={e => setRankPlayers(e.target.value)}>
                <MenuItem value="unranking" />
                <MenuItem value='prata'>Prata</MenuItem>
                <MenuItem value='ouro'>Ouro</MenuItem>
                <MenuItem value='ak'>Ak</MenuItem>
                <MenuItem value='xerife'>Xerife</MenuItem>
                <MenuItem value='aguia'>Águia</MenuItem>
                <MenuItem value='supremo'>Supremo</MenuItem>
                <MenuItem value='global'>Global</MenuItem>
              </Select>
            ) : (
              <Select value={rankPlayers} onChange={e => setRankPlayers(e.target.value)}>
                <MenuItem value="Sem rank" />
                <MenuItem value='ferro'>Ferro</MenuItem>
                <MenuItem value='bronze'>Bronze</MenuItem>
                <MenuItem value='prata'>Prata</MenuItem>
                <MenuItem value='ouro'>Ouro</MenuItem>
                <MenuItem value='platina'>Platina</MenuItem>
                <MenuItem value='diamante'>Diamante</MenuItem>
                <MenuItem value='ascendente'>Ascendente</MenuItem>
                <MenuItem value='imortal'>Imortal</MenuItem>
                <MenuItem value='radiante'>Radiante</MenuItem>
              </Select>
            )
            }

            <Typography sx={{
              position: 'absolute',
              width: 'auto',
              height: '29px',
              top: '90%',
              fontFamily: 'Advent Pro',
              fontStyle: 'normal',
              fontWeight: 250,
              fontSize: '30px',
              lineHeight: '29px',
              textAlign: 'center',
              color: '#FFFFFF',
            }}>
              Tags:
            </Typography>
            <Typography className={classes.text}
              sx={{
                position: 'absolute',
                width: 'auto',
                height: '29px',
                left: '25%',
                top: '95%',
                fontFamily: 'Advent Pro',
                fontStyle: 'normal',
                fontWeight: 250,
                fontSize: '30px',
                lineHeight: '29px',
                textAlign: 'right',
                color: '#FFFFFF',
              }}>
              Motivação:
            </Typography>
            <Select value={motivation} onChange={e => setMotivation(e.target.value)}>
              <MenuItem value='serio'>Jogando sério</MenuItem>
              <MenuItem value='diversao'>Jogando por diversão</MenuItem>
            </Select>
            <Typography className={classes.text}
              sx={{
                position: 'absolute',
                width: 'auto',
                height: '29px',
                left: '25%',
                top: '105%',
                fontFamily: 'Advent Pro',
                fontStyle: 'normal',
                fontWeight: 250,
                fontSize: '30px',
                lineHeight: '29px',
                textAlign: 'right',
                color: '#FFFFFF',
              }}>
              Comunicação:
            </Typography>
            <Select value={communication} onChange={e => setCommunication(e.target.value)}>
              <MenuItem value='discord'>Discord obrigatório</MenuItem>
              <MenuItem value='ingame'>Dentro do jogo</MenuItem>
            </Select>
            <MainButton className={classes.post} onClick={handlePostInvite}>
              <Typography sx={{
                fontFamily: 'PostNoBillsJaffna',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '30px',
                lineHeight: '25px',
                textAlign: 'center',
                color: '#FFFFFF',
              }}>
                Postar Convite
              </Typography>
            </MainButton>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default PostInvite;