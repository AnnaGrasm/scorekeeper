
import PlayPage from "./pages/PlayPage"
import  HomePage  from "./pages/HomePage";
import Navigation from "./components/Navigation";
import { useEffect, useState } from "react";
import { setToLocal, getFromLocal } from "./lib/libStorage";
import {Routes, Route, useNavigate} from "react-router-dom";
import styled from "styled-components";

function App() {

  const [players, setPlayers] = useState(getFromLocal("players") ?? []);
  const navigate = useNavigate();

  useEffect(() => setToLocal("players", players), [players]);

  function handleAdd(newPlayer) {
    setPlayers([...players, newPlayer]);
    navigate("/play");
  }

  function increaseScore(index) {
    const currentlyPlayer = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...currentlyPlayer, score: currentlyPlayer.score + 1 },
      ...players.slice(index + 1),
    ]);
    console.log("hello")
  }

  function decreaseScore(index) {
    const currentlyPlayer = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...currentlyPlayer, score: currentlyPlayer.score - 1 },
      ...players.slice(index + 1),
    ]);
  }

  function resetScores() {
    setPlayers(
      players.map((player) => {
        return { id: player.id, name: player.name, score: 0 };
      })
    );
  }

  function resetAll() {
    setPlayers([]);
  }



  return (
    <AppContainer>
      
      <Routes>
        
        <Route path="/" element={<HomePage onHandleAdd={handleAdd} />} />
        <Route path="/play" element={<PlayPage players={players} onIncreaseScore={increaseScore} onDecreaseScore={decreaseScore}  onResetScores={resetScores} onResetAll={resetAll} />} />

      </Routes>
      <Navigation />
     
    
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
 
  width: 50vw;
  height: 100%;
  margin: auto;
  background: var(--primary);
  padding: 3rem;
`;

