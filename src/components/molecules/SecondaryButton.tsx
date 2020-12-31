import React from 'react'
import { Button } from 'semantic-ui-react'

const SecondaryButton: React.FC<{ label: string }> = ({ label }) => {
  return <Button basic color={'blue'}>{label}</Button>
}

export default SecondaryButton
