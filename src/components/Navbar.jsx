import React from 'react';
import logo from '../assets/logo.svg'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
  return (
    <div>
      <div className='bg-[#F9FAFB] justify-around flex p-4 shadow-sm'>
        <div className='container w-1/2 flex justify-center'>
          <img src={logo} alt="logo" style={{ width: '44px', height: '44px' }} />
        </div>
        <div className='w-full flex items-center justify-evenly'>
          <div className='flex gap-1 items-center cursor-pointer'>
            <h1 className='text-[#363F54] font-bold'>Find a mentor</h1>
            <ArrowDropDownIcon sx={{ color: '#00D1B2' }} />
          </div>
          <div className='flex gap-1 items-center cursor-pointer'>
            <h1 className='text-[#363F54] font-bold'>For Businesses</h1>
            <ArrowDropDownIcon sx={{ color: '#00D1B2' }} />
          </div>
          <h1 className='text-[#363F54] font-bold cursor-pointer'>Book a session</h1>
          <div className='bg-[#DEF7EC] p-2 rounded-md cursor-pointer'> 
            <span className='text-[#057A55] font-semibold font-sans'>Getting Started</span>
          </div>
          <h1 className='text-[#363F54] font-bold cursor-pointer'>Login</h1>
        </div>
      </div>
    </div>
  )
}

export default Navbar