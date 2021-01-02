import React from 'react'
import { Switch, Route } from 'react-router'

import { Top, Login } from './components/templates/index'

const Router = () => {
  return (
    <Switch>
      <Route exact path={'/login'} component={Login} />
      <Route exact path={'(/)?'} component={Top} />
    </Switch>
  )
}

export default Router
