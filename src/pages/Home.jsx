import React from 'react'
import Navbar from '../components/Navbar'
import { Button } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import profile from '../assets/mentor.webp'

const Home = () => {
  const data = [
    { id: 0, name: 'Alex', price: '₹180/mo', designation: 'Software Engineer at Microsoft', description: 'Alex is one of the best and most experience mentor.', tags: ['Javascript', 'React', 'Nodejs', 'Express', 'MongoDB', 'Mongoose'] },
    { id: 1, name: 'Bonny', price: '₹360/mo', designation: 'Data Engineer at Microsoft', description: 'Bonny is one of the best and most experience mentor.', tags: ['Javascript', 'React', 'Machine Learning', 'Express', 'MongoDB', 'Mongoose'] },
    { id: 2, name: 'Tony', price: '₹360/mo', designation: 'Data Engineer at Microsoft', description: 'Bonny is one of the best and most experience mentor.', tags: ['Javascript', 'React', 'Machine Learning', 'Express', 'MongoDB', 'Mongoose'] },
    { id: 3, name: 'Alexandra', price: '₹360/mo', designation: 'Data Engineer at Microsoft', description: 'Bonny is one of the best and most experience mentor.', tags: ['Javascript', 'React', 'Machine Learning', 'Express', 'MongoDB', 'Mongoose'] },
    { id: 4, name: 'Sumit Pahwa', price: '₹360/mo', designation: 'Data Engineer at Microsoft', description: 'Bonny is one of the best and most experience mentor.', tags: ['Javascript', 'React', 'Machine Learning', 'Express', 'MongoDB', 'Mongoose'] },
    { id: 5, name: 'Bonny', price: '₹360/mo', designation: 'Data Engineer at Microsoft', description: 'Bonny is one of the best and most experience mentor.', tags: ['Javascript', 'React', 'Machine Learning', 'Express', 'MongoDB', 'Mongoose'] },
  ]
  return (
    <div>
      <div className='bg-[#172E59] '>
        <Navbar loggedIn={true} className='shadow-md' />
        <div className='flex flex-col justify-center items-center h-[45vh] gap-5'>
          <span className='text-white font-bold text-4xl'>Welcome, Ayush!</span>
          <span className='text-white font-normal text-lg text-center'>Start Connecting with mentors and get ready to take your career to<br /> the next level!</span>
          <Button variant="contained" sx={{ background: "#ffffff", color: "#374151", textTransform: "capitalize", ":hover": { background: "#ffffff" } }}>Browse Mentor</Button>
        </div>
        <div className='bg-[#21A391] flex justify-center px-2 py-3 gap-1'>
          <span className='text-white font-semibold text-base'>👀 Want to double the chance of success for your applications?</span>
          <span className='text-white font-bold underline text-base cursor-pointer'>Add a profile page →</span>
        </div>
      </div>
      <div className='flex flex-col items-center px-20 py-4'>
        <div className='flex flex-col gap-3 relative w-[100%]'>
          <h2 className='text-2xl font-semibold text-[#111827]'>Recommended for you</h2>
          <ChevronLeftIcon sx={{ color: "#4A4A4A" , width:"30px" , height:"30px",cursor:"pointer",position:"absolute",left:"-35px",top:"120px"}} />
          <ChevronRightIcon sx={{ color: "#4A4A4A" , width:"30px" , height:"30px",cursor:"pointer",position:"absolute",right:"-35px",top:"120px"}} />  
          <div className='flex gap-3 overflow-x-scroll'>
            {data.map((values, i) => (
              <div className='border-[#4A4A4A] border-2 flex p-5 rounded-md gap-3 items-start min-w-[445px] justify-center'>
                <img src={profile} alt="" style={{ width: "50px", height: "50px", borderRadius: "8px" }} />
                <div className='flex flex-col'>
                  <div className='flex justify-between items-center'>
                    <span className='text-[#172E59] font-bold text-[19.2px] truncate'>{values.name}</span>
                    <span className='text-[#172E59] font-bold text-[19.2px]'>{values.price}</span>
                  </div>
                  <span className='text-[#7A7A7A] font-semibold text-[17.6px]'>{values.designation}</span>
                  <span className='text-base text-[#172E59] font-medium'>{values.description}</span>
                  <div className='flex gap-2 flex-wrap mt-1'>
                    <span className='bg-[#F3F4F6] text-[#374151] text-sm py-0.5 px-2 font-medium rounded-xl'> Javascript</span>
                    <span className='bg-[#F3F4F6] text-[#374151] text-sm py-0.5 px-2 font-medium rounded-xl'> Javascript</span>
                    <span className='bg-[#F3F4F6] text-[#374151] text-sm py-0.5 px-2 font-medium rounded-xl'> Javascript</span>
                    <span className='bg-[#F3F4F6] text-[#374151] text-sm py-0.5 px-2 font-medium rounded-xl'> Javascript</span>
                    <span className='bg-[#F3F4F6] text-[#374151] text-sm py-0.5 px-2 font-medium rounded-xl'> Javascript</span>
                    <span className='bg-[#F3F4F6] text-[#374151] text-sm py-0.5 px-2 font-medium rounded-xl'> Javascript</span>
                  </div>
                </div>
              </div>
            ))
            }
                      
          </div>

        </div>

      </div>
    </div>

  )
}

export default Home