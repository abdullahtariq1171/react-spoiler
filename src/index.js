"use strict";
const React = require('react');
const ReactDom = require('react');

export default class ReactSpoiler extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: props.show || false,
      isHovering: false
    }
  }

  onClick(e) {
    this.setState(({ show }) => ({ show: !show }))

    if (this.props.onClick) this.props.onClick(e)
  }

  onMouseEnter(e) {
    this.setState({ isHovering: true })
  }

  onMouseLeave(e) {
    this.setState({ isHovering: false })
  }

  render() {

    const {
      tag: Tag = 'div',
      blur = 4,
      children,
      spoilText = 'Click to show'
    } = this.props

    const { show, isHovering } = this.state

    const props = {
      onClick: this.onClick.bind(this),
      onMouseEnter: this.onMouseEnter.bind(this),
      onMouseLeave: this.onMouseLeave.bind(this),
      style: {}
    }

    if (!show) {
      props.style = {
        ...props.style,
        filter: `blur(${isHovering? blur / 2  : blur }px)`
      }
    }

    return (
      <Tag {...props}>
        {children}
      </Tag>
    )
  }
}