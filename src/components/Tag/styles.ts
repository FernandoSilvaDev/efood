import styled from 'styled-components'

import { colors } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.darkRed};
  color: ${colors.darkBeige};
  font-size: 12px;
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
  margin-left: 8px;
`
