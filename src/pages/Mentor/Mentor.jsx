import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
    const navigate = useNavigate()
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
                    <div className='flex flex-col items-center mt-3 gap-10'>
                        <span className='text-gray-700 text-[20px] text-center'>Mentoring is a two-way street. Let us take care of the boring parts so you can <br /> concentrate on personal and professional growth for both you and your mentees.</span>
                        <Button onClick={()=>navigate('/mentor/apply')} variant='contained' sx={{ background: "#1C3D7A", fontWeight: "bold", textTransform: "capitalize", padding: "8px 28px", fontSize: "16px",cursor:"pointer", ":hover": { background: "#1C3D7A" }}}>Become a Mentor</Button>
                    </div>
                </div>
            </div>
            <div className='bg-[#1F2937] h-[150vh]'>
                <div className='absolute top-[26rem] p-32 z-0'>
                    <img src={profile} alt="profile" style={{ borderRadius: "10px" }} />
                    <div className='flex flex-col items-center mt-10 gap-5'>
                        <span className='text-gray-400 font-semibold text-base'>JOIN AN AMBITIOUS NETWORK OF EDUCATORS AND LEADERS</span>
                        <div className='flex flex-wrap justify-between items-center w-[70%]' >
                            <img src={google} alt="google" />
                            <img src={microsoft} alt="microsoft" />
                            <img src={amazon} alt="amazon" style={{ width: "108px", height: "44px", marginTop: '15px' }} />
                            <img src={airbnb} alt="airbnb" style={{ width: "108px", height: "44px" }} />
                            <img src={netflix} alt="netflix" style={{ width: "108px", height: "44px" }} />
                        </div>
                        <div className='flex flex-col text-center gap-3'>
                            <h1 className='text-3xl text-center font-bold text-gray-200 tracking-tight'>The amazing things that mentoring can do for you</h1>
                            <span className='text-center text-gray-300 text-base font-semibold'>Managers, executives and leaders agree that mentoring is one of the most <br /> impactful ways to spend your time. In return, you're building crucial leadership<br /> qualities</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center gap-3 mt-7'>
                <h1 className='uppercase text-xl font-semibold text-[#172E59]'>Mentoring On NorthStar</h1>
                <span className='text-4xl leading-10 font-bold text-center text-gray-900'>Let's hit the ground running, we're here <br /> to support you</span>
                <span className='text-gray-500 text-2xl text-center'>Partnering with NorthStar means you won't have to take care of <br /> anything other than what you care about most.</span>
                <div className='flex flex-wrap gap-5 items-center justify-center'>
                    <div className='flex gap-3 items-start w-[592px]'>
                        <div className='bg-[#172E59] p-3 rounded-md'>
                            <svg class="w-6 h-6" fill="none" stroke="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                            </svg>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-gray-900 text-lg font-medium '>Showcase your achievements</span>
                            <span className='text-base text-gray-500'>Your mentoring profile does not only include your mentoring booking packages, but also verified testimonials, blog posts and performance data. The perfect way to showcase your development as leader.</span>
                        </div>
                    </div>
                    <div className='flex gap-3 items-start w-[592px]'>
                        <div className='bg-[#172E59] p-3 rounded-md'>
                            <svg class="w-6 h-6" fill="none" stroke="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                            </svg>
                        </div>
                        <div className='flex flex-col w-[592px]'>
                            <span className='text-gray-900 text-lg font-medium '>All the support you need</span>
                            <span className='text-base text-gray-500'>Apart from our resources and support team, the 1,000+ strong mentoring community is always happy to help out with questions and concerns.</span>
                        </div>
                    </div>
                    <div className='flex gap-3 items-start w-[592px]'>
                        <div className='bg-[#172E59] p-3 rounded-md'>
                            <svg class="w-6 h-6" fill="none" stroke="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <div className='flex flex-col w-[592px]'>
                            <span className='text-gray-900 text-lg font-medium '>Full time control, always!</span>
                            <span className='text-base text-gray-500'>We don't need you to adhere to times, schedules or certain amount of mentoring spots. You decide how your offer looks like and how you structure mentorships.</span>
                        </div>
                    </div>
                    <div className='flex gap-3 items-start w-[592px]'>
                        <div className='bg-[#172E59] p-3 rounded-md'>
                            <svg class="w-6 h-6" fill="none" stroke="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-gray-900 text-lg font-medium '>Monetize your expertise</span>
                            <span className='text-base text-gray-500'>It's a good feeling to get paid for making a difference. Did you know that paid mentoring programs have up to five times higher success rates than free/volunteering-based ones?</span>
                        </div>
                    </div>
                    <div className='flex gap-3 items-start w-[592px]'>
                        <div className='bg-[#172E59] p-3 rounded-md'>
                            <svg class="w-6 h-6" fill="none" stroke="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                            </svg>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-gray-900 text-lg font-medium '>An inspirational community</span>
                            <span className='text-base text-gray-500'>MentorCruise is a diverse program that spans almost 100 countries of origins, from early-stage startup founders to principal engineers at FAANG and award-winning designers.</span>
                        </div>
                    </div>
                    <div className='flex gap-3 items-start w-[592px]'>
                        <div className='bg-[#172E59] p-3 rounded-md'>
                            <svg class="w-6 h-6" fill="none" stroke="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                            </svg>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-gray-900 text-lg font-medium '>Rewards, perks and collaboration</span>
                            <span className='text-base text-gray-500'>With mentors in all edges of the industry, we work on opportunities together, start projects, do job referrals, share knowledge. Join and be part of what we do!</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Mentor