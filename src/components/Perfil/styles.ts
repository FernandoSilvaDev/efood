import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  background-color: ${colors.redLight};
  color: ${colors.beigeDark};
  margin-bottom: 48px;
  position: relative;
  padding: 8px;

  ${TagContainer} {
    margin-right: 8px;
  }

  .titleCard {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  img {
    width: 100%;
    max-height: 167px;
    height: auto;
    object-fit: cover;
  }

  button {
    cursor: pointer;
  }
`

export const Title = styled.h3`
  font-size: 16px;
  display: block;
  margin-top: 8px;
  font-weight: 900;
`

export const Descricao = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
  line-height: 22px;
  font-weight: 400;
  font-style: oblique;
`

export const Grade = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;

  img {
    max-width: 21px;
    margin-left: 8px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none; //Para que o modal seja visivel somente ao clicar na imagem
  align-items: center;
  justify-content: center;

  &.visivel {
    //Ação de ao clicar na imagem
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }

  @media (max-width: ${breakpoints.cellphone}) {
  }
`

export const ModalContent = styled.div`
  background-color: ${colors.redLight};
  color: ${colors.white};
  max-width: 1024px;
  position: relative;
  z-index: 1;

  display: flex;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    h4 {
      font-size: 18px;
      font-weight: bold;
    }
  }

  p {
    margin-bottom: 16px;
    margin-right: 32px;
  }

  .imgItem {
    margin: 32px 24px 32px 32px;
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  .close {
    margin: 8px 8px 8px 0;

    width: 16px;
    height: 16px;
    margin-left: auto;
    cursor: pointer;
  }

  Button {
    width: fit-content;
    padding: 4px 7px;
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.cellphone}) {
    display: grid;
    place-items: center;
    padding: 1rem;
    text-align: center;

    header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h4 {
        margin-bottom: 8px;
      }
    }

    .close {
      margin-left: 0;
    }

    ${ButtonContainer} {
      margin: 0 auto;
      display: block;
      margin-bottom: 16px;
    }
  }
`
