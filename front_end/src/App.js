import Background from './components/Background.js';
import Navbar from './components/Navbar.js'

import './App.css';
import {useState} from 'react'

function App() {
  
  return (
    <>
      <Background />
      <Navbar logged='false'/>
      <div className="App">
          Something
      </div>
    </>
  );
}

export default App;
