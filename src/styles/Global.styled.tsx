import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  :root {
    --background: #EFF5FF;
    --border-color: #D6D9E6;
    --denim: #022959;
    --grey: #9699AA;
    --light-blue: #ABBCFF;
    --light-grey: #D6D9E6;
    --orange: #FFAF7E;
    --pink: #F9818E;
    --purple: #483EFF;
    --error-red: #EE374A;
    --sky-blue: #BEE2FD;
    --very-light-grey: #F8F9FF;
    --white: #FFFFFF;
  }

  html {
    font-size: 62.5%;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    line-height: 1.5;
  }

  body{
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.6rem;
    background-color: var(--background);
    position:relative;
  }
  
  img, svg, picture, video {
    max-width: 100%;
    display:block;
  }

  input{
    font-family: inherit;
    border:none;
  }

  ul,ol{
    list-style: none;
  }

  button{
    cursor: pointer;
    background-color: transparent;
    border:none;
    font-family: inherit;
  }

  p,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
  isolation: isolate;
}
`

export default GlobalStyle
