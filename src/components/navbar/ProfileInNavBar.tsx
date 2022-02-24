import { Button } from '@mui/material'
import React from 'react'


interface navProfileProps {
  first_name: string,
  last_name: string
}

const ProfileInNavBar = (input: navProfileProps) => {
  return (
    <Button color="secondary" variant="contained">
     ${input.first_name} + " " + ${input.last_name}
    </Button>
  )
}

export default ProfileInNavBar