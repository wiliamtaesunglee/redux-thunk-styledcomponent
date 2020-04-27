import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './redux/configureStore'

import { MainPage } from './pages/main'

function App () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={MainPage} exact />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App
