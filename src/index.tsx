import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'
import reportWebVitals from './reportWebVitals'
import { ConnectedRouter } from 'connected-react-router'
import * as History from 'history'

import App from './App'
import createStore from './reducks/store/store'

const history = History.createBrowserHistory()
export const store = createStore(history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
