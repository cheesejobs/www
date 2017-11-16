import React from 'react'
import { Body, Title, Wrapper } from './styled'

export default ({ meta, body }) => (
  <Wrapper>
    {meta.title && <Title>{meta.title}</Title>}
    <Body dangerouslySetInnerHTML={{ __html: body }} />
  </Wrapper>
)
