import styled from "styled-components";

export default function Button({children, onReset}) {
    return <ButtonStyle  onClick={onReset}>{children}</ButtonStyle>
}


const ButtonStyle = styled.button `
    padding: .8rem 5rem;
    background-color: hotpink;
    color: white;
    font: inherit;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`
