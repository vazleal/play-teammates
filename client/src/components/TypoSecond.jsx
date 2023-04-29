import { Typography as MuiTypography } from '@mui/material'
import PropTypes from 'prop-types'

function TypoSecond(props) {
  return (
    <MuiTypography
      {...props}
      sx={{
        fontFamily: 'AdventPro',
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
