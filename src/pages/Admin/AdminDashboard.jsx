import React, { useState } from 'react'
import Navbar2 from '../../components/Navbar2'
import AdminSidebar from './AdminSidebar'

const AdminDashboard = () => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    return (
        <div className='flex flex-col w-full'>
            <Navbar2 path="admin" user = {user} setUser = {setUser} setLoading={setLoading} />
            <div className='flex w-full'>
                <div className=''>
                    <AdminSidebar path={'dashboard'} user = {user} />
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard