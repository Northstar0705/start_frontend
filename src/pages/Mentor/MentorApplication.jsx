import React from 'react'
import Navbar from '../../components/Navbar'
import MentorSidebar from './MentorSidebar'

const MentorApplication = () => {
  return (
    <div className='flex flex-col w-full h-screen'>
      <Navbar loggedIn={true} path={"mentor"} />
      <div className='h-full'>
        <MentorSidebar path={"application"} />
      </div>
    </div>
  )
}

export default MentorApplication