import styled from 'styled-components'
import { responsiveHelper as media } from 'Helpers'

const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 26px;
  margin-bottom: 1rem;

  ${media.tablet`
    flex-direction: column;
  `};
`

export default ListItem
