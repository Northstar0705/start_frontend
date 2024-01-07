import React from 'react'
import Navbar from '../components/Navbar'
import { Button } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='bg-[#172E59] '>
                <Navbar loggedIn={true} className='shadow-md' />
                <div className='bg-[#21A391] flex justify-center px-2 py-3 gap-1'>
                    <span className='text-white font-semibold text-base'>👀 Want to double the chance of success for your applications?</span>
                    <span className='text-white font-bold underline text-base cursor-pointer'>Complete your profile →</span>
                </div>
            </div>
            <div className='flex flex-col px-28 py-14 gap-5'>
                <h1 className='text-[20px] font-semibold text-[#111827]'>Wishlist</h1>
                <div className='border-[#4A4A4A] border-[1px] border-dashed flex flex-col p-5 rounded-md gap-3 max-w-[396px] h-[196px] justify-center items-center' onClick={()=>{navigate('/mentor/browse')}}>
                    <AddCircleOutlineIcon sx={{ color: "#4A4A4A", width: "30px", height: "30px", cursor: "pointer" }} />
                    <span className='text-gray-900 font-medium text-sm cursor-pointer'>Find more mentors</span>
                </div>
            </div>
        </div>
    )
}

export default Wishlist