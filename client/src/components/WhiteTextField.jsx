import { TextField } from '@mui/material'
import PropTypes from 'prop-types'

function WhiteTextField(props) {
  return (
    <TextField
      {...props}
      id="filled-basic"
      variant="standard"
      sx={{
        margin: '0px 0px 30px 0px',
        backgroundColor: 'rgba(217, 217, 217, 0.1)',
        borderRadius: '8px',
        input: { color: 'white', padding: '10px' },
        '& .MuiInputLabel-root': {
          color: 'white !important',
          padding: '0px 10px',
          opacity: '0.5'
        },
        ...(props.sx || {})
      }}
      InputProps={{
        disableUnderline: true
      }}
    />
  )
}

WhiteTextField.propTypes = {
  sx: PropTypes.object
}

export default WhiteTextField
