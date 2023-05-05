import { Box } from '@mui/material'
import PropTypes from 'prop-types'

function ProfileContainer(props) {
  return (
    <Box
      {...props}
      sx={{
        background: 'linear-gradient(180deg, #1D2C49 0%, #0F1922 100%)',
        opacity: '0.8',
        borderRadius: '5px',
        padding: '27px 38px',
        width: '872px',
        ...(props.sx || {})
      }}
    />
  )
}

ProfileContainer.propTypes = {
  sx: PropTypes.object
}

export default ProfileContainer
