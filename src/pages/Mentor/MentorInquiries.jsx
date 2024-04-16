import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import MentorSidebar from './MentorSidebar'
import Loader from '../../components/Loader'

const MentorInquiries = () => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)
  return (
    <div className='flex flex-col w-full h-screen'>
      <Navbar loggedIn={true} path={"mentor"} user={user} setUser={setUser} setLoading={setLoading} />
      <div className='h-full flex'>
        <div>
          <MentorSidebar path={"inquiries"} user={user} />
        </div>
        {loading && <div className='flex items-center w-full justify-center'>
          <Loader />
        </div>}
      </div>
    </div>
  )
}

export default MentorInquiries