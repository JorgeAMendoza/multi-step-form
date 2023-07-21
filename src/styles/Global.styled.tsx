import { createGlobalStyle } from 'styled-components'
import UbuntuRegular from '@/src/assets/fonts/Ubuntu-Regular.ttf'
import UbuntuBold from '@/src/assets/fonts/Ubuntu-Bold.ttf'
import UbuntuMedium from '@/src/assets/fonts/Ubuntu-Medium.ttf'

const GlobalStyle = createGlobalStyle`

    @font-face {
    font-family: 'Ubuntu';
    src: url(${UbuntuRegular}) format('truetype');
    font-weight: 400;
    }

    @font-face {
    font-family: 'Ubuntu';
    src: url(${UbuntuMedium}) format('truetype');
    font-weight: 500;
    }

    @font-face {
    font-family: 'Ubuntu';
    src: url(${UbuntuBold}) format('truetype');
    font-weight: 700;
    }
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
    hyphens: auto;
  }

  #root, #__next {
  isolation: isolate;
}
`

export default GlobalStyle