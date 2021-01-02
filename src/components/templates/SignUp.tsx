import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Container,
  Form,
  Header,
  Input,
  Segment,
  Message
} from 'semantic-ui-react'

import { signUp } from '../../reducks/users/operations'
import GlobalMenu from '../organisms/GlobalMenu'
import PrimaryButton from '../molecules/PrimaryButton'

const SignUp: React.FC = () => {
  const dispatch = useDispatch()
  
  const [username, setUsername] = useState(''),
        [email, setEmail] = useState(''),
        [password, setPassword] = useState(''),
        [confirmPassword, setConfirmPassword] = useState('')

  const inputUsername = useCallback((event: any) => {
    setUsername(event.target.value)
  }, [setUsername])

  const inputEmail = useCallback((event: any) => {
    setEmail(event.target.value)
  }, [setEmail])

  const inputPassword = useCallback((event: any) => {
    setPassword(event.target.value)
  }, [setPassword])

  const inputConfirmPassword = useCallback((event: any) => {
    setConfirmPassword(event.target.value)
  }, [setConfirmPassword])

  return (
    <div>
      <Container>
        <GlobalMenu />
      </Container>
      <br/>
      <Container text>
        <Header as={'h1'} textAlign={'center'}>
          Sign up
        </Header>
        <br/>
        <Form>
          <Segment>
            <Form.Field>
              <label>ユーザ名</label>
              <Input placeholder={'username'} type={'text'} icon={'user outline'} iconPosition={'left'} onChange={inputUsername} />
            </Form.Field>
            <Form.Field>
              <label>メールアドレス</label>
              <Input placeholder={'email'} type={'email'} icon={'mail outline'} iconPosition={'left'} onChange={inputEmail} />
            </Form.Field>
            <Form.Field>
              <label>パスワード</label>
              <Input placeholder={'password'} type={'password'} icon={'key'} iconPosition={'left'} onChange={inputPassword} />
            </Form.Field>
            <Form.Field>
              <label>パスワード（確認用）</label>
              <Input placeholder={'confirmation password'} type={'password'} icon={'key'} iconPosition={'left'} onChange={inputConfirmPassword} />
            </Form.Field>
            <PrimaryButton
              label={'Sign up'}
              fluid={false}
              onClick={() => dispatch(signUp(username, email, password, confirmPassword))}
            />
          </Segment>
        </Form>
        <Message attached='bottom'>
          アカウントをお持ちの方は&nbsp;<a href='/signin'>こちら</a>&nbsp;
        </Message>
      </Container>
    </div>
  )
}

export default SignUp
