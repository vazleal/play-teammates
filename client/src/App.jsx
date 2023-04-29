import { Box } from '@mui/material'
import { SignUp } from './pages/SignUp'
import bgimage from './assets/images/BG.jpg'

export function App() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        margin: '0px',
        padding: '0px',
        border: '0px'
      }}
    >
      <SignUp />
    </Box>
  )
}
