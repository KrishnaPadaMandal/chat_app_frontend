import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'

const SignUpPage = () => {
  const [isPassword,showPassword] = useState(false)
  const [formData,SetFormData] = useState({
    full_name:"",
    email:"",
    password:""
  })
  const {signup,isSigningUp} = useAuthStore()
  const validationFrom = () =>{}
  const handleSubmit = ()=>{}
  return (
    <div className='min-h-screen grid lg:grid-col-2'>
      <div className='flex flex-col justify-center item-center p-6 sm:p-12'>

      </div>
      
    </div>
  )
}

export default SignUpPage
