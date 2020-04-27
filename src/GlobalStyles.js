import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body, h1, h2, p, ul, li {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  * {
    box-sizing: border-box;
  }

  body {
    width: 933px;
    max-width: 100%;
    margin: 0 auto;
    padding: 16px;
    background-color: #F4F4F4;
    font-family: Poppins,sans-serif;
  }

  input:focus, textarea:focus, select:focus{
  outline: none;
}

.select {
  display: none;
}

button {
  cursor: pointer;
}
`

export default GlobalStyles
