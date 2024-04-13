import React, { useEffect, useState } from 'react';
import logo from '../assets/logo1.svg'
import logo1 from '../assets/logo.svg'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router';
import { Avatar } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import axios from 'axios';

const Navbar = ({ path, loggedIn, user, setUser, setLoading }) => {
  const [opendrop, setOpendrop] = useState(false);
  
  const handleLogOut = async () => {
    try {
      await axios.get('/api/auth/logout');
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  }
  
  const navigate = useNavigate();
  const [initial,setInitial] = useState(true)
  useEffect(()=>{
    const getUser = async () => {
      try{
        const {data} = await axios.get(`/api/${path==="mentor"?"mentor":"mentee"}`,{withCredentials:true})
        console.log(data)
        setUser(data)
        setLoading(false)
      }catch(err){
        console.log(err)
        if(err.response.data.errorMessage === "Please login first"){
          navigate('/login')
        }
      }
    }
    if(initial && loggedIn){
      getUser()
      setInitial(false)
    }
  },[navigate,setUser,initial,loggedIn,path,setLoading])

  return (
    <div>
      {path === 'browse' && <div className='flex justify-between py-4 px-20 shadow-sm'>
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
          {!loggedIn && <div className='bg-[#DEF7EC] p-2 rounded-md cursor-pointer'>
            <span className='text-[#057A55] font-semibold font-sans' onClick={() => { navigate("/signup") }}>Getting Started</span>
          </div>}
          {!loggedIn ? <h1 className='text-[#363F54] font-bold cursor-pointer' onClick={() => { navigate("/login") }}>Login</h1>
            : <h1 className='text-[#363F54] font-bold cursor-pointer' onClick={() => { navigate("/login") }}>Logout</h1>}
        </div>
      </div>}
      {(!loggedIn && path !== 'browse') && <div className='flex justify-between py-4 px-20 shadow-sm'>
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
          {path !== 'mentor' && <div className='bg-[#DEF7EC] p-2 rounded-md cursor-pointer'>
            <span className='text-[#057A55] font-semibold font-sans' onClick={() => { navigate("/signup") }}>Getting Started</span>
          </div>}
          <h1 className='text-[#363F54] font-bold cursor-pointer' onClick={() => { navigate("/login") }}>Login</h1>
        </div>
      </div>}
      {(loggedIn && path !== 'browse') &&
        <div className={`${path === "mentor" ? "px-2" : "px-20"} py-1 flex justify-between items-center shadow-md`}>
          <div className='flex items-center gap-5'>
            {path === "mentor" ? <div className='flex items-center gap-2'>
              <img src={logo1} alt="logo" style={{ width: '30px', height: '30px' }} />
              <div className='text-2xl text-[#172e59] font-bold'>North<span className='text-[#118557]'>Star</span></div>
            </div> : <div className='bg-[#21A391] p-1 rounded-full'>
              <img src={logo} alt="logo" style={{ width: '30px', height: '30px' }} />
            </div>}
            {path !== "mentor" && <div className='flex gap-5 text-white font-semibold text-base'>
              <span className={`cursor-pointer rounded-md px-2 py-1.5 ${path === 'home' ? "bg-[#224f9c]" : ""}`} onClick={() => { navigate('/mentee/home') }}>Home</span>
              <span className={`cursor-pointer rounded-md px-2 py-1.5 ${path === 'application' ? "bg-[#224f9c]" : ""}`} onClick={() => { navigate('/mentee/application') }}>Applications</span>
              <span className={`cursor-pointer rounded-md px-2 py-1.5 ${path === 'inquiries' ? "bg-[#224f9c]" : ""}`} onClick={() => { navigate('/mentee/inquiries') }}>Inquiries</span>
              <span className={`cursor-pointer rounded-md px-2 py-1.5 ${path === 'wishlist' ? "bg-[#224f9c]" : ""}`} onClick={() => { navigate('/mentee/wishlist') }}>Wishlist</span>
              <span className={`cursor-pointer rounded-md px-2 py-1.5 ${path === 'settings' ? "bg-[#224f9c]" : ""}`} onClick={() => navigate('/mentee/settings')}>Settings</span>
            </div>}
          </div>
          {path === "mentor" && <div className='text-2xl'>Welcome {user?.firstName}</div>}
          <div className='flex gap-5 items-center'>
            {path !== "mentor" && <span className='text-white text-base font-semibold '>Browse Mentors</span>}
            <div className='flex items-center relative cursor-pointer' onClick={() => { setOpendrop(!opendrop) }}>
              <Avatar src={user?.profilePicture} sx={{ width: 40, height: 40, background:path==="mentor"?"#172e59":"" }}>{user?.firstName?.slice(0,1)}</Avatar>
              {path !== "mentor" && <>
                <KeyboardArrowDownIcon sx={{ color: '#ffffff' }} />
                {opendrop &&
                  <div className='bg-white px-5 py-1 absolute top-12 right-3 rounded-md z-20 shadow-md flex flex-col gap-3 w-max'>
                    <div className='flex flex-col'>
                      <span className='text-gray-700 font-normal'>Signed in as</span>
                      <span className='text-gray-700 font-bold'>{user?.email}</span>
                    </div>
                    <span onClick={handleLogOut} className='text-rose-500 font-normal cursor-pointer'>Sign Out</span>
                  </div>
                }</>}
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Navbar