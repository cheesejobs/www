import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon } from 'Components'
import { StepDescription, StepNode, StepTime, StepTitle } from './styled'

const CustomIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-left: 0.5rem;
`

const Step = ({ title, description, time }) => (
  <StepNode>
    <StepTitle>{title}</StepTitle>
    {description && <StepDescription>{description}</StepDescription>}
    {time && (
      <StepTime>
        {time}
        <CustomIcon value='clock' />
      </StepTime>
    )}
  </StepNode>
)

Step.propTypes = {
  description: PropTypes.string,
  time: PropTypes.string,
  title: PropTypes.string
}

export default Step
