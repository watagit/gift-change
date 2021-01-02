import React from 'react'
import { Button } from 'semantic-ui-react'

type PrimaryButtonProps = {
  label: string,
  size?: 'small' | 'medium' | 'large',
  style?: any,
  fluid: boolean,
  onClick: () => void
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  size,
  style,
  fluid,
  onClick,
}) => {
  return (
    <Button
      primary
      size={size}
      style={style}
      fluid={fluid}
      onClick={onClick}
    >
      {label}
    </Button>
  )
}

export default PrimaryButton
