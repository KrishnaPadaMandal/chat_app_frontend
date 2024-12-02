import React, { useEffect } from 'react';

import {Routes,Route, Navigate} from 'react-router-dom'

import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import SettingPage from './pages/SettingPage';
import Profile from './pages/Profile'
import { useAuthStore } from './store/useAuthStore';
import {Loader} from "lucide-react"
const App = () => {

  const {authUser, checkAuth,isCheckingAuth} = useAuthStore()
  useEffect(()=>{
    console.log("Use auth")
    checkAuth()
  },[checkAuth])

  if(!isCheckingAuth && authUser)
    return (
  <div className='flex items-center justify-center h-screen'>
    <Loader className = "size-10 animate-spin"  />
  </div>
  )
  return (
    <div>

      <Routes>
        <Route  path='/' element={authUser ? <HomePage />:<Navigate to="/login"></Navigate>} />
        <Route path='/signup' element={ ! authUser ?<SignUpPage />: <Navigate to="/"></Navigate>} />
        <Route path='/login' element={! authUser?<LoginPage />:<Navigator to="/"></Navigator>} />
        <Route path='/setting' element={<SettingPage />} />
        <Route path='/profile' element={ authUser ?<Profile />:<Navigate to='/'></Navigate>} />

      </Routes>

    </div>
  );
};

export default App;
