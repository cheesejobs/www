import styled from 'styled-components'

export const Wrapper = styled.article`
  background: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  padding: 1rem 2rem;
`

export const Title = styled.h1`
  font-size: 2rem;
  margin-top: 1rem;
`

export const Body = styled.section`
  & h1 {
    font-size: 2.25rem;
    line-height: 2.75rem;
    margin: 1.25rem 0;
  }

  & h2 {
    font-size: 1.75rem;
    line-height: 2.25rem;
    margin: 1rem 0;
  }

  & h3,
  & h4,
  & h5,
  & h6 {
    font-size: 1.25rem;
    line-height: 1.625rem;
    margin: 1rem 0;
  }

  p {
    line-height: 1.6rem;
  }
`
