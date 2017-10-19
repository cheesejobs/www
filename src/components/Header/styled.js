import styled from 'styled-components'
import media from '../../utils/responsive'

export const HeaderNode = styled.header`
  background-color: white;
  border-bottom: solid 1px ${({ theme }) => theme.colors.divider};
  min-height: 6rem;
  display: flex;
  align-items: center;

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
  height: calc(6rem / 2.5);

  ${media.phone`
    margin-bottom: 1.5rem;
  `};
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
