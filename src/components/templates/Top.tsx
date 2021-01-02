import React from 'react'
import { Container } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { push } from 'connected-react-router'

import { UserProps } from '../../reducks/users/types'
import { getUserId, getUsername } from '../../reducks/users/selectors'
import GlobalMenu from '../organisms/GlobalMenu'
import PrimaryButton from '../molecules/PrimaryButton'
import SecondaryButton from '../molecules/SecondaryButton'

const Top: React.FC = () => {
  const dispatch = useDispatch()
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
          fluid={false}
          onClick={() => dispatch(push('/signup'))}
        />
        <SecondaryButton
          label={'Sign in'}
          fluid={false}
          onClick={() => dispatch(push('/signin'))}
        />
      </GlobalMenu>
      <div>
        <p>ユーザID：{uid}</p>
        <p>ユーザ名：{username}</p>
      </div>
    </Container>
  )
}

export default Top
