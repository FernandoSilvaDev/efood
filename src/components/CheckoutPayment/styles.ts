import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

type InputGroupProps = {
  maxWidth?: string
}

type PayButtonProps = {
  isActive: boolean
}

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const CardContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 4;

  &.is-openPayment {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.darkRed};
  z-index: 4;
  padding: 16px 8px;
  max-width: 360px;
  width: 100%;

  overflow-y: auto;

  ${ButtonContainer} {
    margin-bottom: 16px;
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.cellphone}) {
    max-width: 300px;
  }
`

export const TabButton = styled.button<PayButtonProps>`
  color: ${colors.darkRed};
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 900;
  padding: 4px 0px;
  display: block;
  width: 100%;
  border: none;
  cursor: pointer;
  background-color: ${(props) =>
    props.isActive ? colors.darkBeige : colors.beige};
`

export const Row = styled.div<{ layout?: 'block' | 'flex' }>`
  display: ${({ layout }) => (layout === 'flex' ? 'flex' : 'block')};
  gap: ${({ layout }) => (layout === 'flex' ? '34px' : '0')};

  .marginBottom {
    margin-bottom: 24px;
  }

  .marginBottom {
    margin-bottom: 24px;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  max-width: ${(props) =>
    props.maxWidth || 'auto'}; //Definir o tamanho dos inputs
  width: 100%;

  label {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
    display: block;
    color: ${colors.beige};
  }

  input {
    background-color: ${colors.beige};
    border: 2px solid ${colors.white};
    margin-bottom: 8px;
    width: 100%;
    height: 32px;
    padding: 0 8px;

    &.error {
      border: 2px solid yellow;
    }
  }

  small {
    color: yellow;
  }
`

export const Pix = styled.div`
  text-align: center;
  img {
    max-width: 150px;
  }
`

export const LinkPix = styled.div`
  border: 1px solid ${colors.beige};
  border-radius: 8px;
  background-color: ${colors.darkBeige};

  padding: 8px;
  margin-bottom: 24px;

  p {
    color: ${colors.darkRed};
  }

  ${ButtonContainer} {
    background-color: ${colors.darkRed};
    color: ${colors.beige};
    cursor: pointer;

    &:active {
      background-color: ${colors.beige};
      color: ${colors.darkRed};
    }
  }
`

export const ButtonCheckout = styled.button`
  color: ${colors.darkRed};
  cursor: pointer;
  background-color: ${colors.beige};
  font-size: 14px;
  font-weight: 900;
  padding: 4px 0px;
  display: block;
  width: 100%;
  border: none;
  margin-bottom: 16px;
  margin-top: 24px;
`
