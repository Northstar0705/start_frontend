import React, { useState } from 'react'
import Navbar2 from '../../components/Navbar2'
import AdminSidebar from './AdminSidebar'
import { Button } from '@mui/material'

const Event = () => {
    const [option, setOption] = useState()
    return (
        <div className='flex flex-col w-full'>
            <Navbar2 path="admin" />
            <div className='flex w-full'>
                <div>
                    <AdminSidebar path={'event'} />
                </div>
                
            </div>
        </div>

    )
}

export default Event