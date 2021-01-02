import { signInAction, signOutAction } from './actions'
import { push } from 'connected-react-router'
import { auth, db, FirebaseTimestamp } from '../../firebase/index'

export const listenAuthState = () => {
  return async (dispatch: any) => {
    return auth.onAuthStateChanged(user => {
      if (user) {
        const uid = user.uid

        db.collection('users').doc(uid).get()
          .then(snapshot => {
            dispatch(signInAction({
              isSignedIn: true,
              uid: uid,
              username: snapshot.get('username')
            }))

            dispatch(push('/'))
          })
      } else {
        dispatch(push('/signin'))
      }
    })
  }
}

export const resetPassword = (email: string) => {
  return async (dispatch: any) => {
    if (email === '') {
      alert('必須項目が未入力です')
      return false
    } else {
      auth.sendPasswordResetEmail(email)
        .then(() => {
          alert('入力されたアドレスにパスワードリセット用のメールを送りました')
          dispatch(push('/signin'))
        }).catch(() => {
          alert('パスワードリセットに失敗しました')
      })
    }
  }
}

export const signIn = (email: string, password: string) => {
  return async (dispatch: any) => {
    if (email === '' || password === '') {
      alert('必須項目が未入力です')
      return false
    }

    auth.signInWithEmailAndPassword(email, password)
      .then(result => {
        const user = result.user

        if (user) {
          const uid = user.uid

          db.collection('users').doc(uid).get()
            .then(snapshot => {
              dispatch(signInAction({
                isSignedIn: true,
                uid: uid,
                username: snapshot.get('username')
              }))

              dispatch(push('/'))
            })
        }
      })
  }
}

export const signUp = (username: string, email: string, password: string, confirmPassword: string) => {
  return async (dispatch: any) => {
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
      alert('必須項目が未入力です')
      return false
    }

    if (password !== confirmPassword) {
      alert('パスワードが一致しません。もう一度お試しください')
      return false
    }

    return auth.createUserWithEmailAndPassword(email, password)
      .then(result => {
        const user = result.user

        if (user) {
          const uid = user.uid
          const timestamp = FirebaseTimestamp.now()

          const userInitialData = {
            username: username,
            email: email,
            uid: uid,
            created_at: timestamp,
            updated_at: timestamp
          }

          db.collection('users').doc(uid).set(userInitialData)
            .then(() => {
              dispatch(push('/home'))
            })
        }
      })
  }
}

export const signOut = () => {
  return async (dispatch: any) => {
    auth.signOut()
      .then(() => {
        dispatch(signOutAction())
        dispatch(push('/signin'))
      })
  }
}
