import styled from "styled-components";

export default function Button({children, onReset}) {
    return <ButtonStyle  onClick={onReset}>{children}</ButtonStyle>
}


const ButtonStyle = styled.button `
    padding: 1rem;
    width: 100%;
    background-color: var(--secondary-light);
    color: var(---white);
    border: none;
    border-radius: 5px;
    cursor: pointer;
`
