import logo from './Spotify_Logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        <Login/>
    </div>
  );
}

export default App;
