import { createGlobalStyle } from 'styled-components'

export const colors = {
  beige: '#FFF8F2',
  beigeDark: '#FFEBD9',
  redLight: '#E66767',
  white: '#FFFFFF'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${colors.beige};
    color: ${colors.redLight};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
