import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import TypoMain from '../components/TypoMain'
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography
} from '@mui/material'
import MainButton from './MainButton'
import teammatesLogo from '../assets/images/logo.svg'
import createInviteIcon from '../assets/images/create-invite-icon.svg'

import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

function Navbar() {
  const { isAuthenticated, user, signOut } = useAuth()

  const [anchorEl, setAnchorEl] = useState(null)

  const menuOpen = Boolean(anchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const navigate = useNavigate()

  function handleNavigateToCreateInvite() {
    handleClose()
    navigate('/invite/create')
  }

  function handleNavigateProfile() {
    handleClose()
    navigate('/profile')
  }

  function handleSignOut() {
    handleClose()
    signOut()
  }

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          top: 0,
          width: '100%',
          backgroundColor: 'rgba(11, 21, 30, 0.79)',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Toolbar
          sx={{
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Link to="/">
            <img src={teammatesLogo} alt="logo" />
          </Link>

          {isAuthenticated ? (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <IconButton onClick={handleNavigateToCreateInvite}>
                <img src={createInviteIcon} alt="create-invite" />
              </IconButton>

              <Button
                id="avatar-menu-button"
                sx={{ textTransform: 'none', gap: '12px' }}
                onClick={handleClick}
              >
                <TypoMain sx={{ fontSize: '24px' }}>{user.username}</TypoMain>
                <Avatar
                  src={user.avatar}
                  sx={{ width: '38px', height: '38px' }}
                />
              </Button>

              <Menu
                id="avatar-menu"
                anchorEl={anchorEl}
                open={menuOpen}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'avatar-menu-button'
                }}
              >
                <MenuItem onClick={handleNavigateProfile}>Perfil</MenuItem>
                <MenuItem onClick={handleSignOut}>Sair</MenuItem>
              </Menu>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
              <Link to="/sign-in">
                <MainButton
                  sx={{
                    height: '34px',
                    borderRadius: '8px',
                    backgroundColor: '#1D2C49'
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'PostNoBillsJaffna',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      fontSize: '17.0251px',
                      lineHeight: '25px',
                      textAlign: 'center',
                      color: '#FFFFFF'
                    }}
                  >
                    Entrar
                  </Typography>
                </MainButton>
              </Link>

              <Link to="/sign-up">
                <MainButton sx={{ height: '34px', borderRadius: '8px' }}>
                  <Typography
                    sx={{
                      fontFamily: 'PostNoBillsJaffna',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      fontSize: '17.0251px',
                      lineHeight: '25px',
                      textAlign: 'center',
                      color: '#FFFFFF'
                    }}
                  >
                    Criar conta
                  </Typography>
                </MainButton>
              </Link>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}
export default Navbar
