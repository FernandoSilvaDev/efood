import { createGlobalStyle } from 'styled-components'

export const colors = {
  beige: '#FFF8F2',
  darkBeige: '#FFEBD9',
  darkRed: '#E66767',
  white: '#FFFFFF'
}

export const breakpoints = {
  tablet: '1024px',
  cellphone: '768px'
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
    color: ${colors.darkRed};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 80%;
    }
  }

`
