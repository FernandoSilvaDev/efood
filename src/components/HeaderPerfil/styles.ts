import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Image = styled.div`
  position: relative;
  width: 100%;
  height: 186px;
  display: block;
  background-repeat: repeat;
  background-size: cover;

  img {
    display: block;
  }

  .container {
    position: relative;
    padding-top: 62px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;

    @media (max-width: ${breakpoints.cellphone}) {
      padding-top: 32px;
    }
  }

  @media (max-width: ${breakpoints.cellphone}) {
    .logoDesck {
      display: none;
      max-width: 80%;
    }
  }
`

export const LogoMobile = styled.div`
  padding-top: 32px;
  display: none;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.cellphone}) {
    display: flex;
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

  @media (max-width: ${breakpoints.cellphone}) {
    padding-top: 118px;
  }
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

export const CartButton = styled.span`
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
  display: flex;

  span {
    margin-left: 8px;
  }

  img {
    display: none;
    margin-left: 8px;
    filter: invert(63%) sepia(34%) saturate(747%) hue-rotate(310deg)
      brightness(120%) contrast(90%);
  }
  @media (max-width: ${breakpoints.cellphone}) {
    img {
      display: flex;
    }
    span {
      display: none;
    }
  }
`
