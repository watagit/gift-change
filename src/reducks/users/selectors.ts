import { createSelector } from 'reselect'
import { UserProps } from './types'

const usersSelector = (state: UserProps) => state.users

export const getUserId = createSelector(
  [usersSelector],
  state => state.uid
)

export const getUsername = createSelector(
  [usersSelector],
  state => state.username
)
