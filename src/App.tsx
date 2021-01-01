import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Top from './components/templates/Top'
import Home from './components/templates/Home'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={Top} />
        <Route exact path={'/home'} component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
