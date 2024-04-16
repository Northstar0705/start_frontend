import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import MentorSidebar from './MentorSidebar'
import Loader from '../../components/Loader'

const MentorDashboard = () => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    return (
        <div className='flex flex-col w-full h-screen'>
            <Navbar loggedIn={true} path={"mentor"} user={user} setUser={setUser} setLoading={setLoading} />
            <div className='flex w-screen h-full'>
                <div className=''>
                    <MentorSidebar path={"dashboard"} user={user} />
                </div>
                {loading &&<div className='flex items-center w-full justify-center'>
                     <Loader />
                </div>}
            </div>
        </div>
    )
}

export default MentorDashboard