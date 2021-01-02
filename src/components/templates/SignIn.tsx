import React, { useCallback, useState } from 'react'
import { Container, Form, Input } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'

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
      <Container text>
        <Form>
          <Form.Field>
            <label>メールアドレス</label>
            <Input placeholder={'email'} type={'email'} icon={'mail outline'} iconPosition={'left'} onChange={inputEmail} />
          </Form.Field>
          <Form.Field>
            <label>パスワード</label>
            <Input placeholder={'password'} type={'password'} icon={'key'} iconPosition={'left'} onChange={inputPassword} />
          </Form.Field>
          <br />
          <PrimaryButton  label={'Sign in'} fluid={true} onClick={() => dispatch(signIn(email, password))} />
        </Form>
      </Container>
    </div>
  )
}

export default SignIn
