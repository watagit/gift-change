import React from 'react'
import { Button } from 'semantic-ui-react'

type SecondaryButtonProps = {
  label: string,
  size?: 'small' | 'medium' | 'large',
  style?: any,
  fluid: boolean,
  onClick: () => void
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  label,
  size,
  style,
  fluid,
  onClick
}) => {
  return (
    <Button
      basic
      size={size}
      style={style}
      fluid={fluid}
      color={'blue'}
      onClick={onClick}
    >
      {label}</Button>
  )
}

export default SecondaryButton
