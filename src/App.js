import Button from "./components/Button";
import Player from "./components/Player";
import PlayerForm from "./components/PlayerForm";
import { useEffect, useState } from "react";
import { setToLocal, getFromLocal } from "./lib/libStorage";
import styled from "styled-components";

function App() {
  /*const [players, setPlayers] = useState([
    { name: "Anna", id: nanoid(), score: 0} ,
    { name: "Tim", id: nanoid(), score: 0 },
    { name: "Lisa", id: nanoid(), score: 0},
  ]); */

  const [players, setPlayers] = useState(getFromLocal("players") ?? []);

  useEffect(() => setToLocal("players", players), [players]);

  function handleAdd(newPlayer) {
    setPlayers([...players, newPlayer]);
  }

  function increaseScore(index) {
    const currentlyPlayer = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...currentlyPlayer, score: currentlyPlayer.score + 1 },
      ...players.slice(index + 1),
    ]);
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
      {/*eslint-disable */}
      <ul role="list">
        {players.map((player, index) => (
          <Player
            key={player.id}
            name={player.name}
            img={player.img}
            score={player.score}
            onIncrease={() => increaseScore(index)}
            onDecrease={() => decreaseScore(index)}
          />
        ))}
      </ul>
      <BottonContainer>
        <Button onReset={resetScores}>Reset scores</Button>
        <Button onReset={resetAll}>New game</Button>
      </BottonContainer>
      <PlayerForm handleSubmit={handleAdd} />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 30%;
  height: 100%;
  margin: auto;
  background-color: #836d6d;
  padding: 3rem;
`;

const BottonContainer = styled.div`
 display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
  margin: 1rem;
`;
