import styled from 'styled-components'
import { responsiveHelper as media } from 'Helpers'

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
