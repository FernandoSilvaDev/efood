import styled from 'styled-components'

import { breakpoints } from '../../styles'

export const Container = styled.div`
  padding-top: 56px;

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  list-style-type: none;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.cellphone}) {
    grid-template-columns: 1fr;
  }
`
