import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --primary: #738b8c;
  --primary-light: #b8ddf4;
  --secondary: #4d235c;
  --secondary-light: #aeacd2;;
  --white: #ecf8f8;
  --black: #211103;

}
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body{
font-family: 'Roboto', sans-serif;

}

ol ul {
  list-style: none;
  
}
`;
export default GlobalStyles;
