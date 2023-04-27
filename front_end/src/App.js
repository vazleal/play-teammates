import Background from './components/Background.js';
import Navbar from './components/Navbar.js'
import Home from './pages/Home.js'
import Invites from './pages/Invites.js'
import Login from './pages/Login.js'
import SignIn from './pages/SignIn.js'

import {createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  RouterProvider,
  MemoryRouter,
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
        <Route path="/invt" element={<Invites />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
      <div className="App">
        <MemoryRouter>
          <Link to="/invt">Invitations</Link>
        </MemoryRouter>
      </div>
    </>
  );
}

export default App;
