import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { Button } from '@mui/material'
import profile from '../../assets/profile.png'
import google from '../../assets/google.svg'
import microsoft from '../../assets/microsoft.svg'
import amazon from '../../assets/amazon.svg'
import netflix from '../../assets/netflix.svg'
import airbnb from '../../assets/airbnb.svg'
import Footer from '../../components/Footer'

const Mentor = () => {
    return (
        <div className='flex flex-col'>
            <div className='h-screen' style={{ background: "linear-gradient(144.88deg, rgba(255, 255, 255, 0.3) -3.98%, rgba(75, 173, 239, 0.2) 21.27%, rgba(0, 183, 155, 0.6) 71.28%)" }}>
                <Navbar path={"mentor"} />
                <div className='flex flex-col'>
                    <div className='pt-20 text-[#111827] font-bold text-[60px] text-center tracking-tight leading-[4rem]'>
                        Share your expertise, grow,
                        <br />
                        <span className='text-[#172E59] text-[60px] text-center font-bold'>make a difference</span>
                    </div>
                    <div className='flex flex-col items-center mt-3 gap-3'>
                        <span className='text-gray-700 text-[20px] text-center'>Mentoring is a two-way street. Let us take care of the boring parts so you can <br /> concentrate on personal and professional growth for both you and your mentees.</span>
                        <Button variant='contained' sx={{ background: "#1C3D7A", fontWeight: "bold", textTransform: "capitalize", padding: "8px 28px", fontSize: "16px", ":hover": { background: "#1C3D7A" } }}>Become a Mentor</Button>
                    </div>
                </div>
            </div>
            <div className='bg-[#1F2937] h-[120vh]'>
                <div className='absolute top-[26rem] p-32 z-0'>
                    <img src={profile} alt="profile" style={{ borderRadius: "10px" }} />
                    <div className='flex flex-col items-center mt-10 gap-5'>
                        <span className='text-gray-400 font-semibold text-base'>JOIN AN AMBITIOUS NETWORK OF EDUCATORS AND LEADERS</span>
                        <div className='flex flex-wrap justify-between items-center w-[70%]' >
                           <img src={google} alt="google" />
                           <img src={microsoft} alt="microsoft"  />
                           <img src={amazon} alt="amazon" style={{width:"108px",height:"44px",marginTop:'15px'}}/>
                           <img src={airbnb} alt="airbnb" style={{width:"108px",height:"44px"}}/>
                           <img src={netflix} alt="netflix" style={{width:"108px",height:"44px"}} />
                        </div>
                        <div className='flex flex-col text-center gap-3'>
                            <h1 className='text-3xl text-center font-bold text-gray-200 tracking-tight'>The amazing things that mentoring can do for you</h1>
                            <span className='text-center text-gray-300 text-base font-semibold'>Managers, executives and leaders agree that mentoring is one of the most <br/> impactful ways to spend your time. In return, you're building crucial leadership<br/> qualities</span>
                        </div> 
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Mentor