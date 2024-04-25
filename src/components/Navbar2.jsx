import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.svg'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NotificationsIcon from '@mui/icons-material/Notifications';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
  
const Navbar2 = ({user, setUser, setLoading}) => {
    const [notification, setNotification] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        const getUser = async()=>{
            try{
                const {data} = await axios.get('/api/admin',{withCredentials:true})
                setUser(data)
                setLoading(false)
            }catch(err){
                console.log(err)
                if(err.response.data.errorMessage === "Please login first"){
                    navigate('/admin/login')
                }
            }
        }
        getUser()
    },[setUser,setLoading,navigate])

    return (
        <div className='flex justify-between w-full shadow-lg p-2 h-[8vh]'>
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
                        <div>
                            {user?.image && <img src={user?.image} alt="" className='w-8 h-8 rounded-full' />}
                            {!user?.image && <div className='w-9 h-9 rounded-full bg-[#172e59] flex justify-center text-center items-center text-white text-xl cursor-pointer'>{user?.firstName[0]}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar2;