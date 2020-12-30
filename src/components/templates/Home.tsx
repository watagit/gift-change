import React from 'react'
import { getUserId, getUsername } from '../../reducks/users/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../../reducks/users/operations'

const Home: React.FC = () => {
  const dispatch = useDispatch()
  const selector = useSelector(state => state)
  const uid = getUserId(selector)
  const username = getUsername(selector)

  return (
    <div>
      <div>Home</div>
      <p>ユーザID：{uid}</p>
      <p>ユーザ名：{username}</p>
      <button onClick={() => dispatch(signOut())}>SIGN OUT</button>
    </div>
  )
}

export default Home
