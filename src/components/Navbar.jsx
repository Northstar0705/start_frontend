import React, { useState } from 'react';
import logo from '../assets/logo1.svg'
import logo1 from '../assets/logo.svg'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router';
import { Avatar } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = ({ path, loggedIn }) => {
  const navigate = useNavigate();
  const [opendrop, setOpendrop] = useState(false);
  return (
    <div>
      {!loggedIn && <div className='flex justify-between py-4 px-20 shadow-sm'>
        <div className='container w-max flex  '>
          <img src={logo1} alt="logo" style={{ width: '36px', height: '36px' }} />
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
      </div>}
      {loggedIn &&
        <div className='px-20 py-4 flex justify-between items-center shadow-md'>
          <div className='flex items-center gap-5'>
            <div className='bg-[#21A391] p-1 rounded-full'>
              <img src={logo} alt="logo" style={{ width: '30px', height: '30px' }} />
            </div>
            <div className='flex gap-5 text-white font-semibold text-base'>
              <span className='cursor-pointer'>Mentors</span>
              <span className='cursor-pointer'>Applications</span>
              <span className='cursor-pointer'>Inquiries</span>
              <span className='cursor-pointer'>Wishlist</span>
              <span className='cursor-pointer'>Settings</span>
            </div>
          </div>
          <div className='flex gap-5 items-center'>
            <span className='text-white text-base font-semibold '>Browse Mentors</span>
            <div className='flex items-center relative cursor-pointer' onClick={() => { setOpendrop(!opendrop) }}>
              <Avatar sx={{ width: 40, height: 40 }}>H</Avatar>
              <KeyboardArrowDownIcon sx={{ color: '#ffffff' }} />
              {opendrop &&
                <div className='bg-white px-5 py-1 absolute top-12 right-3 rounded-md z-20 shadow-md flex flex-col gap-3'>
                  <div className='flex flex-col'>
                    <span className='text-gray-700 font-normal'>Signed in as</span>
                    <span className='text-gray-700 font-bold'>ayushraj0607@gmail.com</span>
                  </div>
                  <span className='text-rose-500 font-normal cursor-pointer'>Sign Out</span>

                </div>
              }
            </div>


          </div>

        </div>
      }
    </div>
  )
}

export default Navbar