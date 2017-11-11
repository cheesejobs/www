import styled from 'styled-components'

export const BoxNode = styled.div`
  color: ${({ theme }) => theme.colors.textTitle};
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
`

export const Title = styled.h6`
  padding: 0.8rem 1rem;
  border-bottom: solid 1px ${({ theme }) => theme.colors.divider};
  font-weight: 400;
  font-size: 0.8rem;
  margin: 1rem 0 0.5rem;
  text-transform: uppercase;
`

export const Text = styled.div`
  padding: 1rem;
  font-size: 0.8rem;
  line-height: 1.2rem;

  & ~ p {
    padding-top: 0;
  }
`
