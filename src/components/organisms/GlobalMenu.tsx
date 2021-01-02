import React from 'react'
import { Menu } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { push } from 'connected-react-router'

import { UserProps } from '../../reducks/users/types'
import { signOut } from '../../reducks/users/operations'
import { getIsSignedIn } from '../../reducks/users/selectors'
import PrimaryButton from '../molecules/PrimaryButton'
import SecondaryButton from '../molecules/SecondaryButton'

const GlobalMenu: React.FC = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state: UserProps) => state)
  const isSignedIn = getIsSignedIn(selector)
  
  if (isSignedIn) {
    return (
      <div>
        <Menu borderless={true} secondary={true}>
          <Menu.Item position={'left'} header>
            <a style={{ color: 'black' }} href={'/'}>ぎふちぇん！</a>
          </Menu.Item>
          <Menu.Item position={'right'}>
            <SecondaryButton
              label={'Sign out'}
              fluid={false}
              onClick={() => dispatch(signOut())}
            />
          </Menu.Item>
        </Menu>
      </div>
    )
  } else {
    return (
      <div>
        <Menu borderless={true} secondary={true}>
          <Menu.Item position={'left'} header>
            <a style={{ color: 'black' }} href={'/'}>ぎふちぇん！</a>
          </Menu.Item>
          <Menu.Item position={'right'}>
            <PrimaryButton
              label={'Sign up'}
              fluid={false}
              style={{ marginRight: '0.5em' }}
              onClick={() => dispatch(push('/signup'))}
            />
            <SecondaryButton
              label={'Sign in'}
              fluid={false}
              onClick={() => dispatch(push('/signin'))}
            />
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default GlobalMenu
