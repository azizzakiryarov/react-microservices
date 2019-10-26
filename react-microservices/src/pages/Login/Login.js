import React from 'react'
import LoginPage from '../../common/components/MainContainer/components/LoginPage/LoginPage'
import Navbar from '../../common/components/MainContainer/components/LoginPage/components/Navbar/Navbar'

const Login = () => (
  <div>
    <div className='login-page'>
      <Navbar />
      <LoginPage />
    </div>
  </div>
)

export default Login
