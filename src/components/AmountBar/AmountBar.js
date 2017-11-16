import React from 'react'
import PropTypes from 'prop-types'
import { Amount, BackgroundBar, Bars, ColorBar, Wrapper } from './styled'
import { THEME } from 'Constants'

const AmountBar = ({ amount, color, offset, showAmount }) => (
  <Wrapper>
    <Bars>
      <BackgroundBar showAmount={showAmount} />
      <ColorBar
        color={color}
        offset={offset}
        amount={amount}
        showAmount={showAmount}
      />
    </Bars>
    {showAmount && <Amount>{amount}%</Amount>}
  </Wrapper>
)

AmountBar.propTypes = {
  amount: PropTypes.number,
  color: PropTypes.string,
  offset: PropTypes.number,
  showAmount: PropTypes.bool
}

AmountBar.defaultProps = {
  amount: 75,
  color: THEME.colors.accent,
  offset: 0
}

export default AmountBar
