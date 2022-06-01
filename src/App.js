
import './App.css';
import Button from './components/Button';
import Player from './components/Player';
import PlayerForm from './components/PlayerForm';
import {data} from "./data"

function App() {
  return (
    <div className="App">
      {/*eslint-disable */}
      <ul role="list">
        {data.map((userElemement) => 
        <Player key={userElemement.id} data={userElemement} />
          )}
      
      
      </ul>
      
  <Button>Reset scores</Button>
  <Button>New game</Button>
  <PlayerForm />
    </div>
  );
}

export default App;
