import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  color: ${colors.redLight};
  background-color: ${colors.beige};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 0px;
  display: block;
  width: 100%;
  border: none;
`

export const ButtonLink = styled(Link)`
  color: ${colors.beigeDark};
  background-color: ${colors.redLight};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
  display: inline-block;
`

export const SecondaryButtonLink = styled(ButtonLink)`
  background-color: transparent;
  color: ${colors.redLight};
  font-size: 18px;
`
