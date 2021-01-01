import React from 'react'
import { Button } from 'semantic-ui-react'

type PrimaryButtonProps = {
  label: string,
  size?: 'small' | 'medium' | 'large',
  style?: any,
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  size,
  style,
}) => {
  return (
    <Button
      primary
      size={size}
      style={style}
    >
      {label}
    </Button>
  )
}

export default PrimaryButton
