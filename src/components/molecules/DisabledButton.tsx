import React from 'react'
import { Button } from 'semantic-ui-react'

const DisabledButton: React.FC<{ label: string }> = ({ label }) => {
  return <Button disabled>{label}</Button>
}

export default DisabledButton
