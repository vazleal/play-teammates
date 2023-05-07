import { Box , Grid, MenuItem, Select, TextField, ToggleButton, ToggleButtonGroup, Typography} from '@mui/material'
import individual from '../assets/images/vectors/individual.svg';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
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

function PostInvite(){
    const classes = useStyles();
    const [value, setValue] = useState('');
    
    const handleChange = (event) => {
        setValue(event.target.value);
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
                            <Typography variant="body1">My Text</Typography>
                            <Select value={value} onChange={handleChange}>
                                <MenuItem value="" />
                                <MenuItem value='1'>1</MenuItem>
                                <MenuItem value='2'>2</MenuItem>
                                <MenuItem value='3'>3</MenuItem>
                            </Select>
                        </Grid>
                        <Grid container alignItems="center">
                            <Typography variant="body1">Elo mínimo: </Typography>
                            <Select value={value} onChange={handleChange}>
                                <MenuItem value="" />
                                <MenuItem value='Bronze'>Bronze</MenuItem>
                                <MenuItem value='Prata'>Prata</MenuItem>
                                <MenuItem value='Ouro'>Ouro</MenuItem>
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
                        sx={{
                            
                        }}>
                            Motivação:
                        </Typography>
                        <Typography className={classes.text}
                        sx={{
                            
                        }}>
                            Comunicação:
                        </Typography>
                            
                        <Typography className={classes.text}
                        sx={{
                            
                        }}>
                            Discord:
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default PostInvite;
