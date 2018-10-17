"use strict";
const React = require('react');
const ReactDom = require('react');

export default class ReactSpoiler extends React.Component {
  state = {
    show: this.props.show || false
  }

  onClick(e) {
    this.setState(({ show }) => ({ show: !show }))

    if (this.props.onClick) this.props.onClick(e)
  }

  render() {
    const {
      tag = 'div',
      blur = 3,
      children,
      spoilText = 'Click to show'
    } = this.props

    const { show } = this.state

    const props = {
      onClick: this.onClick.bind(this),
      style: {}
    }

    if (!show) {
      props.style = {
        ...props.style,
        filter: `blur(${blur}px)`
      }
    }

    return React.createElement(
      tag,
      props,
      !show ? children : spoilText
    )
  }
}

// const React = require('react')

// module.exports = class Spoiler extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       show: props.show || false
//     };
//     this.toggle = this.toggle.bind(this);
//   }

//   toggle(e) {
//     if (e && typeof e.preventDefault === 'function') {
//       e.preventDefault();
//     }
//     this.setState({ show: !this.state.show });
//   }

//   render() {
//     const Tag = this.props.tag || <div />;
//     return (
//       <Tag className={
//         `${this.props.className} react-spoiler ${
//           this.state.show ? 'react-spoiler-shown' : 'react-spoiler-hidden'
//         }`
//       } {...this.props}>
//         {this.state.show ? this.props.children : (
//           <button className={
//               `${this.props.buttonClassName} react-spoiler-button ${
//                 this.state.show ? 'react-spoiler-shown' : 'react-spoiler-hidden'
//               }`
//           } onClick={this.toggle}>
//             { this.props.hiddenText || 'Click to show' }
//           </button>
//         )}
//       </Tag>
//     )
//   }
// }