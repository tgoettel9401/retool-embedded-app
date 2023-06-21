import logo from './logo.svg';
import Retool from "react-retool";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Embedding Retool-App now</h1>

          <Retool
              url="http://192.168.94.34:3000/embedded/public/2b872099-2947-4c45-a51c-cabfb9dbadc7"
              data={{name: 'Tobias'}}>
          </Retool>
      </header>
    </div>
  );
}

export default App;
