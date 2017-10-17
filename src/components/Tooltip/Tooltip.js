import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import { Arrow, Content, Gap, TooltipNode, Wrapper } from './styled'

class Tooltip extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
  }

  constructor (props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  setVisibility = visible => {
    this.setState({ visible })
  }

  hide = () => this.setVisibility(false)

  show = () => this.setVisibility(true)

  handleTouch = () => {
    this.show()
    this.assignOutsideTouchHandler()
  }

  assignOutsideTouchHandler = () => {
    const handler = event => {
      let currentNode = event.target
      const componentNode = ReactDOM.findDOMNode(this) // eslint-disable-line react/no-find-dom-node

      while (currentNode.parentNode) {
        if (currentNode === componentNode) return
        currentNode = currentNode.parentNode
      }

      if (currentNode !== document) return

      this.hide()
      document.removeEventListener('touchstart', handler)
    }

    document.addEventListener('touchstart', handler)
  }

  renderTooltip = () => (
    <TooltipNode>
      <Content>{this.props.content}</Content>
      <Arrow />
      <Gap />
    </TooltipNode>
  )

  render () {
    return (
      <Wrapper
        onMouseEnter={this.show}
        onMouseLeave={this.hide}
        onTouchStart={this.handleTouch}
      >
        {this.props.children}
        {this.state.visible && this.renderTooltip()}
      </Wrapper>
    )
  }
}

export default Tooltip
