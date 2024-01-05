import React from 'react'
import AdminNavbar from './AdminNavbar'
import AdminSidebar from './AdminSidebar'

const MentorApllications = () => {
    return (
        <div className='flex flex-col w-full'>
            <AdminNavbar />
            <div className='flex w-full'>
                <div className=''>
                    <AdminSidebar path={'applications'} />
                </div>
            </div>
        </div>
    )
}

export default MentorApllications