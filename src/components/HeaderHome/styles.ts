import styled from 'styled-components'
import { colors } from '../../styles'

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
`

export const Logo = styled.div`
  padding-top: 64px;
`

export const Title = styled.h2`
  width: 539px;
  padding-top: 138px;
  font-weight: bold;
  font-size: 36px;
  color: ${colors.redLight};
  text-align: center;
`
