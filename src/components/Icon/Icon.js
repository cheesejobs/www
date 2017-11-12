import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as ICONS from './icons'

const IconNode = styled.span`
  display: inline-block;
  vertical-align: middle;
  height: 1em;
  width: 1em;
  background-color: currentColor;
  mask-image: url(${props => ICONS[props.value.toLowerCase()]});
  mask-repeat: no-repeat;
  mask-position: center center;
  overflow: hidden;

  & > svg {
    fill: currentColor;
    width: 100%;
    height: 100%;
  }
`

const Icon = ({ active, value, ...other }) => (
  <IconNode aria-label={value} active={active} value={value} {...other} />
)

Icon.propTypes = {
  active: PropTypes.bool,
  value: PropTypes.string
}

Icon.defaultProps = {
  active: false,
  value: ''
}

export default Icon
