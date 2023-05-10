import { Box, Modal, Typography } from '@mui/material'
import TypoMain from './TypoMain'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'
import TypoSecond from './TypoSecond'
import { useState } from 'react'

import individual from '../assets/images/vectors/individual.svg'
import discord from '../assets/images/vectors/discord.svg'
import mic from '../assets/images/vectors/mic.svg'
import tryhard from '../assets/images/vectors/tryhard.svg'
import smile from '../assets/images/vectors/smile.svg'

function InviteCard({
  id,
  isRanked,
  numPlayers,
  motivation,
  rankPlayers,
  communication,
  game,
  blank
}) {
  const { isAuthenticated } = useAuth()

  const navigate = useNavigate()

  const [modalOpen, setModalOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  function formatRankPLayers(rank) {
    switch (rank) {
      case 'unranked':
        return 'Unranked'
      case 'ferro':
        return 'Ferro'
      case 'bronze':
        return 'Bronze'
      case 'prata':
        return 'Prata'
      case 'ouro':
        return 'Ouro'
      case 'ak':
        return 'AK'
      case 'xerife':
        return 'Xerife'
      case 'aguia':
        return 'Águia'
      case 'supremo':
        return 'Supremo'
      case 'global':
        return 'Global'
      case 'platina':
        return ' Platina'
      case 'diamante':
        return 'Diamante'
      case 'ascendente':
        return 'Ascendente'
      case 'imortal':
        return 'Imortal'
      case 'radiante':
        return 'Radiante'
      default:
        return 'Invalid'
    }
  }

  function handleModalOpen(message) {
    setModalOpen(true)
    setErrorMessage(message)
  }

  function handleClickInvite() {
    if (isAuthenticated) {
      navigate(`/invite/${id}`)
    } else {
      handleModalOpen(
        'Você precisa estar autenticado para acessar os detalhes do convite.'
      )
    }
  }

  return (
    <>
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
          <TypoMain
            sx={{
              fontSize: '36px'
            }}
          >
            Erro
          </TypoMain>
          <TypoSecond sx={{ fontSize: '24px', fontFamily: 'AdventPro' }}>
            {errorMessage}
          </TypoSecond>
        </Box>
      </Modal>

      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          background:
            game === 'valorant'
              ? 'linear-gradient(180deg, rgba(253, 95, 109, 0.8) 0%, rgba(20, 28, 39, 0.8) 100%)'
              : 'linear-gradient(180deg, rgba(255, 163, 1, 0.8) 0%, rgba(29, 45, 73, 0.8) 100%)',
          mixBlendMode: blank ? 'luminosity' : 'normal',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          padding: '24px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer'
        }}
        component="button"
        type="button"
        onClick={handleClickInvite}
      >
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '8px'
          }}
        >
          <TypoMain sx={{ fontSize: '44px', color: '#fff' }}>
            {isRanked ? 'Ranked' : 'Unranked'}
          </TypoMain>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <img src={individual} alt="Person" style={{ width: '24px' }} />
            <Typography
              sx={{ fontSize: '36px', fontFamily: 'AdventPro', color: '#fff' }}
            >
              {numPlayers}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '16px'
          }}
        >
          <Typography
            sx={{
              fontFamily: 'AdventPro',
              fontSize: '22px',
              color: '#fff',
              padding: '0px 12px',
              backgroundColor: '#858C99',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            Elo mínimo desejado: {formatRankPLayers(rankPlayers)}
          </Typography>

          <Typography
            sx={{
              fontFamily: 'AdventPro',
              fontSize: '22px',
              color: '#fff',
              padding: '0px 12px',
              backgroundColor: '#858C99',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            {motivation === 'ranked' ? (
              <>
                <img src={tryhard} alt="Tryhard" style={{ width: '20px' }} />
                Jogando sério
              </>
            ) : (
              <>
                <img src={smile} alt="Smile" style={{ width: '16px' }} />
                Jogando por diversão
              </>
            )}
          </Typography>

          <Typography
            sx={{
              fontFamily: 'AdventPro',
              fontSize: '22px',
              color: '#fff',
              padding: '0px 12px',
              backgroundColor: '#858C99',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
          >
            {communication === 'discord' ? (
              <>
                <img src={discord} alt="Discord" style={{ width: '16px' }} />
                Usando Discord
              </>
            ) : (
              <>
                <img src={mic} alt="Microphone" style={{ width: '16px' }} />
                Usando chat de voz do jogo
              </>
            )}
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default InviteCard
