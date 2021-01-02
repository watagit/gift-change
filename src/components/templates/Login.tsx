import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { push } from 'connected-react-router'

import { signInAction } from '../../reducks/users/actions'

const Login: React.FC = () => {
  const dispatch = useDispatch()
  const selector = useSelector(state => state)

  console.log(selector)

  return (
    <div>
      <h2>ログイン</h2>
      <button onClick={() => {
        dispatch(signInAction({uid: '0001', username: 'what_a_pon'}))
        dispatch(push('/'))
      }}>
        ログインする
      </button>
    </div>
  )
}

export default Login
