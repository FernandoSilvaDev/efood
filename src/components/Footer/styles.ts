import styled from 'styled-components'

export const Image = styled.div`
  width: 100%;
  height: 298px;
  display: block;
  background-repeat: repeat;
  background-size: cover;
  margin-top: 72px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Logo = styled.div`
  padding-top: 40px;
`

export const Links = styled.ul`
  display: flex;
  text-decoration: none;
`

export const LinkItem = styled.a`
  text-decoration: none;
  margin-right: 8px;
  margin-top: 32px;
`

export const SubTitle = styled.p`
  margin-top: 80px;
  text-align: center;
  max-width: 480px;
  font-size: 10px;
`
