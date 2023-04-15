import bg from './images/BG.jpg';
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
      <div className="App">
        
      </div>
    </div>
  );
}

export default App;
