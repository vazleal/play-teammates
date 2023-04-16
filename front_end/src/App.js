import bg from './components/images/BG.jpg';
import Header from './components/Navbar.js'
import './App.css';

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
      <Header />
      <div className="App">
          Something
      </div>
    </div>
  );
}

export default App;
