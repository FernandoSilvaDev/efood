import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

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
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
  line-height: 22px;
  font-weight: 400;
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
