import styled from 'styled-components'
import { responsiveHelper as media } from 'Helpers'

export const HeaderNode = styled.header`
  background-color: white;
  border-bottom: solid 1px ${({ theme }) => theme.colors.divider};
  min-height: 6rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  ${media.phone`
    padding: 2rem 0;
  `};
`

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 2rem;

  ${media.phone`
    flex-direction: column;
  `};
`

export const Logo = styled.img`
  max-width: 100%;
  height: 45px;
  position: absolute;
  margin-left: -64px;
  margin-top: 15px;
`

export const Nav = styled.nav`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 0.8rem;

  & > a {
    color: ${({ theme }) => theme.colors.textTitle};
  }

  & > * {
    margin-right: 1rem;

    &:last-child {
      margin-right: 0;
    }
  }
`

export const Name = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
`

export const Description = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
`
