import React from 'react'
import Navbar from '../../components/Navbar'
import MentorSidebar from './MentorSidebar'

const MentorSettings = () => {
  return (
    <div className='flex flex-col w-full h-screen'>
      <Navbar loggedIn={true} path={"mentor"} />
      <div className='h-full'>
        <MentorSidebar path={"settings"} />
      </div>
    </div>
  )
}

export default MentorSettings