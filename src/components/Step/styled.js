import styled from 'styled-components'

export const StepNode = styled.div`
  position: relative;
  border-left: 2px solid ${({ theme }) => theme.colors.amountBar};
  padding: 1rem;
  left: 20%;
  width: 80%;
`

export const StepTitle = styled.h4`
  color: ${({ theme }) => theme.colors.textTitle};
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  margin: 0;

  &:before {
    content: '';
    position: absolute;
    background: ${({ theme }) => theme.colors.amountBar};
    width: 8px;
    height: 8px;
    border-radius: 50%;
    left: -5px;
    transform: translateY(1px);
  }
`

export const StepDescription = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-top: 0.5rem;
  line-height: 26px;
  font-size: 15px;
`

export const StepTime = styled.abbr`
  color: ${({ theme }) => theme.colors.textSecondary};
  position: absolute;
  width: 20%;
  left: -25%;
  font-size: 12px;
  text-align: right;
  top: calc(50% + 0.5rem);
`
