import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import MainButton from './MainButton';
import TeammatesLogo from '../assets/images/Teammates_logo.png'
function Navbar() {
  const { isAuthenticated, signOut } = useAuth()
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          top: 0,
          width: '100%',
          backgroundColor: 'rgba(11, 21, 30, 0.79)',
          height: '6%',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
            <div style={{ flexGrow: 1 }}>
                <Link to='/'>
                    <img
                    src={TeammatesLogo}
                    alt="logo"
                    style={{
                        position: 'absolute',
                        width: '215px',
                        height: '120.93px',
                        left: '0px',
                        top: '-36px',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                      }}
                    />
                </Link>
            </div>
            <Link to='/sign-in'>
                <MainButton style={{ marginRight: '8px' }}>
                    <Typography sx={{
                        fontFamily: 'Post No Bills Jaffna Medium',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '17.0251px',
                        lineHeight: '25px',
                        textAlign: 'center',
                        color: '#FFFFFF',
                    }}>
                        Entrar
                    </Typography>
                </MainButton>
            </Link>
            <Link to='/sign-up'>    
                <MainButton>
                    <Typography sx={{
                        fontFamily: 'Post No Bills Jaffna Medium',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '17.0251px',
                        lineHeight: '25px',
                        textAlign: 'center',
                        color: '#FFFFFF',
                    }}>
                        Criar Conta
                    </Typography>
                </MainButton>
            </Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}


export default Navbar