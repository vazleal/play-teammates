import bg from './components/images/BG.jpg';
import Navbar from './components/Navbar.js'
import './App.css';
import {useState} from 'react'

function App() {
  const background = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw'
  };
  return (
    
    <div style={background}>
      <Navbar />
      <div className="App">
          Something
      </div>
    </div>
  );
}

export default App;
