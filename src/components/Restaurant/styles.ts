import styled from 'styled-components'

import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${colors.white};
  color: ${colors.darkRed};
  border: 1px solid ${colors.darkRed};
  margin-bottom: 48px;
  position: relative;

  img {
    width: 100%;
    max-height: 217px;
    height: auto;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  .titleCard {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin-top: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`

export const Info = styled.div`
  padding: 8px 8px;
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
