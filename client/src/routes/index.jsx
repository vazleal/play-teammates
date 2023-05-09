import {
  BrowserRouter,
  Routes as Router,
  Route,
  Outlet,
  Navigate
} from 'react-router-dom'

import Navbar from '../components/Navbar.jsx'
import Background from '../components/Background.jsx'

import { Home } from '../pages/Home'
import { SignUp } from '../pages/SignUp'
import { SignIn } from '../pages/SignIn'
import { Profile } from '../pages/Profile'
import { Invites } from '../pages/Invites'
import { GameInvite } from '../pages/GameInvite.jsx'
import PostInvite from '../pages/PostInvite'

import { useAuth } from '../hooks/useAuth'

function Root() {
  return (
    <Background>
      <Navbar />
      <Outlet />
    </Background>
  )
}

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace />
  }

  return children
}

const RedirectRoute = ({ isAuthenticated, children }) => {
  if (isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return children
}

export function Routes() {
  const { isAuthenticated } = useAuth()

  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route
            path="/sign-in"
            element={
              <RedirectRoute isAuthenticated={isAuthenticated}>
                <SignIn />
              </RedirectRoute>
            }
          />
          <Route
            path="/sign-up"
            element={
              <RedirectRoute isAuthenticated={isAuthenticated}>
                <SignUp />
              </RedirectRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/postInvite"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <PostInvite />
              </ProtectedRoute>
            }
          />
          <Route path="/invites/:game" element={<GameInvite />} />
          <Route path="/invites" element={<Invites />} />
        </Route>
      </Router>
    </BrowserRouter>
  )
}
