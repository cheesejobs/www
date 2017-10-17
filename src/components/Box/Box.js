import React from 'react'
import PropTypes from 'prop-types'
import { BoxNode, Title, Text } from './styled'

const Box = ({ children, title, text }) => (
  <BoxNode>
    {title && <Title>{title}</Title>}
    {text && <Text>{text}</Text>}
    {children && <Text>{children}</Text>}
  </BoxNode>
)

Box.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
  title: PropTypes.string
}

export default Box
