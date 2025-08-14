import styled from 'styled-components'
import { colors } from '../../styles'

export const Image = styled.div`
  position: relative;
  width: 100%;
  height: 186px;
  display: block;
  background-repeat: repeat;
  background-size: cover;

  .container {
    position: relative;
    padding-top: 63px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
  }
`

export const CategoryTitle = styled.h2`
  display: flex;
  padding-top: 25px;
  font-size: 32px;
  font-weight: 100;
  color: ${colors.white};
`

export const Title = styled.h2`
  display: flex;
  padding-top: 156px;
  font-size: 32px;
  font-weight: bold;
  color: ${colors.white};
`

export const ImageBanner = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  &::before {
    position: absolute; //posição fixa
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    content: ''; //Para o elemento estar por cima ele precisa de um conteudo mesmo que seja um content vazio.
    opacity: 0.5;
    z-index: 1;
  }

  .banner {
    position: relative; /* necessário para z-index funcionar */
    z-index: 1; /* maior que o ::before */
    display: block;
  }
`

export const CartButton = styled.a`
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
`
