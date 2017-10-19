import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { darken } from 'polished'

const Button = styled.button`
  position: relative;
  cursor: pointer;
  border: none;
  outline: 0;
  padding: 0 1rem;
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 1px;
  line-height: 2rem;
  color: white;

  ${({ accent, theme }) =>
    accent &&
    css`
      background-color: ${theme.colors.accent};

      &:hover,
      &:active {
        background-color: ${darken(0.02, theme.colors.accent)};
      }
    `} ${props =>
  props.large &&
      css`
        width: 100%;
        height: 3.6rem;
        font-size: 2rem;
        line-height: 2.6rem;
      `};
`

Button.propTypes = {
  accent: PropTypes.bool,
  large: PropTypes.bool,
  onClick: PropTypes.func
}

export default Button
