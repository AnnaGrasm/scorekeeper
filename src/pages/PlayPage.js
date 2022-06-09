import Player from "../components/Player/Player";
import Button from "../components/Button/Button";
import styled from "styled-components";

export default function PlayPage({
  onIncreaseScore,
  onDecreaseScore,
  onResetScores,
  onResetAll,
  players
}) {
  return (
    <>
      {/*eslint-disable */}
      <ul role="list">
        {players.map((player, index) => (
          <Player
            key={player.id}
            name={player.name}
            img={player.img}
            score={player.score}
            onIncrease={() => onIncreaseScore(index)}
            onDecrease={() => onDecreaseScore(index)}
          />
        ))}
      </ul>
      <BottonContainer>
        <Button onReset={onResetScores}>Reset scores</Button>
        <Button onReset={onResetAll}>New game</Button>
      </BottonContainer>
    </>
  );
}
const BottonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
  margin: 1rem;
`;
