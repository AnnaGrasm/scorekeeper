import { nanoid } from "nanoid";
import styled from "styled-components";

export default function PlayerForm({ handleSubmit }) {
  function onSubmit(event) {
    event.preventDefault();

    const form = event.target;

    const { name } = form.elements;

    const newPlayer = { name: name.value, score: 0, id: nanoid() };

    handleSubmit(newPlayer);
    name.focus();
    form.reset();
  }

  return (
    <FormContainer onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" />
      <button>Create Player</button>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;

  input{
    height: 2rem;
    border-radius: 9px;
    border: none;
  }

  button{
    padding: 12px;
    background-color: hotpink;
    color: white;
    font: inherit;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
