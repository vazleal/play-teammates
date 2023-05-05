import { Button as MuiButton } from '@mui/material'

function MainButton(props) {
  return (
    <MuiButton
      {...props}
      variant="contained"
      sx={{
        textTransform: 'none',
        backgroundColor: '#2F405C',
        borderRadius: '11px',
        padding: '2px 15px'
      }}
    />
  )
}

export default MainButton
