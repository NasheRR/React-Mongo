import React from 'react'
import ReactDOM from 'react-dom'

import './scss/main.scss'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Its Works!</h1>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))