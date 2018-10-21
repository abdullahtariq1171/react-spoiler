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

    this.onClick = this.onClick.bind(this)
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }

  onClick(e) {
    this.setState(({ show }) => ({ show: !show }))

    if (this.props.onClick) this.props.onClick(e)
  }

  onMouseEnter(e) {
    this.setState({ isHovering: true })

    if(this.props.onMouseEnter) this.props.onMouseEnter(e)
  }

  onMouseLeave(e) {
    this.setState({ isHovering: false })

    if (this.props.onMouseLeave) this.props.onMouseLeave(e)
  }

  render() {

    const {
      tag: Tag = 'div',
      blur = 4,
      hoverBlur = blur / 2,
      show: _,
      ...restProps
    } = this.props

    const { show, isHovering } = this.state

    const props = {
      style: {},
      ...restProps,
      onClick: this.onClick,
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave
    }

    if (!show) {
      props.style = {
        ...props.style,
        filter: `blur(${isHovering ? hoverBlur : blur }px)`
      }
    }

    return  <Tag {...props} />
  }
}
