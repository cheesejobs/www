import styled from 'styled-components'
import { responsiveHelper as media } from 'Helpers'

const ListTitle = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
  flex: 1 1 50%;

  ${media.tablet`
    margin-bottom: 0.5rem;
  `};
`

export default ListTitle
