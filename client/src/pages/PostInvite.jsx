import { Box , Grid, Typography} from '@mui/material'
function PostInvite(){
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
                        <Box sx={{
                            position: 'absolute',
                            width: '805px',
                            height: '167px',
                            left: '520px',
                            top: '507px',
                            background: 'linear-gradient(180deg, rgba(17, 27, 37, 0.72) 0%, rgba(29, 44, 73, 0.44) 100%)',
                            opacity: 0.8,
                            borderRadius: '8.13679px',
                        }}>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default PostInvite;
