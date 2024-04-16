import React from 'react'
import logo from '../assets/logo.svg'
const Loader = () => {
  return (
    <div className='flex absolute w-full h-full justify-center items-center'>
        <img src={logo} alt="logo" className='w-20 h-20 animate-spin' />
    </div>
  )
}

export default Loader