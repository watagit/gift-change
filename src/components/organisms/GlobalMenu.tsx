import React from 'react'
import { Menu } from 'semantic-ui-react'

const GlobalMenu: React.FC = ({ children }) => {
  return (
    <div>
      <Menu brderless secondary>
        <Menu.Item position={'left'} header>
          ぎふちぇん！
        </Menu.Item>
        <Menu.Item position={'right'}>
          {children}
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default GlobalMenu
