import React from 'react'
import './NotFoundPage.css'
import Navbar from '../../common/components/MainContainer/components/LoginPage/components/Navbar/Navbar'

const Error = () => (
  <div>
    <div className='Error-message'>
      <Navbar />
      <p> Not found page error 404 </p>
      <p>Oooops... something is wrong...</p>
    </div>
  </div>
)

export default Error
