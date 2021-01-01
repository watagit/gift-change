import React from 'react'
import { Input } from 'semantic-ui-react'

type TextFieldProps = {
  placeholder: string,
  icon: string,
}

const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  icon,
}) => {
  return (
    <Input
      icon={icon}
      iconPosition={'left'}
      placeholder={placeholder}
    />
  )
}

export default TextField
