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

  const sessions = [
    { id: 0, name: 'Intro Call', description: 'If you are looking for a mentor, and you are just not sure about how this all works - this should be for you.', duration: 'Approx. 30 minutes' },
    { id: 1, name: 'Work Review', description: 'In this session, a mentor will sit down with you, and give you some inputs to make your work better, be it a review, inputs on your design, or some inspiration.', duration: 'Approx. 45 minutes' },
    { id: 2, name: 'Interview Preparation', description: 'Some big interviews coming up? In this 1-hour session, a mentor with hiring experience will act as a technical interviewer and ask you some standard hiring questions.', duration: 'Approx. 60 minutes' },

  ]

  const questions = [
    { id: 0, question: 'How can I get in touch with a mentor?', answer: 'We offer two main ways to get in touch with a mentor, the regular long-term mentorship through application, and by booking a session.' },
    { id: 1, question: 'How much do mentors cost? How does pricing work?', answer: 'Each mentor offers multiple pricing tiers and has different offers. With the mentorship subscription, you\'ll get charged the monthly fee of the mentor you\'re subscribed to. If you book a session, you\'ll be charged the price of the session once.' },
    { id: 2, question: 'What can I expect from mentors?', answer: 'Mentors are vetted and continuously evaluated based on their performances, with the goal to only have the best mentors available to you. Their goal is to get you closer to your goal with the services booked in your plan.However, mentors are professionals in the industry, offering their free time to help you reach your goals. You\'ll typically receive replies within a few hours and will have pre-scheduled meetings with your mentor, they cannot be available to you 24/7.' },
    { id: 3, question: 'My mentor hasn\'t responded to my application in some days, what should I do?', answer: 'We\'re continuously looking after the mentors and their activity. However at times it can be the case that a mentor is unavailable, even though they were recently active. In that case, if you have not received a reply in more than 5 days, it\'s a safe bet to reach out to someone else.' },
    { id: 4, question: 'Can I withdraw my applications?', answer: 'If you\'ve changed your mind about a mentor, you can withdraw your application. The withdrawal option is available three days after your application, to allow the mentor to react.' },
    { id: 5, question: 'How many mentors can I reach out to?', answer: 'We impose a light limit on the amount of mentors you can reach out to in a given day and week for spam and security reasons. However there\'s no limit on the amount of mentors you can subscribe to.' },
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
      <div className='flex flex-col px-20 py-4 gap-5'>
        <div className='flex flex-col gap-3 relative w-[100%]'>
          <h2 className='text-2xl font-semibold text-[#111827]'>Recommended for you</h2>
          <ChevronLeftIcon sx={{ color: "#4A4A4A", width: "30px", height: "30px", cursor: "pointer", position: "absolute", left: "-35px", top: "120px" }} />
          <ChevronRightIcon sx={{ color: "#4A4A4A", width: "30px", height: "30px", cursor: "pointer", position: "absolute", right: "-35px", top: "120px" }} />
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
        <div className='flex flex-col gap-3'>
          <h1 className='text-2xl font-semibold text-[#111827]'>Featured Sessions</h1>
          <div className='flex gap-3'>
            {sessions.map((value, id) => (
              <div className='border-[#4A4A4A] border-2 flex flex-col p-5 rounded-md gap-3 w-[450px] items-start justify-center'>
                <span className='text-[18px] text-black font-bold'>{value.name}</span>
                <span className='text-[#7A7A7A] text-[16px] font-medium'>{value.description}</span>
                <span className='text-[16px] text-[#4A4A4A] font-bold'>{value.duration}</span>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-10  items-center'>
          <h1 className='text-2xl font-semibold text-[#111827]'>Frequently Asked Questions</h1>
          <div className='flex flex-wrap gap-10 justify-center'>
            {questions.map((item, id) => (
              <div className='flex flex-col gap-1 w-[480px]'>
                <h1 className='text-lg font-medium text-gray-900 leading-6'>{item.question}</h1>
                <span className='text-[16px] text-gray-700'>{item.answer}</span>
              </div>
            ))}
          </div>
            <Button variant='contained' sx={{ background: "#1C3D7A", color: "#ffffff", textTransform: "capitalize",padding:"10px 28px", ":hover": { background: "#1C3D7A" },fontWeight:"500",fontSize:"16px", }}>Read More</Button>
        </div>
      </div>
    </div>

  )
}

export default Home