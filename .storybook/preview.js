import GlobalStyles from "../src/GlobalStyles";


export const decorators = [
  (Story) => {
    return (
    <>
    <GlobalStyles />
    <Story />
    </>
 ) }
]