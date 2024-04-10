import React from 'react'
import Navbar from '../../components/Navbar'
import MentorSidebar from './MentorSidebar'

const MentorInquiries = () => {
  return (
    <div className='flex flex-col w-full h-screen'>
      <Navbar loggedIn={true} path={"mentor"} />
      <div className='h-full'>
        <MentorSidebar path={"inquiries"} />
      </div>
    </div>
  )
}

export default MentorInquiries