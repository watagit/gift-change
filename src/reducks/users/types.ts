export type User = {
  isSignedIn: boolean,
  uid: string,
  username: string
}

export interface UserProps {
  users: User
}
