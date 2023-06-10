import logo from './logo.svg';
import Retool from "react-retool";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h1>Embedding Retool-App now</h1>

          <Retool
              url="http://192.168.94.34:3000/embedded/public/2b872099-2947-4c45-a51c-cabfb9dbadc7">
              data={{name: 'Tobias'}}
          </Retool>

      </header>
    </div>
  );
}

export default App;
