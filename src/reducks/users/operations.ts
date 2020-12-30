import { signInAction, signOutAction } from './actions'
import { push } from 'connected-react-router'
import { db, auth, FirebaseTimestamp } from '../../firebase'

export const listenAuthState = () => {
  return async (dispatch: any) => {
    return auth.onAuthStateChanged(user => {
      if (user) {
        const uid = user.uid

        db.collection('users').doc(uid).get()
          .then(snapshot => {
            const data = snapshot.data()

            dispatch(signInAction({
              isSignedIn: true,
              role: data.role,
              uid: uid,
              username: data.username
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
          alert('入力されたアドレスにパスワードリセット用のメールをお送りしました')
          dispatch(push('/signin'))
        }).catch(() => {
          alert('パスワードリセットに失敗しました。通信環境を確認してください')
      })
    }
  }
}

export const signIn = (email?: string, password?: string) => {
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
              const data = snapshot.data()

              dispatch(signInAction({
                isSignedIn: true,
                uid: uid,
                username: data.username
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
            created_at: timestamp,
            email: email,
            uid: uid,
            update_at: timestamp,
            username: username
          }

          db.collection('users').doc(uid).set(userInitialData)
            .then(() => {
              dispatch(push('/'))
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
        dispatch(push('/'))
      })
  }
}
