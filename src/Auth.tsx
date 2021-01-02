import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { UserProps } from './reducks/users/types'
import { listenAuthState } from './reducks/users/operations'
import { getIsSignedIn } from './reducks/users/selectors'

const Auth: React.FC<{ children: any }> = ({ children }) => {
  const dispatch = useDispatch()
  const selector = useSelector((state: UserProps) => state)
  const isSignedIn = getIsSignedIn(selector)

  useEffect(() => {
    if (!isSignedIn) {
      dispatch(listenAuthState())
    }
  }, [])

  if (!isSignedIn) {
    return <></>
  } else {
    return children
  }
}

export default Auth
