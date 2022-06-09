import styled from "styled-components";

export default function Player({ name, score, onIncrease, onDecrease }) {
  const nameUpperCase = name.toUpperCase().trim();
  return (
    <PlayerList>
      <p>{nameUpperCase}</p>
      <ScoreContainer>
        <button onClick={onDecrease}>-</button>
        <ScoreSpan score={score}>{score}</ScoreSpan>
        <button onClick={onIncrease}>+</button>
      </ScoreContainer>
    </PlayerList>
  );
}

const PlayerList = styled.li`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin: 1rem;
`;

const ScoreContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  button {
    padding: 1rem;
    background-color: rgb(69, 52, 85);
    color: white;
    border: none;
    border-radius: 5px;
  }
`;
const ScoreSpan = styled.span`
  color: ${({ score }) => (score > 0 ? "darkgreen": "white" )};
`;
