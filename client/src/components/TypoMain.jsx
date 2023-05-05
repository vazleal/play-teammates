import { Typography as MuiTypography } from '@mui/material'
import PropTypes from 'prop-types'
import '../fonts.css'

function TypoMain(props) {
  return (
    <MuiTypography
      {...props}
      sx={{
        fontFamily: 'PostNoBillsJaffna',
        color: 'white',
        ...(props.sx || {})
      }}
    />
  )
}

TypoMain.propTypes = {
  sx: PropTypes.object
}

export default TypoMain
