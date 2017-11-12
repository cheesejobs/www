import {createElement} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LinkSecondary = styled(Link)`
border-bottom: 1px dashed ${({ theme }) => theme.colors.textSecondary};
color: ${({ theme }) => theme.colors.textSecondary};

&:hover {
  color: ${({ theme }) => theme.colors.accent};
  border-bottom-color: ${({ theme }) => theme.colors.accent};
}
`

const LinkPrimary = styled(Link)`
  color: ${({ theme }) => theme.colors.accent};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const getComponent = style => {
  if (style === 'secondary') return LinkSecondary
  return LinkPrimary
}

export default ({style, external, ...props}) => (
  createElement(getComponent(style), {
    rel: 'noopener noreferrer',
    target: external ? '_blank' : '_self',
    ...props
  })
)
