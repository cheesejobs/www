import styled from 'styled-components'
import { responsiveHelper as media } from 'Helpers'

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0 2rem;

  ${media.tablet`
    flex-direction: column;
  `};

  ${media.phone`
    padding: 1rem 1rem 0;
  `};
`

export const List = styled.ul`
  width: 100%;
  flex-grow: 1;

  & > * {
    width: 100%;
    background-color: white;
    box-sizing: border-box;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  }

  ${media.tablet`
    margin-bottom: 1rem;
  `};
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
