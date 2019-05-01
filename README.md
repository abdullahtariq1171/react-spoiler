
[![npm version](https://badge.fury.io/js/react-spoiler.svg)](https://badge.fury.io/js/react-spoiler)

# react-spoiler
A spoiler component for reactjs

#### Demo https://827r7v3kxj.codesandbox.io/

### Install
using yarn  
`yarn add react-spoiler`

using npm  
`npm install react-spoiler`


## Usage

```
import ReactSpoiler from "react-spoiler";

<ReactSpoiler>
  <h1>ReactSpoiler</h1>
  <p> Click/Hover me to the magic! </p>
</ReactSpoiler>
```

## Quick Start With [unpkg](https://unpkg.com) CDN

Simply include following script

```
<script src="https://unpkg.com/react-spoiler@latest/dist/index.umd.js"></script>
```
Complete demo example using cdn
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>React Spoiler Example</title>
    <script src="https://unpkg.com/react@latest/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@latest/umd/react-dom.development.js"></script>

    <!-- Don't use this in production: -->
    <script src="https://unpkg.com/babel-standalone@latest/babel.min.js"></script>

    <script src="https://unpkg.com/react-spoiler@latest/dist/index.umd.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">

      ReactDOM.render(
        <ReactSpoiler>
          <h1>ReactSpoiler</h1>
          <p> Click/Hover me to the magic! </p>
        </ReactSpoiler>,
        document.getElementById('root')
      );

    </script>
  </body>
</html>
```

## Props

| prop  |  type | default   | description  |  
|---|---|---|---|    
| show  | boolean  | `false`   |  show/hide spoiler on initial render  |    
| tag  | string  | `div`  | decides the type of rendered element |   
| blur  | number  | `4`  | blur value on clicked |   
| hoverBlur  | number  | `blur`/2   | blur value on hovered |   

**Note**: all other props will be passed to `tag` element.

## License
    MIT
