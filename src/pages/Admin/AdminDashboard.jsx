import React from 'react'
import Navbar2 from '../../components/Navbar2'
import AdminSidebar from './AdminSidebar'

const AdminDashboard = () => {
    return (
        <div className='flex flex-col w-full'>
            <Navbar2 path="admin" />
            <div className='flex w-full'>
                <div className=''>
                    <AdminSidebar path={'dashboard'} />
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard