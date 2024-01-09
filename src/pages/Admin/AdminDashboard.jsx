import React from 'react'
import AdminNavbar from './AdminNavbar'
import AdminSidebar from './AdminSidebar'

const AdminDashboard = () => {
    return (
        <div className='flex flex-col w-full'>
            <AdminNavbar />
            <div className='flex w-full'>
                <div className=''>
                    <AdminSidebar path={'dashboard'} />
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard