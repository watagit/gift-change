import React from 'react'
import { Container } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

import { getUserId, getUsername } from '../../reducks/users/selectors'
import GlobalMenu from '../organisms/GlobalMenu'
import PrimaryButton from '../molecules/PrimaryButton'
import SecondaryButton from '../molecules/SecondaryButton'
import {UserProps} from '../../reducks/users/types'

const Top: React.FC = () => {
  const selector = useSelector((state: UserProps) => state)
  const uid = getUserId(selector)
  const username = getUsername(selector)

  return (
    <Container>
      <GlobalMenu>
        <PrimaryButton
          label={'Sign up'}
          size={'medium'}
          style={{ marginRight: '0.5em' }}
        />
        <SecondaryButton label={'Log in'} />
      </GlobalMenu>
      <div>
        <p>ユーザID：{uid}</p>
        <p>ユーザ名：{username}</p>
      </div>
    </Container>
  )
}

export default Top
