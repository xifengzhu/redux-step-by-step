import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import App from './containers/App'
import { Provider } from 'react-redux'
import rootReducer from './reducers/index'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
