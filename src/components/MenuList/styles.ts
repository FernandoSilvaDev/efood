import styled from 'styled-components'

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
`
