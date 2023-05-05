import {
  BrowserRouter,
  Routes as Router,
  Route,
  Outlet,
  Navigate
} from 'react-router-dom'

import Navbar from '../components/Navbar.jsx'
import Background from '../components/Background.jsx'

import Home from '../pages/Home.jsx'
import { SignUp } from '../pages/SignUp'
import { SignIn } from '../pages/SignIn'
import { Profile } from '../pages/Profile.jsx'
import AllInvites from '../pages/AllInvites.jsx'
import InviteCS from '../pages/InviteCS.jsx'
import InviteVal from '../pages/InviteVal.jsx'

import { useAuth } from '../hooks/useAuth'

function Root() {
  return (
    <Background>
      <Navbar loged="true" />
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
          <Route path="/inviteCS" element={<InviteCS />} />
          <Route path="/inviteVal" element={<InviteVal />} />
          <Route path="/allInvites" element={<AllInvites />} />
        </Route>
      </Router>
    </BrowserRouter>
  )
}
