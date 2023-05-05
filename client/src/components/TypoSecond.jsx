import { Typography as MuiTypography } from '@mui/material'
import PropTypes from 'prop-types'
import '../fonts.css'

function TypoSecond(props) {
  return (
    <MuiTypography
      {...props}
      sx={{
        fontFamily: 'AdventPro !important',
        fontSize: '24px',
        color: 'white',
        ...(props.sx || {})
      }}
    />
  )
}

TypoSecond.propTypes = {
  sx: PropTypes.object
}

export default TypoSecond
