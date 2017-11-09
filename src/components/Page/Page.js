import React from 'react'
import { Body, Title, Wrapper } from './styled'

export default ({ meta, body }) => (
  <Wrapper>
    <Title>{meta.title}</Title>
    <Body dangerouslySetInnerHTML={{ __html: body }} />
  </Wrapper>
)
