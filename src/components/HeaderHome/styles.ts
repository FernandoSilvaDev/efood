import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Image = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: repeat;
  background-size: cover;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: ${breakpoints.cellphone}) {
    height: 300px;
  }
`

export const Logo = styled.h1`
  padding-top: 64px;
  line-height: 0;
`

export const Title = styled.h2`
  width: 539px;
  padding-top: 138px;
  font-weight: bold;
  font-size: 36px;
  color: ${colors.darkRed};
  text-align: center;

  @media (max-width: ${breakpoints.cellphone}) {
    width: 100%;
    font-size: 24px;
    padding-top: 56px;
  }
`
