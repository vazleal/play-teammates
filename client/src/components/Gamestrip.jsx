import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

const Gamestrip = props => {
  return (
    <Box
      sx={{
        position: 'relative',
        textAlign: 'center',
        width: '100%',
        height: '42px',
        background: `${props.strip_color}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Typography
        sx={{
          fontFamily: 'PostNoBillsJaffna',
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '32px',
          lineHeight: '42px',
          textAlign: 'center',
          color: '#FFFFFF',
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          opacity: '1'
        }}
      >
        {props.text}
      </Typography>
      <Typography
        sx={{
          position: 'absolute',
          right: '48px',
          fontFamily: 'AdventPro',
          fontStyle: 'normal',
          fontWeight: '250',
          fontSize: '24px',
          lineHeight: '29px',
          textAlign: 'right',
          textDecorationLine: 'underline'
        }}
      >
        <Link to={props.link} style={{ color: '#FFFFFF' }}>
          Ver Mais
        </Link>
      </Typography>
    </Box>
  )
}

export default Gamestrip
