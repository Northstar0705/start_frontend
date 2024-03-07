import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
  
const AdminNavbar = () => {
    const [notification, setNotification] = useState(false)
    const [clicked, setClicked] = useState(false)
    const hasProfile = false
    return (
        <div className='flex justify-between w-full shadow-lg p-2 py-0 h-[8vh]'>
            {/* left */}
            <div className='flex gap-2 items-center'>
                <img src={logo} alt="" width={'35px'} height={'35px'} />
                <div className='text-2xl text-[#172e59] font-bold'>North<span className='text-[#118557]'>Star</span></div>
            </div>
            {/* right */}
            <div className='flex gap-5 items-center'>
                <div className='cursor-pointer' onClick={() => setNotification(!notification)}>
                    {notification && <NotificationsIcon sx={{ color: '#172e59' }} />}
                    {!notification && <NotificationsNoneIcon sx={{ color: '#172e59' }} />}
                </div>
                <div>
                    <div className='w-8 h-8 rounded-full flex relative items-center justify-center'>
                        <div onClick={() => setClicked(!clicked)}>
                            {hasProfile && <img src={"https://t.ly/1B6fF"} alt="" className='w-8 h-8 rounded-full' />}
                            {!hasProfile && <div className='w-9 h-9 rounded-full bg-[#172e59] flex justify-center text-center items-center text-white text-xl cursor-pointer'>A</div>}
                        </div>
                        {clicked && <div className='absolute flex gap-2 -bottom-11 right-0 w-max h-max text-white rounded-md bg-[#118577] cursor-pointer p-2 shadow-lg'>
                            <LogoutIcon  />
                            <div className='font-medium'>Log Out</div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminNavbar