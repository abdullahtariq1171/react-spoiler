
[![npm version](https://badge.fury.io/js/react-spoiler.svg)](https://badge.fury.io/js/react-spoiler)

# react-spoiler
A spoiler component for reactjs

### Install
using yarn  
`yard add react-spoiler`

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

## Props

| prop  |  type | default   | description  |  
|---|---|---|---|    
| show  | boolean  | `false`   |  show/hide spoiler on initial render  |    
| tag  | string  | `div`  | decides the type of rendered element |   
| blur  | number  | `4`  | blur value on clicked |   
| hoverBlur  | number  | `blur`/2   | blur value on hovered |   

**Note**: all other props will be passed to `tag` element.
