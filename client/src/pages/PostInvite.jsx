import { Box , Grid, MenuItem, Select, TextField, ToggleButton, ToggleButtonGroup, Typography} from '@mui/material'
import '../fonts.css'
import individual from '../assets/images/vectors/individual.svg';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { useAuth } from '../hooks/useAuth'
import { api } from '../services/api'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles({
    text: {
        fontFamily: 'Advent Pro',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '32px',
        lineHeight: '38px',
        color: '#FFFFFF',
    },
})

function handleModalOpen(message) {
    setModalOpen(true)
    setErrorMessage(message)
}

function PostInvite(){
    const { user } = useAuth();

    const navigate = useNavigate();

    const classes = useStyles();

    const [value, setValue] = useState('');

    const [game, setGame] = useState(null);

    const [isRanked, setIsRanked] = useState(null);

    const [communication, setCommunication] = useState(null);

    const [notes, setNotes] = useState(null);

    const [numPlayers, setNumPlayers] = useState(null);

    const [rankPlayers, setRankPlayers] = useState(null);

    const [motivation, setMotivation] = useState(null);

    const [modalOpen, setModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    
    async function handleChange (event) {
        if (!numPlayers){
            handleModalOpen('Por favor, a quantidade de jogadores que estão no grupo')
            return
        }
        if (!game){
            handleModalOpen('Por favor, informe o jogo do convite')
            return
        }
        if (!rankPlayers){
            handleModalOpen('Por favor, informe o elo mínimo para participar do seu grupo')
            return
        }
        if (!motivation){
            handleModalOpen('Por favor, informe a motivação do convite')
            return
        }
        if (!communication){
            handleModalOpen('Por favor, informe qual a categoria de comunicação')
            return
        }
        if (!isRanked){
            handleModalOpen('Por favor, informe se é ranqueada ou não')
            return
        }

        try {
            await api.post('/invite', {
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
      
            navigate('/home')
          } catch (err) {
            toast.error(getErrorMessage(err))
          }
    };
    
    return(
        <>
            <Box sx={{
                height: '28.22vh',
            }}/>
            <Grid container spacing={50} >
                <Grid item>
                </Grid>
                <Grid item sx={{width:'90vw',}}>
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
                        <Typography sx={{
                            position: 'absolute',
                            width: '300px',
                            height: '29px',
                            left: '423px',
                            top: '478px',
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
                            top: '507px',
                            background: 'linear-gradient(180deg, rgba(17, 27, 37, 0.72) 0%, rgba(29, 44, 73, 0.44) 100%)',
                            opacity: 0.8,
                            borderRadius: '8.13679px',
                        }}
                         />
                        <Grid container alignItems="center">
                            <img src={individual} />
                            <Typography variant="body1">Número de jogadores no grupo: </Typography>
                            <Select value={value} onChange={e => setNumPlayers(e.target.value)}>
                                <MenuItem value="" />
                                <MenuItem value='1'>1</MenuItem>
                                <MenuItem value='2'>2</MenuItem>
                                <MenuItem value='3'>3</MenuItem>
                                <MenuItem value='4'>4</MenuItem>
                            </Select>
                        </Grid>
                        <Grid container alignItems="center">
                            <Typography variant="body1">Elo mínimo: </Typography>
                            <Select value={value} onChange={e => setRankPlayers(e.target.value)}>
                                <MenuItem value=""/>
                                <MenuItem value='Ferro'>Ferro</MenuItem>
                                <MenuItem value='Bronze'>Bronze</MenuItem>
                                <MenuItem value='Prata'>Prata</MenuItem>
                                <MenuItem value='Ouro'>Ouro</MenuItem>
                                <MenuItem value='Platina'>Platina</MenuItem>
                                <MenuItem value='Diamante'>Diamante</MenuItem>
                                <MenuItem value='Ascendente'>Ascendente</MenuItem>
                                <MenuItem value='Imortal'>Imortal</MenuItem>
                                <MenuItem value='Radiante'>Radiante</MenuItem>
                            </Select>
                            <Select value={value} onChange={e => setRankPlayers(e.target.value)}>
                                <MenuItem value=""/>
                                <MenuItem value='Prata'>Prata</MenuItem>
                                <MenuItem value='Ouro'>Ouro</MenuItem>
                                <MenuItem value='Ak'>Ak</MenuItem>
                                <MenuItem value='Xerife'>Xerife</MenuItem>
                                <MenuItem value='Aguia'>Águia</MenuItem>
                                <MenuItem value='Supremo'>Supremo</MenuItem>
                                <MenuItem value='Global'>Global</MenuItem>
                            </Select>
                        </Grid>
                        <Typography className={classes.text}
                        sx={{
                            position: 'absolute',
                            width: '57px',
                            height: '38px',
                            left: '692px',
                            top: '826px',
                        }}>
                            Tags:
                        </Typography>
                        <Typography className={classes.text}
                        value={value} onChange={e => setMotivation(e.target.value)}
                        sx={{
                            
                        }}>
                            Motivação:
                        </Typography>
                        <Typography className={classes.text}
                        value={value} onChange={e => setCommunication(e.target.value)}
                        sx={{
                            
                        }}>
                            Comunicação:
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default PostInvite;
