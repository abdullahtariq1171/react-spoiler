import React, {Component} from 'react'
import ReactSpoiler from "./index";

export default class App extends Component {
  render() {
    return (
      <div>
        <ReactSpoiler blur={5}>
          <h1> something good </h1>            
        </ReactSpoiler>
      </div>
    )
  }
}
