import React from 'react'
import { Container } from 'semantic-ui-react'

import GlobalMenu from '../organisms/GlobalMenu'
import PrimaryButton from '../molecules/PrimaryButton'
import SecondaryButton from '../molecules/SecondaryButton'

const Top: React.FC = () => {
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
    </Container>
  )
}

export default Top
