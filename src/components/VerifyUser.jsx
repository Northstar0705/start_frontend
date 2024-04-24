import React, { useEffect, useState } from 'react'
import OTPInput from 'react-otp-input'

const VerifyUser = () => {
    const [value, setValue] = useState()
    const [time, setTime] = useState(30)

    useEffect(() => {
        if (time === 0) return () => { }
        else {
            const interval = setInterval(() => {
                setTime(prev => prev - 1)
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [time])
    return (
        <div className='flex flex-col w-full gap-5'>
            <h1 className='text-2xl font-semibold'>Verify Email</h1>
            <p className='text-lg'>Welcome to NorthStar! We're thrilled to have you join our community. To ensure the security of your account and to provide you with the best experience possible, we kindly ask you to verify your email address.</p>
            <p className='text-lg'>Please check your email for a verification code. If you did not receive the email, please click the button below to resend the verification code.</p>
            <div className='flex justify-between'>
                <button onClick={()=>setTime(30)} disabled={time!==0} className='bg-[#172e59] rounded-md disabled:cursor-not-allowed text-white p-1.5 w-max'>Resend Verification Email</button>
                {time !== 0 && <div>Resend in {time} sec</div>}
            </div>
            <div className='flex justify-center'>
                <OTPInput
                    value={value}
                    onChange={(otp) => setValue(otp)}
                    numInputs={6}
                    renderSeparator={<span className='w-5'></span>}
                    renderInput={(props) => <input type='text' {...props} />}
                    inputStyle={{ border: "1px solid black", outline: "none", width: "40px", height: "40px", borderRadius: "5px" }}
                />
            </div>
            <div className="flex justify-center">
                <button className='bg-[#118577] text-white w-max rounded-md p-1.5'>Verify Code</button>
            </div>
        </div>
    )
}

export default VerifyUser