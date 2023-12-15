import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import axios from 'axios'
const Apply = () => {
    const [page, setPage] = useState(1)
    const [initial, setInitial] = useState(true)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        occupation: '',
        company: '',
        country: '',
        category: '',
        skills: '',
        bio: '',
        linkedin: '',
        twitter: '',
        website: '',
        introVideo: '',
        article: '',
        whyMentor: '',
        greatestAchievement: '',
    })
    const [countries, setCountries] = useState([])
    useEffect(()=>{
        const getData = async()=>{
            const {data} = await axios.get('https://restcountries.com/v3.1/all')
            setCountries(data)
            console.log(data)
        }
        if(initial){
            setInitial(false)
            getData()
        }
    },[initial])
    return (
        <div>
            <Navbar path={'mentor'} />
            <div className='flex w-full justify-center items-center my-10'>
                <div className='w-[60%] flex flex-col gap-10'>
                    <h1 className='text-2xl font-bold '>Apply as a mentor</h1>
                    <div className='w-full flex flex-col'>
                        <div className='flex items-center px-5'>
                            <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#118577] relative ${page !== 1 ? 'bg-[#118577]' : ''}`}>
                                {page === 1 ? <div className='w-2 h-2 bg-[#118577] rounded-full'></div> : <img src='https://img.icons8.com/material-rounded/24/ffffff/checkmark--v1.png' alt='' />}
                            </div>
                            <div className='border border-gray-400 w-[45%]'></div>
                            <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${page !== 1 ? 'border-[#118577]' : 'border-gray-400'} relative ${page >= 3 ? 'bg-[#118577]' : ''}`}>
                                {page === 2 ? <div className='w-2 h-2 bg-[#118577] rounded-full'></div> : <img src='https://img.icons8.com/material-rounded/24/ffffff/checkmark--v1.png' alt='' />}
                            </div>
                            <div className='border border-gray-400 w-[45%]'></div>
                            <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${page >= 3 ? 'border-[#118577]' : 'border-gray-400'} relative ${page === 4 ? 'bg-[#118577]' : ''}`}>
                                {page === 3 ? <div className='w-2 h-2 bg-[#118577] rounded-full'></div> : <img src='https://img.icons8.com/material-rounded/24/ffffff/checkmark--v1.png' alt='' />}
                            </div>
                        </div>
                        <div className='flex justify-between font-semibold'>
                            <div className={`${page === 1 ? 'text-[#118577]' : 'text-gray-400'}`}>About you</div>
                            <div className={`${page === 2 ? 'text-[#118577]' : 'text-gray-400'}`}>Profile</div>
                            <div className={`${page === 3 ? 'text-[#118577]' : 'text-gray-400'}`}>Experience</div>
                        </div>
                    </div>
                    {/*form*/}
                    <div className='flex flex-col gap-2'>
                        <div className='font-medium'>Photo</div>
                        <div className='flex gap-10 items-center'>
                            <div className='w-20 h-20 rounded-full bg-slate-200/60'></div>
                            <button className='flex gap-5 items-center border border-gray-300 p-2 rounded-md'> <img src="https://img.icons8.com/fluency-systems-regular/20/upload--v1.png" alt="" /> <span>Upload Photo</span></button>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-5'>
                        <div className='flex w-full gap-5'>
                            <div className='flex flex-col gap-1 w-1/2'>
                                <div className='font-medium'>First name*</div>
                                <input type='text' className='outline-blue-600 border border-gray-300 text-sm p-2 rounded-md w-full' placeholder='John' />
                            </div>
                            <div className='flex flex-col gap-1 w-1/2'>
                                <div className='font-medium'>Last name*</div>
                                <input type='text' className='outline-blue-600 border border-gray-300 p-2 text-sm rounded-md w-full' placeholder='Wick' />
                            </div>
                        </div>
                        <div className='flex w-full gap-5'>
                            <div className='flex flex-col gap-1 w-1/2'>
                                <div className='font-medium'>Email*</div>
                                <input type='text' className='outline-blue-600 border border-gray-300 p-2 text-sm rounded-md w-full' placeholder='john@gmail.com' />
                            </div>
                            <div className='flex flex-col gap-1 w-1/2'>
                                <div className='font-medium'>Password*</div>
                                <input type='password' className='outline-blue-600 border border-gray-300 p-2 text-sm rounded-md w-full' placeholder='Enter your password...' />
                            </div>
                        </div>
                        <div className='flex w-full gap-5'>
                            <div className='flex flex-col gap-1 w-1/2'>
                                <div className='font-medium'>Job Title*</div>
                                <input type='text' className='outline-blue-600 border border-gray-300 p-2 text-sm rounded-md w-full' placeholder='' />
                            </div>
                            <div className='flex flex-col gap-1 w-1/2'>
                                <div className='font-medium'>Company*</div>
                                <input type='password' className='outline-blue-600 border border-gray-300 p-2 text-sm rounded-md w-full' placeholder='' />
                            </div>
                        </div>
                        <div>
                            {/* location dropdown of all country */}

                        </div>
                    </div>
                    <div className='w-full flex justify-end'>
                        <button onClick={() => setPage(p => p + 1)} className='text-white bg-blue-900 w-max p-2 rounded-md'>Next Step</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Apply