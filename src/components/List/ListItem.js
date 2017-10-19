import styled from 'styled-components'
import { responsiveHelper as media } from 'Helpers'

const ListItem = styled.li`
  display: flex;
  margin-bottom: 1rem;
  line-height: 26px;

  ${media.tablet`
    flex-direction: column;
  `};
`

export default ListItem
