import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

export const Bars = styled.div`
  position: relative;
  height: 16px;
  flex: 1;
`

export const Amount = styled.div`
  text-align: right;
  min-width: 50px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 300;
  font-size: 0.8rem;
`

export const BackgroundBar = styled.div`
  height: 2px;
  background: ${({ theme }) => theme.colors.amountBar};
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);

  &:before,
  &:after {
    content: '';
    position: absolute;
    background: ${({ theme }) => theme.colors.amountBar};
    width: 8px;
    height: 8px;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
  }

  &:after {
    right: 0;
  }
`

export const ColorBar = styled.div`
  position: relative;
  background: ${props => props.color};
  width: ${props => props.amount}%;
  left: ${props => props.offset}%;
  height: 8px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 8px;
`
