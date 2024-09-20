import React from 'react'
import { useLogin } from '../hooks/useLogin'

const Profile = () => {
    const username = useLogin();
  return (
    <div>
      UUSERNAME : {username}
    </div>
  )
}

export default Profile
