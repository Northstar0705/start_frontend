import React, { useState } from 'react'
import Navbar2 from '../../components/Navbar2'
import AdminSidebar from './AdminSidebar'
import Loader from '../../components/Loader'

const Event = () => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    return (
        <div className='flex flex-col w-full'>
            <Navbar2 path="admin" user={user} setUser={setUser} setLoading={setLoading} />
            <div className='flex w-full'>
                <div>
                    <AdminSidebar path={'event'} user={user} />
                </div>
                {loading && <div className='flex items-center w-full justify-center'>
                    <Loader />
                </div>}
            </div>
        </div>

    )
}

export default Event