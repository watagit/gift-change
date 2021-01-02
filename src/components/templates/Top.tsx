import React from 'react'
import { Container } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

import { UserProps } from '../../reducks/users/types'
import { getIsSignedIn, getUserId, getUsername } from '../../reducks/users/selectors'
import GlobalMenu from '../organisms/GlobalMenu'

const Top: React.FC = () => {
  const selector = useSelector((state: UserProps) => state)
  const isSignedIn = getIsSignedIn(selector)
  const uid = getUserId(selector)
  const username = getUsername(selector)

  return (
    <Container>
      <GlobalMenu />
      <div>
        <p>ログイン状態：{isSignedIn}</p>
        <p>ユーザID：{uid}</p>
        <p>ユーザ名：{username}</p>
      </div>
    </Container>
  )
}

export default Top
