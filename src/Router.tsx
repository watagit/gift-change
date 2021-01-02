import React from 'react'
import { Switch, Route } from 'react-router'

import {
  Top,
  SignUp,
  Home,
  SignIn
} from './components/templates/index'

const Router = () => {
  return (
    <Switch>
      <Route exact path={'/signup'} component={SignUp} />
      <Route exact path={'/signin'} component={SignIn} />
      <Route exact path={'/home'} component={Home} />
      <Route exact path={'(/)?'} component={Top} />
    </Switch>
  )
}

export default Router
