import React from 'react'
import { Input } from 'semantic-ui-react'

const TextField: React.FC<{ placeholder: string }> = ({ placeholder }) => {
  return <Input placeholder={placeholder} />
}

export default TextField
