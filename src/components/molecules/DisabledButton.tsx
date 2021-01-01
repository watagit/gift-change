import React from 'react'
import { Button } from 'semantic-ui-react'

type DisabledButtonProps = {
  label: string,
  fluid: boolean,
}

const DisabledButton: React.FC<DisabledButtonProps> = ({
  label,
  fluid,
}) => {
  return <Button disabled fluid={fluid}>{label}</Button>
}

export default DisabledButton
