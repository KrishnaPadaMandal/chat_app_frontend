import React, { useState, useEffect } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { Eye, EyeOff, Lock, Mail, MessageSquare, User } from 'lucide-react';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false); 
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: ''
  });
  const { signup, isSigningUp } = useAuthStore();
  const [isPageVisible, setIsPageVisible] = useState(false);

  useEffect(() => {
    setIsPageVisible(true);
  }, []);

  const validationForm = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    validationForm(); 
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-gray-50 transition-all duration-1000 ease-in-out ${
        isPageVisible ? 'opacity-100' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className='w-full max-w-md p-8 space-y-6 bg-[#F0F8FF] rounded-xl shadow-lg'>
        <div className='text-center'>
          <div className='relative flex justify-center mb-4'>
            {isSigningUp && (
              <div className='absolute w-16 h-16 border-4 border-t-4 border-gray-300 border-solid rounded-full animate-spin'></div>
            )}
            <MessageSquare className='h-12 w-12 text-primary z-10' />
          </div>
          <h1 className='text-2xl font-semibold text-gray-800 mb-2'>Create Account</h1>
          
          {/* Text with animation (Moving Top to Bottom) */}
          <p className='text-lg font-medium text-gray-600 mt-2 animate-move-down'>
            Connect the Global
          </p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div
            className={`form-control transition-all duration-700 ${
              isPageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <label className='label'>
              <span className='label-text font-medium text-gray-700'>Full Name</span>
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <User className='h-5 w-5 text-gray-500' />
              </div>
              <input
                type='text'
                className='input input-bordered w-full pl-10 py-3 border-black focus:border-black focus:ring-2 focus:ring-black'
                placeholder='John Doe'
                value={formData.full_name}
                onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
              />
            </div>
          </div>

          <div
            className={`form-control transition-all duration-700 delay-100 ${
              isPageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <label className='label'>
              <span className='label-text font-medium text-gray-700'>Email</span>
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <Mail className='h-5 w-5 text-gray-500' />
              </div>
              <input
                type='email'
                className='input input-bordered w-full pl-10 py-3 border-black focus:border-black focus:ring-2 focus:ring-black'
                placeholder='johndoe@example.com'
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div
            className={`form-control transition-all duration-700 delay-200 ${
              isPageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <label className='label'>
              <span className='label-text font-medium text-gray-700'>Password</span>
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <Lock className='h-5 w-5 text-gray-500' />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                className='input input-bordered w-full pl-10 py-3 border-black focus:border-black focus:ring-2 focus:ring-black'
                placeholder='••••••••'
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button
                type='button'
                className='absolute inset-y-0 right-0 pr-3 flex items-center'
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className='h-5 w-5 text-gray-500' />
                ) : (
                  <Eye className='h-5 w-5 text-gray-500' />
                )}
              </button>
            </div>
          </div>

          <div
            className={`form-control transition-all duration-700 delay-300 ${
              isPageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <button
              type='submit'
              className='btn bg-primary text-white w-full py-3 mt-4 border-none hover:bg-primary-dark focus:ring-2 focus:ring-primary'
              disabled={isSigningUp}
            >
              {isSigningUp ? (
                <div className='flex justify-center items-center'>
                  <div className='animate-spin h-5 w-5 mr-3 border-t-2 border-b-2 border-gray-300 border-solid rounded-full' />
                  <span>Signing Up...</span>
                </div>
              ) : (
                'Sign Up'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
