import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

type InputGroupProps = {
  maxWidth?: string
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
  z-index: 3;

  &.is-openDelivery {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.darkRed};
  z-index: 3;
  padding: 16px 8px;
  max-width: 360px;
  width: 100%;

  overflow-y: auto;

  ${ButtonContainer} {
    margin-bottom: 8px;
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.cellphone}) {
    max-width: 300px;
  }
`

export const Row = styled.div<{ layout?: 'block' | 'flex' }>`
  display: ${({ layout }) => (layout === 'flex' ? 'flex' : 'block')};
  gap: ${({ layout }) => (layout === 'flex' ? '34px' : '0')};
  /* margin-bottom: 16px; */

  .marginBottom {
    margin-bottom: 24px;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  max-width: ${(props) =>
    props.maxWidth || 'auto'}; //Definir o tamanho dos inputs

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

export const ButtonCheckout = styled.button`
  color: ${colors.darkRed};
  background-color: ${colors.beige};
  font-size: 14px;
  font-weight: 900;
  padding: 4px 0px;
  display: block;
  width: 100%;
  border: none;
  margin-bottom: 16px;
  cursor: pointer;
`
