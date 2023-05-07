
import { Box, Typography } from '@mui/material'

function CardTag(props){
    return(
        <Box sx={{
            display: "inline-flex",
            width: 'auto',
            height: '32px',
            position: 'absolute',
            background: '#858C99 !important',
            opacity: '0.8',
            borderRadius: '8.13679px',
            border: '1px solid gray',
            padding: '4px',
        }}>
            <Typography sx={{
                width: 'auto',
                height: '23',
                fontFamily: 'Advent Pro',
                fontStyle: 'normal',
                fontWeight: '300',
                fontSize: '19.53px',
                lineHeight: '23px',
                textAlign: 'center',
                color: '#FFFFFF',
            }}>
                {props.text}
            </Typography>
        </Box>
    )
}

export default CardTag;