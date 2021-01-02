import React from 'react'
import { Container } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

import { getUserId } from '../../reducks/users/selectors'
import GlobalMenu from '../organisms/GlobalMenu'
import PrimaryButton from '../molecules/PrimaryButton'
import SecondaryButton from '../molecules/SecondaryButton'
import {UserProps} from '../../reducks/users/types'

const Top: React.FC = () => {
  const selector = useSelector((state: UserProps) => state)
  const uid = getUserId(selector)

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
        <p>{uid}</p>
      </div>
    </Container>
  )
}

export default Top
