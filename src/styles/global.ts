import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background: ${props => props.theme.colors.white.main};
    color: ${props => props.theme.colors.gray[600]};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif;
    position: relative;
  }

  body, input, textarea, button{
    font-family: Roboto, sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  p {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;

    :visited {
      color: inherit;
    }
  }

  button {
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }
  
  // 15px
  @media (max-width: 2000px) {
    html {
      font-size: 93.75%;
    }
  }

  // 14px
  @media (max-width: 1366px) {
    html {
      font-size: 87.5%;
    }
  }

  // 13px
  @media (max-width: 1080px) {
    html {
      font-size: 81.25%;
    }
  }

  // 12px
  @media (max-width: 720px) {
    html {
      font-size: 75%;
    }
  }

  // 11px
  @media (max-width: 600px) {
    html {
      font-size: 68.75%;
    }
  }
`