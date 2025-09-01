import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

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
  z-index: 5;

  &.is-openOrder {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.darkRed};
  color: ${colors.beige};
  z-index: 5;
  padding: 16px 8px;
  max-width: 360px;
  width: 100%;

  overflow-y: auto;

  ${ButtonContainer} {
    margin-bottom: 16px;
    cursor: pointer;
  }

  h3 {
    font-size: 16px;
    font-weight: 900;
    margin-top: 24px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-top: 16px;
  }

  button {
    margin-top: 24px;
  }

  @media (max-width: ${breakpoints.cellphone}) {
    max-width: 300px;
  }
`

export const Prices = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.beige};
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
`
