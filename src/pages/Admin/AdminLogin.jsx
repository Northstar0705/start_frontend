import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  return (
    <div className='w-full flex h-full'>
      {/* left */}
      <div className='w-1/3'>
        <div className='bg-[#172e59] w-1/3 h-screen fixed flex items-center justify-center'>
          <div className='w-max h-max p-2 bg-white rounded-full'>
            <img src={logo} alt="" className='' />
          </div>
        </div>
      </div>
      {/* right */}
      <div className='flex justify-center items-center w-2/3 h-screen'>
        <div className='flex flex-col justify-center gap-5 w-1/2'>
          <div className='text-4xl font-bold'>Admin Log in</div>
          <div className='flex flex-col'>
            <div className='text-gray-600 font-medium text-[15px]'>Email</div>
            <input type="text" onChange={(e) => {
              setFormData({ ...formData, email: e.target.value })
            }} value={formData.email} className='border mt-0.5 border-gray-400 focus:border-2 focus:border-blue-500 px-2 rounded-md outline-none w-full py-1.5' />
          </div>
          <div className='flex flex-col'>
            <div className='text-gray-600 font-medium text-[15px]'>Password</div>
            <input type="text" onChange={(e) => {
              setFormData({ ...formData, password: e.target.value })
            }} value={formData.password} className='border mt-0.5 border-gray-400 focus:border-2 focus:border-blue-500 px-2 rounded-md outline-none w-full py-1.5' />
          </div>
          <div className='w-full cursor-pointer hover:bg-[#0f766a] bg-[#118577] text-center py-1.5 text-white rounded-md '>Log in</div>
          <div className='underline text-[#118577] font-medium cursor-pointer'>Forgot password?</div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin