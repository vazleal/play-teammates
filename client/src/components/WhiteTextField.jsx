import { TextField } from '@mui/material'

function WhiteTextField(props) {
  return (
    <TextField
      {...props}
      variant="standard"
      sx={{
        margin: '0px 0px 30px 0px',
        backgroundColor: 'rgba(217, 217, 217, 0.1)',
        borderRadius: '8px',
        input: {
          color: 'white',
          padding: '12px 16px',
          fontSize: '20px',
          fontFamily: 'AdventPro'
        },
        '& .MuiInputLabel-root': {
          color: 'white !important',
          padding: '0px 10px'
        },
        ...(props.sx || {})
      }}
      InputProps={{
        disableUnderline: true
      }}
    />
  )
}

export default WhiteTextField
