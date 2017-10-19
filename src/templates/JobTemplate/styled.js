import styled from 'styled-components'
import media from '../../utils/responsive'

export const Wrapper = styled.section`
  display: flex;
  margin-top: 1rem;
  padding: 1rem 2rem 0;

  ${media.tablet`
    flex-direction: column;
  `};

  ${media.phone`
    padding: 1rem 1rem 0;
  `};
`

export const Content = styled.article`
  color: ${({ theme }) => theme.colors.textTitle};
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);

  ${media.tablet`
    margin-bottom: 1rem;
  `};
`

export const Section = styled.section`
  padding: 1.5rem 2rem;
  box-shadow: 0 1px ${({ theme }) => theme.colors.divider};
`

export const Subsection = styled.section`
  padding: 0.5rem 0;
`

export const Title = styled.h2`
  font-size: 1.2rem;
  margin: 0 0 2rem;
  display: flex;
  align-items: center;

  & > abbr {
    margin-left: 0.5rem;
  }
`

export const Subtitle = styled.h4`
  font-size: 0.8rem;
  margin: 1rem 0 0.5rem;
  text-transform: uppercase;
`

export const Share = styled.nav`
  & > a {
    display: block;
    color: ${({ theme }) => theme.colors.accent};
  }
`

export const Aside = styled.aside`
  margin-left: 1rem;
  min-width: 18rem;
  width: 18rem;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }

  ${media.tablet`
    width: 100%;
    margin: 0;
  `};
`
