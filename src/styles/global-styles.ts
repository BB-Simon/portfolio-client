import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.txt}
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  ul {
    list-style-type: none;
  }
`

export default GlobalStyles