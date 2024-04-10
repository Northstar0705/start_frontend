import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import MentorSidebar from './MentorSidebar'
import { Button } from '@mui/material'

const AddEvent = () => {
    const [option, setOption] = useState()
    return (
        <div className='flex flex-col w-full h-screen'>
            <Navbar loggedIn={true} path={"mentor"} />
            <div className='flex h-full'>
                <div>
                    <MentorSidebar path={"addEvent"} />
                </div>
                <div className='w-full p-2 flex justify-center'>
                    {!option && <div className='flex flex-col gap-10 justify-center items-center h-1/2'>
                        <span className='text-4xl font-semibold'>Choose Your Event</span>
                        <div className='flex gap-5'>
                            <Button onClick={() => setOption("mentee")} variant='contained' sx={{ fontSize: "18px", background: "#118577", "&:hover": { "background": "#118577" }, textTransform: "capitalize" }}>Only for Mentees</Button>
                            <Button onClick={() => setOption("all")} variant='outlined' sx={{ fontSize: "18px", borderColor: "#118577", "&:hover": { "borderColor": "#118577" }, color: "#118577", textTransform: "capitalize" }}>For All Users</Button>
                        </div>
                    </div>}
                    {option && <form className="flex w-full flex-col gap-3">
                        <div className='flex w-full gap-5'>
                            <div className='flex flex-col w-1/3'>
                                <label htmlFor="title">Event Title</label>
                                <input type="text" className="border border-gray-500 rounded-md outline-none p-1.5 focus:border-2 w-full  focus:border-blue-600" id="title" />
                            </div>
                            <div className='flex flex-col w-1/3'>
                                <label htmlFor="title">Start</label>
                                <input type="datetime-local" className="border border-gray-500 rounded-md outline-none p-1.5 focus:border-2 w-full  focus:border-blue-600" id="title" />
                            </div>
                            <div className='flex flex-col w-1/3'>
                                <label htmlFor="title">End</label>
                                <input type="datetime-local" className="border border-gray-500 rounded-md outline-none p-1.5 focus:border-2 w-full  focus:border-blue-600" id="title" />
                            </div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="description">Description</label>
                            <textarea className="border border-gray-500 rounded-md outline-none p-1.5 focus:border-2 w-full  focus:border-blue-600" id="description" />
                        </div>
                        <div className='flex w-full justify-end'>
                            {option === "mentee" ? <button className="bg-blue-600 text-white rounded-md p-2">Add Event</button> :
                                <button className="bg-blue-600 text-white rounded-md p-2">Request Event</button>}
                        </div>
                    </form>}
                </div>
            </div>
        </div>
    )
}

export default AddEvent