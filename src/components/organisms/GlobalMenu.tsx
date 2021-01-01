import React from 'react'
import { Menu } from 'semantic-ui-react'

import PrimaryButton from '../molecules/PrimaryButton'
import SecondaryButton from '../molecules/SecondaryButton'

const GlobalMenu: React.FC = () => {
  return (
    <div>
      <Menu brderless secondary>
        <Menu.Item position={'left'} header>
          ぎふちぇん！
        </Menu.Item>
        <Menu.Item position={'right'}>
          <PrimaryButton
            label={'Sign up'}
            size={'medium'}
            style={{ marginRight: '0.5em' }}
          />
          <SecondaryButton label={'Log in'} />
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default GlobalMenu
