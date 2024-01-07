import React from 'react'
import Navbar from '../components/Navbar'
import { Button } from '@mui/material'

const Inquiries = () => {
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
                <h1 className='text-[20px] font-semibold text-[#111827]'>Inquiries</h1>
                <div className='border-[#4A4A4A] border-[1px] flex flex-col p-5 rounded-md gap-3 w-full justify-center items-center'>
                    <svg class="mx-auto w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg> 
                    <span className='text-gray-900 font-medium text-sm'>No inquiries</span>
                    <span className='text-gray-500 text-sm font-medium'>Once you've message a mentor, they will show up here! </span>
                    <Button variant='contained' sx={{ background: "#1C3D7A", color: "#ffffff", textTransform: "capitalize", padding: "8px 18px", ":hover": { background: "#1C3D7A" }, fontWeight: "500", fontSize: "16px", }}>Find mentors</Button>
                </div>
            </div>
        </div>
    )
}

export default Inquiries