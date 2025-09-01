import styled from 'styled-components'
import { breakpoints } from '../../styles'
import { Props } from '.'

export const Container = styled.div<Omit<Props, 'isLoading'>>`
  padding-top: 80px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  list-style-type: none;

  @media (max-width: ${breakpoints.cellphone}) {
    grid-template-columns: 1fr;
  }
`
