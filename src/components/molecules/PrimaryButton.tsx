import React from 'react'
import { Button } from 'semantic-ui-react'

const PrimaryButton: React.FC<{ label: string }> = ({ label }) => {
  return (
    <Button primary>
      {label}
    </Button>
  )
}

export default PrimaryButton
