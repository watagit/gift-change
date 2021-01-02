import { signInAction } from './actions'
import { push } from 'connected-react-router'
import { UserProps } from './types'

export const signIn = () => {
  return async (dispatch: any, getState: () => UserProps) => {
    const state = getState()
    const isSignedIn = state.users.isSignedIn

    if (!isSignedIn) {
      const url = 'https://api.github.com/users/watagit'

      const response = await fetch(url)
        .then((res => res.json()))
        .catch(() => null)

      const username = response.login

      dispatch(signInAction({
        isSignedIn: true,
        uid: '00001',
        username: username
      }))
      dispatch(push('/'))
    }
  }
}
