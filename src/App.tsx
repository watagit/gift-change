import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Top from './components/templates/Top'
import Home from './components/templates/Home'
import { signInAction } from './reducks/users/actions'
import { UserProps } from './reducks/users/types'

const App: React.FC = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state: UserProps) => state)

  console.log(selector.users)

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={Top} />
        <Route exact path={'/home'} component={Home} />
      </Switch>
      <button onClick={() => dispatch(signInAction({ uid: '0', username: 'hello' }))}>button</button>
    </BrowserRouter>
  )
}

export default App
