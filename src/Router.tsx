import React from 'react'
import { Switch, Route } from 'react-router'

import {
  SignUp,
  Home,
  SignIn,
  Reset
} from './components/templates/index'
import Auth from './Auth'

const Router = () => {
  return (
    <Switch>
      <Route exact path={'/signup'} component={SignUp} />
      <Route exact path={'/signin/reset'} component={Reset} />
      <Route exact path={'/signin'} component={SignIn} />
      <Auth>
        <Route exact path={'(/)?'} component={Home} />
      </Auth>
    </Switch>
  )
}

export default Router
