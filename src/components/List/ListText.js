import styled from 'styled-components'
import media from '../../utils/responsive'

const ListText = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  flex: 1 1 50%;

  ${media.tablet`
    margin-bottom: 0.5rem;
  `};
`

export default ListText
