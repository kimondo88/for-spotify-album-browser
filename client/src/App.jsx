import logo from './Spotify_Logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login.jsx';
import Dashboard from './Dashboard';

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        {code ? <Dashboard code={code}/> : <Login/>}
    </div>
  );
}

export default App;
