import React, { useState } from 'react'
import {Button, Container, Form} from 'semantic-ui-react'

import GlobalMenu from '../organisms/GlobalMenu'
import DisabledButton from '../molecules/DisabledButton'

const Home: React.FC = () => {
  const [url, setUrl] = useState<string>('')
  const [amount, setAmount] = useState<number>()

  const handleUrlChange = (event: any) => {
    setUrl(event.target.value)
  }

  const handleAmountChange = (event: any) => {
    setAmount(event.target.value)
  }

  const handleSubmit = () => {
    console.log('url:', url, 'amount:', amount)
  }

  const RenderSubmitButton = () => {
    if (url === '' || amount === 0 || amount === undefined) {
      return <DisabledButton label={'submit'} fluid={true} />
    } else {
      return (
        <Button
          type={'submit'}
          color={'blue'}
          fluid={true}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      )
    }
  }

  return (
    <div>
      <Container>
        <GlobalMenu />
      </Container>
      <br />
      <br />
      <Container text>
        <Form>
          <Form.Field>
            <label>ほしいのもリストURL</label>
            <input
              value={url}
              placeholder={'https://www.amazon.jp/hz/wishlist/...'}
              onChange={handleUrlChange}
            />
          </Form.Field>
          <Form.Field>
            <label>金額</label>
            <input
              value={amount}
              placeholder={'金額を入力してください'}
              onChange={handleAmountChange}
            />
          </Form.Field>
          <br />
          <RenderSubmitButton />
        </Form>
      </Container>
    </div>
  )
}

export default Home
