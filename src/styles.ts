import { createGlobalStyle } from 'styled-components'

export const colors = {
  rosa: '#E66767',
  amarelo: '#FFEBD9',
  branco: '#fff',
  preto: '#4B4B4B'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  .container {
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;
  }
`
