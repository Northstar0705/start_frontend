import React from 'react';
import logo from '../assets/logo.svg'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router';

const Navbar = ({ path }) => {
  const navigate = useNavigate();
  return (
    <div className='flex justify-between py-4 px-20 shadow-sm'>
      <div className='container w-max flex'>
        <img src={logo} alt="logo" style={{ width: '44px', height: '44px' }} />
      </div>
      <div className='flex items-center gap-10 '>
        <div className='flex gap-1 items-center cursor-pointer'>
          <h1 className='text-[#363F54] font-bold'>Find a mentor</h1>
          <ArrowDropDownIcon sx={{ color: '#00D1B2' }} />
        </div>
        {path !== 'mentor' &&
          <div className='flex gap-1 text-[#363F54] items-center cursor-pointer font-bold' onClick={() => { navigate('/mentor') }}>Become a mentor</div>
        }
        {path !== 'mentor' ? <h1 className='text-[#363F54] font-bold cursor-pointer'>Book a session</h1> : <div className='bg-[#DEF7EC] p-2 rounded-md cursor-pointer'>
          <span className='text-[#057A55] font-bold font-sans' onClick={() => { }}>Browse all Mentors</span>
        </div>}
        {path !== 'mentor' && <div className='bg-[#DEF7EC] p-2 rounded-md cursor-pointer'>
          <span className='text-[#057A55] font-semibold font-sans' onClick={() => { navigate("/signup") }}>Getting Started</span>
        </div>}
        <h1 className='text-[#363F54] font-bold cursor-pointer' onClick={() => { navigate("/login") }}>Login</h1>
      </div>
    </div>
  )
}

export default Navbar