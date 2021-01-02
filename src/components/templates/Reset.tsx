import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Container,
  Form,
  Header,
  Input,
  Segment
} from 'semantic-ui-react'

import { resetPassword } from '../../reducks/users/operations'
import GlobalMenu from '../organisms/GlobalMenu'
import PrimaryButton from '../molecules/PrimaryButton'

const Reset: React.FC = () => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')

  const inputEmail = useCallback((event: any) => {
    setEmail(event.target.value)
  }, [setEmail])

  return (
    <div>
      <Container>
        <GlobalMenu />
      </Container>
      <br/>
      <Container text>
        <Header as={'h1'} textAlign={'center'}>
          Sign in
        </Header>
        <br/>
        <Form>
          <Segment>
            <Form.Field>
              <label>メールアドレス</label>
              <Input placeholder={'email'} type={'email'} icon={'mail outline'} iconPosition={'left'} onChange={inputEmail} />
            </Form.Field>
            <PrimaryButton  label={'Sign in'} fluid={false} onClick={() => dispatch(resetPassword(email))} />
          </Segment>
        </Form>
      </Container>
    </div>
  )
}

export default Reset
