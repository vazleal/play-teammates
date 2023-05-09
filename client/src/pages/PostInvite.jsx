import { Box, MenuItem, Select, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import '../fonts.css'
import individual from '../assets/images/vectors/individual.svg';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { useAuth } from '../hooks/useAuth'
import { api } from '../services/api'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import MainButton from '../components/MainButton';
import ValChar from '../assets/images/image 3.png';
import CSChar from '../assets/images/pngwing 1.png'


const useStyles = makeStyles({
  text: {
    fontFamily: 'AdventPro',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '32px',
    lineHeight: '38px',
    color: '#FFFFFF',
  },
  textMilitary: {
    fontFamily: 'PostNoBillsJaffna !important',
    fontStyle: 'normal !important',
    fontWeight: 300,
    fontSize: '32px !important',
    lineHeight: '38px !important',
    color: '#FFFFFF !important',
  },
  indiv: {
  position: 'absolute',
  left: '3.51%',
  top: '43.23%',

  },
  post: {
    position: 'absolute',
    align: 'center',
    top: '40%',
    padding: '6px 15px !important'
  },
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
        <Box sx={{height: '28.22vh'}}>
        <img
          src={CSChar}
          alt="CounterStrike-character"
          style={{
            position: 'absolute',
            top: '11.5%',
            left: '45%',
            width: '480px',
            clip: 'rect(0px, 1000px, 223px, 0px)'
          }}
        />
        <img
          src={ValChar}
          alt="Valorant-character"
          style={{
            position: 'absolute',
            left: '28vw',
            top: '11%',
            width: '572px',
            height: '903px',
            clip: 'rect(0px, 1000px, 228px, 0px)'
          }}
        />
        </Box>
        <Box sx={{
          display: 'flex',
          align: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          left: '20.35%',
          width: '59.31%',
          height: '100vh',
          background: 'linear-gradient(180deg, #FD5F6D 0%, #141C27 100%)',
          mixBlendMode: 'luminosity',
          opacity: 0.7,
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }} className={classes.mainBox}>
          <ToggleButtonGroup
            value={isRanked}
            exclusive
            onChange={(e, value) => setIsRanked(value)}
            aria-label="Selecionar rankeada ou não"
            sx={{
              position: 'absolute',
              left: '29.39%',
              gap: '20%',
              top: '2.85%',
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
              left: '24.6%',
              gap: '10%',
              top: '11.95%',
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
            left: '-7%',
            top: '19.98%',
            fontFamily: 'AdventPro',
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
            type="notes"
            value={notes}
            onChange={e => setNotes(e.target.value)}
            sx={{
              position: 'absolute',
              width: '94.26%',
              height: '17.65%',
              left: '3.04%',
              top: '23.04%',
              background: 'linear-gradient(180deg, rgba(17, 27, 37, 0.72) 0%, rgba(29, 44, 73, 0.44) 100%)',
              opacity: 0.8,
              borderRadius: '8.13679px',
            }}
          />
          
          <img src={individual} className={classes.indiv} />
          <Typography sx={{
            position: 'absolute',
            width: 'auto',
            height: '29px',
            left: '8.2%',
            top: '43.23%',
            fontFamily: 'AdventPro',
            fontStyle: 'normal',
            fontWeight: 250,
            fontSize: '30px',
            lineHeight: '29px',
            textAlign: 'right',
            color: '#FFFFFF',
          }}>
            Número de jogadores no grupo:
          </Typography>
        
          <Select value={numPlayers}
            onChange={e => setNumPlayers(e.target.value)}
            sx={{
              position: 'absolute',
              left: '53.04%',
              top: '42.5%',
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
            left: '3.51%',
            top: '48.63%',
            fontFamily: 'AdventPro',
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
            <Select value={rankPlayers} 
            onChange={e => setRankPlayers(e.target.value)}
            sx={{
              position: 'absolute',
              left: '20.5%',
              top: '47.05%',
            }} >
              <MenuItem value="unranked" />
              <MenuItem value='prata'>Prata</MenuItem>
              <MenuItem value='ouro'>Ouro</MenuItem>
              <MenuItem value='ak'>Ak</MenuItem>
              <MenuItem value='xerife'>Xerife</MenuItem>
              <MenuItem value='aguia'>Águia</MenuItem>
              <MenuItem value='supremo'>Supremo</MenuItem>
              <MenuItem value='global'>Global</MenuItem>
            </Select>
          ) : (
            <Select value={rankPlayers} 
            onChange={e => setRankPlayers(e.target.value)}
            sx={{
              position: 'absolute',
              left: '20.5%',
              top: '47.05%',
            }} >
              <MenuItem value="unranked" />
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
            top: '56.77%',
            left: '46.72%',
            fontFamily: 'AdventPro',
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
              left: '3.04%',
              top: '64.06%',
              fontFamily: 'AdventPro',
              fontStyle: 'normal',
              fontWeight: 250,
              fontSize: '30px',
              lineHeight: '29px',
              textAlign: 'right',
              color: '#FFFFFF',
            }}>
            Motivação:
          </Typography>
          <Select value={motivation} 
          onChange={e => setMotivation(e.target.value)}
          sx={{
            position: 'absolute',
            left: '20%',
            top: '62.5%',
          }}>
            <MenuItem value='serio'>Jogando sério</MenuItem>
            <MenuItem value='diversao'>Jogando por diversão</MenuItem>
          </Select>
          <Typography className={classes.text}
            sx={{
              position: 'absolute',
              width: 'auto',
              height: '29px',
              left: '3.04%',
              top: '71.46%',
              fontFamily: 'AdventPro',
              fontStyle: 'normal',
              fontWeight: 250,
              fontSize: '30px',
              lineHeight: '29px',
              textAlign: 'right',
              color: '#FFFFFF',
            }}>
            Comunicação:
          </Typography>
          <Select value={communication} 
          onChange={e => setCommunication(e.target.value)}
          sx={{
            position: 'absolute',
            left: '24%',
            top: '70%',
          }}>
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
    </>
  )
}

export default PostInvite;