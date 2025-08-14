import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

import Delete from '../../assets/img_logo/lixeira.png'
import { ButtonContainer } from '../Button/styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.redLight};
  z-index: 1;
  padding: 16px 8px;
  max-width: 360px;
  width: 100%;

  overflow-y: auto;

  ${ButtonContainer} {
    margin-bottom: 16px;
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

export const CartItem = styled.li`
  display: flex;
  padding: 8px;
  background-color: ${colors.beige};
  margin-top: 16px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  button {
    background-image: url(${Delete});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
