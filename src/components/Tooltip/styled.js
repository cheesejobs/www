import styled from 'styled-components'

export const Arrow = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  left: 0;
  top: 50%;
  margin-top: -5px;
  margin-left: -5px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 5px solid ${({ theme }) => theme.colors.textTitle};
`

export const Content = styled.div`
  color: #fff;
  font-size: 0.7rem;
  font-weight: normal;
  text-align: center;
  padding: 0.5rem;
  border-radius: 2px;
`

export const Gap = styled.div`
  position: absolute;
  width: 100%;
  height: 20px;
  bottom: -20px;
`

export const TooltipNode = styled.div`
  position: absolute;
  z-index: 99;
  min-width: 230px;
  max-width: 420px;
  background: ${({ theme }) => theme.colors.textTitle};
  left: 100%;
  top: 50%;
  margin-left: 5px;
  transform: translateY(-50%);
  border-radius: 2px;
  cursor: default;
`

export const Wrapper = styled.abbr`
  position: relative;
  display: inline-block;
  z-index: 100;
  cursor: help;
`
