import React from 'react'
import EmailActivation from '../../../components/Auth/EmailActivation';
import { useRouter } from 'next/router';


const CompleteEmailActivation = ()=> {
    const router = useRouter();
  return (
      <EmailActivation token={ router.query.token } />
  )
}

export default CompleteEmailActivation