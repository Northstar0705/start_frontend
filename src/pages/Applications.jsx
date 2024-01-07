import React from 'react'
import Navbar from '../components/Navbar'
import { Button } from '@mui/material'

const Applications = () => {
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
                <h1 className='text-[20px] font-semibold text-[#111827]'>Applications</h1>
                <div className='border-[#4A4A4A] border-[1px] flex flex-col p-5 rounded-md gap-3 w-full justify-center items-center'>
                    <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    <span className='text-gray-900 font-medium text-sm'>No active applications</span>
                    <span className='text-gray-500 text-sm font-medium'>Once you've applied to a mentor, they will show up here! </span>
                    <Button variant='contained'  sx={{ background: "#1C3D7A", color: "#ffffff", textTransform: "capitalize",padding:"8px 18px", ":hover": { background: "#1C3D7A" },fontWeight:"500",fontSize:"16px", }}>Find mentors</Button>
                </div>
            </div>
        </div>
    )
}

export default Applications