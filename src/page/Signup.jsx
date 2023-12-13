import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import ReCAPTCHA from "react-google-recaptcha"
import {useNavigate} from 'react-router-dom'

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  return (
    <div className='flex'>
      {/* left */}
      <div className='w-1/3'>
        <div className='flex bg-[#172e59] h-screen items-center justify-center w-1/3 fixed'>
          <div className='w-max h-max p-2 rounded-full bg-white'>
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
      {/* right */}
      <div className='flex justify-center text-sm items-center my-12 w-2/3'>
        <div className='flex flex-col w-1/2 gap-5'>
          <div className='font-bold text-3xl mb-2'>Sign up as a Mentee</div>
          <div>
            <div className='text-gray-600 font-medium text-[15px]'>First Name</div>
            <input type="text" className='border border-gray-400 focus:border-2 focus:border-blue-600 mt-0.5 outline-none px-2 py-1.5 rounded-md w-full' />
          </div>
          <div>
            <div className='text-gray-600 font-medium text-[15px]'>Last Name</div>
            <input type="text" className='border border-gray-400 focus:border-2 focus:border-blue-600 mt-0.5 outline-none px-2 py-1.5 rounded-md w-full' />
          </div>
          <div>
            <div className='text-gray-600 font-medium text-[15px]'>Email</div>
            <input type="text" className='border border-gray-400 focus:border-2 focus:border-blue-600 mt-0.5 outline-none px-2 py-1.5 rounded-md w-full' />
          </div>
          <div>
            <div className='flex justify-between font-medium w-full'>
              <div className='text-gray-600'>Password</div>
              <div className='flex items-center justify-center justify-self-center text-[#118577] gap-1.5 cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <VisibilityOffOutlinedIcon  sx={{ width: "15px" }} /> : <VisibilityOutlinedIcon sx={{ width: "15px" }} />}
                <div>{!showPassword ? 'Show' : 'Hide'}</div>
              </div>
            </div>
            <input type={showPassword ? 'text' : 'password'} className='border border-gray-400 focus:border-2 focus:border-blue-600 mt-0.5 outline-none px-2 py-1.5 rounded-md w-full' />
            <div style={{ color: "grey" }}>- Must be at least 8 characters</div>
            <div style={{ color: "grey" }}>- Must include atleast one lowercase character</div>
            <div style={{ color: "grey" }}>- Must include atleast one uppercase character</div>
            <div style={{ color: "grey" }}>- Must include atleast one special character</div>
            <div style={{ color: "grey" }}>- Must include atleast one number</div>
          </div>
          <div>
            <span>Captcha</span>
            <ReCAPTCHA sitekey="6LckUS8pAAAAAL8bGHK_t8V2zkE1LtHgqPfXkHHQ" />
          </div>
          <div className='bg-[#118577] text-white text-center rounded-md py-2 text-sm font-medium'>Sign Up</div>
          <div className='flex flex-col w-full gap-5'>
            <div className='flex gap-2 items-center'>
              <div className='w-1/2 h-0 border'></div>
              <div>Or</div>
              <div className='w-1/2 h-0 border'></div>
            </div>
            <div className='flex items-center justify-center gap-2 w-full border border-gray-400 py-2 rounded-md'>
              <img src="https://img.icons8.com/fluency/22/google-logo.png" alt="" />
              <div className='font-semibold cursor-pointer'>Log in with Google</div>
            </div>
          </div>
          {/* <div>By clicking "Sign Up" or "Sign up with Google" you accept <br/>
            the <span className='text-[#118577] underline font-medium'>Terms of Service</span> and <span className='text-[#118577] underline font-medium'>Privacy Policy.</span></div> */}
            <div className='text-sm'>Already have an account? <span className='text-[#118577] underline font-medium cursor-pointer' onClick={()=>navigate('/login')}>Log in</span></div>
            <div className='text-sm'>Looking to join us as a mentor? <span className='text-[#118577] underline font-medium cursor-pointer'>Apply now</span></div>
        </div>
      </div>
    </div>
  )
}

export default Signup