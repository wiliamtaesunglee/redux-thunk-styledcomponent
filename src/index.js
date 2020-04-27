import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import * as serviceWorker from './serviceWorker'

import GlobalStyles from './GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
