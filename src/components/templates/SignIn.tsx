import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Container,
  Form,
  Header,
  Input,
  Message,
  Segment
} from 'semantic-ui-react'

import { signIn } from '../../reducks/users/operations'
import GlobalMenu from '../organisms/GlobalMenu'
import PrimaryButton from '../molecules/PrimaryButton'

const SignIn: React.FC = () => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState(''),
    [password, setPassword] = useState('')

  const inputEmail = useCallback((event: any) => {
    setEmail(event.target.value)
  }, [setEmail])

  const inputPassword = useCallback((event: any) => {
    setPassword(event.target.value)
  }, [setPassword])

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
            <Form.Field>
              <label>パスワード</label>
              <Input placeholder={'password'} type={'password'} icon={'key'} iconPosition={'left'} onChange={inputPassword} />
            </Form.Field>
            <PrimaryButton  label={'Sign in'} fluid={false} onClick={() => dispatch(signIn(email, password))} />
          </Segment>
        </Form>
        <Message attached='bottom'>
          登録がお済みでない方は&nbsp;<a href='/signup'>こちら</a>&nbsp;
        </Message>
      </Container>
    </div>
  )
}

export default SignIn
