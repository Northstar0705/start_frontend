import React from 'react'
import logo from '../assets/logo.svg'
const Loader = () => {
  return (
    <div className='flex w-screen h-screen justify-center items-center'>
        <img src={logo} alt="logo" className='w-20 h-20 animate-spin' />
    </div>
  )
}

export default Loader