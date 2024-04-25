import React from 'react'

const BrowseCard = ({ mentor }) => {
  return (
    <div className='w-[80%] flex flex-col border border-gray-400 rounded-xl p-5 gap-10'>
      <div className='flex gap-10'>
        <div className='w-[150px] h-[200px]'>
          <img src={mentor.profilePicture} alt="" className='object-full rounded-md w-[150px] h-[200px]' />
        </div>
        <div className='flex flex-col justify-between w-[70%]'>
          <div className='flex flex-col gap-2'>
            <span className='text-[#172e59] font-bold text-2xl'>{mentor.firstName + " " + mentor.lastName}</span>
            <div className='text-[#172e59]'>{mentor.jobTitle} at <span className='font-semibold'>{mentor.company}</span></div>
            <div className='line-clamp-3'>{mentor.bio}</div>
          </div>
          <div className='flex flex-wrap gap-2'>
            {mentor.skills.map((skill, index) => {
              return <span key={index} className='bg-[#172e59] text-white px-2 py-1 rounded-full'>{skill}</span>
            })}
          </div>
        </div>
      </div>
      <div className='flex flex-col ml-[190px]'>
        <div className='text-gray-500 font-semibold'>Starting from</div>
        <div className='flex justify-between items-center'>
          <div className=''>
            <span className='font-bold text-2xl'>${mentor.price || 150}</span>
            <span className='font-medium'> / hour</span>
          </div>
          <button className='bg-[#118577] text-white rounded-md font-semibold p-2 w-[60%]'>View Profile</button>
        </div>
      </div>
    </div>
  )
}

export default BrowseCard