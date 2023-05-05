import { Container } from '@mui/material'
import backgroundImage from '../assets/images/BG.jpg'

function BackgroundImage(props) {
  return (
    <Container
      {...props}
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        minWidth: '100vw',
        border: 'none',
        margin: 'none',
        padding: 'none'
      }}
    />
  )
}

export default BackgroundImage
