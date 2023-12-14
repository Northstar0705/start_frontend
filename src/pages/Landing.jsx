import React from 'react'
import Navbar from '../components/Navbar'
import { TypeAnimation } from 'react-type-animation'
import { Button } from '@mui/material'
import boat from '../assets/boat.svg'
import edit from '../assets/edit.svg'
import rocket from '../assets/rocket.svg'
import Footer from '../components/Footer'

const Landing = () => {
  return (
    <div className='bg-[#F9FAFB] h-full '>
      <Navbar />
      <div className='flex flex-col gap-12'>
        <div className='flex flex-col justify-center items-center h-full gap-10'>
          <h1 className='text-[#172E59] font-normal text-[20px] leading-7'>Learn a new skill, launch a project, land your dream career.</h1>
          <div>
            <div className='flex gap-1'>
              <span className='text-[60px] text-[#172E59] font-bold'>1-on-1 </span>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  ' Branding',
                  1000,
                  'Web Development',
                  1000,
                  ' CEO ',
                  1000,
                  'Product Marketting ',
                  1000,
                ]}
                speed={50}
                style={{ fontSize: '60px', color: '#21A391', fontWeight: 'bold' }}
                repeat={Infinity}

              />
            </div>
            <span className='text-[60px] text-[#172E59] font-bold'>Mentorship</span>
          </div>
          <div className='bg-white shadow-lg p-4 w-1/2 flex items-center justify-between rounded-md'>
            <input type="text" placeholder='Search by role , skills or company.' style={{ width: '70%', border: 'none', outline: 'none', marginLeft: '12px' }} className='placeholder:text-[18px] ' />
            <Button variant='contained' sx={{ background: '#1C3D7A', textTransform: 'capitalize', padding: '8px 18px', fontSize: '16px', fontWeight: '600' }}>Search Mentors</Button>
          </div>
        </div>
        <div className='flex justify-between w-full p-7'>
          <div className='text-[#000000] text-3xl font-bold w-1/2'>
            <span>Over 5,000 skills ,topics and <br /> companies to learn about </span>
          </div>
          <div className='flex gap-3 flex-wrap w-1/2'>
            <div className='flex'>
              <img src="https://img.icons8.com/color/48/airbnb.png" alt="airbnb" />
              <span className='text-[#FF5A5F] text-4xl font-bold'>airbnb</span>
            </div>
            <div className='flex'>
              <img src="https://img.icons8.com/color/48/amazon.png" alt="amazon" />
              <span className='text-[#221F1F] text-4xl font-bold'>amazon</span>
            </div>
            <div className='flex'>
              <img src="https://img.icons8.com/fluency/48/meta.png" alt="Meta" />
              <span className='text-[#1C2B33] text-4xl font-bold'>Meta</span>
            </div>
            <div className='flex'>
              <img src="https://img.icons8.com/color/48/microsoft.png" alt="Microsoft" />

            </div>
            <div className='flex'>
              <img src="https://img.icons8.com/fluency/48/spotify.png" alt="Spotify" />
              <span className='text-[#1ED760] text-4xl font-bold'>Spotify</span>
            </div>
            <div className='flex justify-center'>
              <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google" />
              {/* <span className='text-[#1C2B33] text-4xl font-bold'>google</span> */}
            </div>
          </div>
        </div>
        <div className='bg-[#172E59] w-full flex flex-col items-center p-10 gap-10'>
          <div className='w-1/2 flex flex-col gap-5'>
            <span className='text-white text-3xl font-bold'>At your fingertips: a dedicated career coach.</span>
            <span className='text-white text-md font-semibold'>Want to ace your next job interview ? Successfully build a startup? Itching to learn high-demand skills? Our coaches are here to help you navigate your career journey, from finding your next job to planning your career path.</span>
          </div>
          <div className='flex gap-3 justify-center'>
            <div className='flex flex-col flex-wrap gap-5'>
              <span className='text-white text-2xl font-bold'>Find Your Mentor</span>
              <img src={boat} alt="boat" />
              <span className='text-white text-base text-center'>Explore our growing catalogue of experienced mentors until you find the perfect fit.</span>
            </div>
            <div className='flex flex-col flex-wrap gap-5'>
              <span className='text-white text-2xl font-bold'>Apply for Mentorship</span>
              <img src={edit} alt="edit" />
              <span className='text-white text-base text-center '>Fill in an application, and if you’re a match with your chosen mentor you can start your free 7-day trial.</span>
            </div>
            <div className='flex flex-col flex-wrap gap-5'>
              <span className='text-white text-2xl font-bold'>Level up your skills</span>
              <img src={rocket} alt="rocket" />
              <span className='text-white text-base text-center '>From personal chats to hands-on support, each mentor offers different services to help you skyrocket your career.</span>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Landing