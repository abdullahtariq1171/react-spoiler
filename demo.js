import React from 'react'
import ReactSpoiler from "./src/index";

export default class App extends React.PureComponent {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <div>
          <h2>With devault values</h2>
          <ReactSpoiler>
            <h1> Sample Text </h1>
          </ReactSpoiler>
        </div>

        <hr />

        <div>
          <h2>hoverBlur={`{4}`}</h2>
          <ReactSpoiler hoverBlur={4}>
            <h1> Sample Text </h1>
          </ReactSpoiler>
        </div>

        <hr />

        <div>
          <h2>with tag='h1'</h2>
          <ReactSpoiler tag='h1'>
            Sample Text
          </ReactSpoiler>
        </div>

      </div>
    )
  }
}
