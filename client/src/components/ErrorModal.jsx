import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import TypoMain from './TypoMain'
import TypoSecond from './TypoSecond'
import PropTypes from 'prop-types'

// não funciona
const ErrorModal = ({ modalOpen, setModalOpen, errorMessage }) => {
  return (
    <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'linear-gradient(180deg, #1D2C49 0%, #0F1922 100%)',
          borderRadius: '8px',
          boxShadow: 24,
          p: 4,
          maxWidth: '90vw',
          maxHeight: '90vh',
          overflow: 'auto'
        }}
      >
        <TypoMain>Error</TypoMain>
        <TypoSecond>{errorMessage}</TypoSecond>
      </Box>
    </Modal>
  )
}

ErrorModal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired
}

export default ErrorModal
