import Background from './components/Background.js'
import Navbar from './components/Navbar.js'
import Home from './pages/Home.js'
import InviteCS from './pages/InviteCS.js'
import InviteVal from './pages/InviteVal.js'
import AllInvites from './pages/AllInvites'
import Login from './pages/Login.js'
import SignIn from './pages/SignIn.js'


import {createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet} from 'react-router-dom'
import './App.css';

const Root = () =>{
  return(
    <>
      <Navbar loged='true'/>
      <Background />
      <Outlet />
    </>
  )
}

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<Root />} >
        <Route index element={<Home />} />
        <Route path="/inviteCS" element={<InviteCS />} />
        <Route path="/inviteVal" element={<InviteVal />} />
        <Route path="/allInvites" element={<AllInvites />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
      <div className="App">
      </div>
    </>
  );
}

export default App;
