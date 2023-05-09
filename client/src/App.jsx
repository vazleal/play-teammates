import { AuthProvider } from './contexts/AuthContext'
import { Routes } from './routes'

import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import './styles/globals.css'
import './fonts.css'

export function App() {
  return (
    <AuthProvider>
      <Routes />
      <ToastContainer theme="colored" />
    </AuthProvider>
  )
}
