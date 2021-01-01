import React from 'react'
import { Input } from 'semantic-ui-react'

type TextFieldProps = {
  placeholder: string,
  icon: string,
  fluid?: boolean,
}

const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  icon,
  fluid
}) => {
  return (
    <Input
      icon={icon}
      placeholder={placeholder}
      fluid={fluid}
      iconPosition={'left'}
    />
  )
}

export default TextField
