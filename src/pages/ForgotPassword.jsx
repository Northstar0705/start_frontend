import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.svg";
import OtpInput from 'react-otp-input';
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
    const [timer, setTimer] = useState(0)
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        verified: false
    })
    const [value, setValue] = useState("null")
    const countDown = async() => {
        if (formData.email === "") {
            alert("Please enter email")
            return
        }
        try{
            const {data} = await axios.post("http://localhost:5000/api/auth/verify-email", {email: formData.email})
            console.log(data)
            setValue("")
            setTimer(30)
        }catch(err){
            if(err.response.data.message === "Email not found"){
                alert("Email not found")
            }
        }
    }
    const verifyOtp = async() => {
        if (value.length < 4) {
            alert("Please enter OTP")
            return
        }
        try{
            const {data} = await axios.post("http://localhost:5000/api/auth/verify-otp", {email: formData.email, otp: value})
            console.log(data)
            setFormData({ ...formData, verified: true })
        }catch(err){
            console.log(err)
            if(err.response.data === "Timeout"){
                alert("Timeout")
            }
            else if(err.response.data === "Invalid OTP"){
                alert("Invalid OTP")
            }
        }
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        if (formData.password === "" || formData.confirmPassword === "") {
            alert("Please fill all the inputs")
            return
        }
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match")
            return
        }
        try{
            const {data} = await axios.patch("http://localhost:5000/api/auth/forgot-password", {email: formData.email, password: formData.password})
            console.log(data)
            navigate("/login")
        }catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer(timer - 1)
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [timer])
    return (
        <div className='flex w-full'>
            <div className="w-1/3">
                <div className="bg-[#172e59] w-1/3 h-screen fixed flex items-center justify-center">
                    <div className="w-max h-max p-2 bg-white rounded-full">
                        <img src={logo} alt="" className="" />
                    </div>
                </div>
            </div>
            <div className='w-2/3 flex justify-center items-center'>
                <div className='w-1/2 flex h-screen items-center justify-center flex-col gap-5'>
                    <h1 className='text-3xl font-semibold'>Forgot Password</h1>
                    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
                        {!formData.verified && <div className='flex flex-col gap-2'>
                            <div className='flex flex-col'>
                                <label htmlFor="email">Email</label>
                                <input onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="email" className="border outline-none border-gray-400 p-2 rounded-md" />
                            </div>
                            <div className={`w-full flex ${timer > 0 ? "justify-between" : "justify-end"} items-center`}>
                                {timer > 0 && <span>You can resend OTP after {timer} sec</span>}
                                <button onClick={countDown} disabled={timer > 0} className="w-max bg-[#118577] p-2 text-white rounded-md disabled:cursor-not-allowed" type='button'>Send OTP</button>
                            </div>
                            {/* OTP input */}
                            {value !== "null" && <div className='flex flex-col'>
                                <label htmlFor="otp">OTP</label>
                                <OtpInput
                                    value={value}
                                    onChange={(otp) => setValue(otp)}
                                    numInputs={6}
                                    renderSeparator={<span className='w-5'></span>}
                                    renderInput={(props) => <input type='text' {...props} />}
                                    inputStyle={{ border: "1px solid black", outline: "none", width: "40px", height: "40px", borderRadius: "5px" }}
                                />
                            </div>}
                            {value !== "null" && <div className='w-full flex justify-end'>
                                <button type='button' onClick={verifyOtp} className='bg-[#118577] text-white p-2 rounded-md w-max'>Verify OTP</button>
                            </div>}
                        </div>}
                        {formData.verified && <div className='flex flex-col gap-2'>
                            <div className='flex flex-col'>
                                <label htmlFor="password">Password</label>
                                <input onChange={(e) => setFormData({ ...formData, password: e.target.value })} type="password" className="border outline-none border-gray-400 p-2 rounded-md" />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} type="password" className="border outline-none border-gray-400 p-2 rounded-md" />
                            </div>
                            <button type='submit' className='bg-[#118577] text-white p-2 rounded-md w-max'>Reset Password</button>
                        </div>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword