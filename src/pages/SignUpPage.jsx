import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'

const SignUpPage = () => {
  const [formData,SetFormData] = useState({
    full_name:"",
    email:"",
    password:""
  })
  const {signup,isSigningUp} = useAuthStore()
  const validationFrom = () =>{}
  const handleSubmit = ()=>{}
  return (
    <div>
      <h1>Sign-up page component</h1>
    </div>
  )
}

export default SignUpPage
