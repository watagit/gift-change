export type User = {
  icon: string,
  isSignedIn: boolean,
  uid: string,
  username: string
}

export interface UserProps {
  users: User
}
