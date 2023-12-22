import React, { useRef, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import axios from 'axios'   
const Apply = () => {
    const [page, setPage] = useState(1)
    const [initial, setInitial] = useState(true)
    const [formData, setFormData] = useState({
        profilePicture: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        jobTitle: '',
        company: '',
        category: '',
        skills: [],
        bio: '',
        linkedin: '',
        twitter: '',
        website: '',
        introVideo: '',
        article: '',
        whyMentor: '',
        greatestAchievement: '',
    })

    const imageRef = useRef(null)

    const handleKeyDowm = (e) => {
        if (e.key === ',' || e.key === 'Enter') {
            console.log(e.target.value)
            setFormData({ ...formData, skills: [...formData.skills, e.target.value] })
            e.target.value = ''
        }
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onloadend = () => {
                setFormData({ ...formData, profilePicture: reader.result })
            }
        }
    }

    const handleNext = () => {
        if (page === 1) {
            if (formData.firstName && formData.lastName && formData.email && formData.password && formData.jobTitle && formData.company && formData.profilePicture) {
                setPage(p => p + 1)
            }
            else alert('Please fill all the fields')
        }
        else if (page === 2) {
            if (formData.category && formData.skills.length && formData.bio && formData.linkedin) {
                setPage(p => p + 1)
            }
            else alert('Please fill all the fields')
        }
    }


    const handleSubmit = async() =>{
        if(formData.whyMentor && formData.greatestAchievement){
            try{
                formData.profilePicture = "koibhilink.com"
                const {data} = await axios.post('http://localhost:5000/api/auth/apply', formData)
                console.log(data)
                setPage(p => p + 1)
            }catch(err){
                console.log(err)
            }
        }
        else alert('Please fill all the fields')
    }

    return (
        <div>
            <Navbar path={'mentor'} />
            <div className='flex w-full justify-center items-center my-10'>
                <div className='w-[60%] flex flex-col gap-10'>
                    <h1 className='text-2xl font-bold '>Apply as a mentor</h1>
                    <div className='w-full flex flex-col'>
                        <div className='flex items-center px-5'>
                            <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#118577] relative ${page !== 1 ? 'bg-[#118577]' : ''}`}>
                                {page === 1 ? <div className='w-2 h-2 bg-[#118577] rounded-full'></div> : <img src='https://img.icons8.com/material-rounded/24/ffffff/checkmark--v1.png' alt='' />}
                            </div>
                            <div className={`${page > 1 ? 'border-[1.5px] border-[#118577]' : "border border-gray-400"} w-[45%]`}></div>
                            <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${page !== 1 ? 'border-[#118577]' : 'border-gray-400'} relative ${page >= 3 ? 'bg-[#118577]' : ''}`}>
                                {page === 2 ? <div className='w-2 h-2 bg-[#118577] rounded-full'></div> : <img src='https://img.icons8.com/material-rounded/24/ffffff/checkmark--v1.png' alt='' />}
                            </div>
                            <div className={`${page > 2 ? 'border-[1.5px] border-[#118577]' : "border border-gray-400"} w-[45%]`}></div>
                            <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${page >= 3 ? 'border-[#118577]' : 'border-gray-400'} relative ${page === 4 ? 'bg-[#118577]' : ''}`}>
                                {page === 3 ? <div className='w-2 h-2 bg-[#118577] rounded-full'></div> : <img src='https://img.icons8.com/material-rounded/24/ffffff/checkmark--v1.png' alt='' />}
                            </div>
                        </div>
                        <div className='flex justify-between font-semibold'>
                            <div className={`${page === 1 ? 'text-[#118577]' : page > 1 ? 'text-black' : 'text-gray-400'}`}>About you</div>
                            <div className={`${page === 2 ? 'text-[#118577]' : page > 2 ? 'text-black' : 'text-gray-400'}`}>Profile</div>
                            <div className={`${page === 3 ? 'text-[#118577]' : page > 3 ? 'text-black' : 'text-gray-400'}`}>Experience</div>
                        </div>
                    </div>
                    {/*form*/}
                    {page === 1 && <div className='w-full flex flex-col gap-5'>
                        <div className='flex bg-blue-50 px-5 text-sm py-3 rounded-md text-[#224F9C] items-start gap-2'>
                            <div className='mt-0.5'>
                                <svg class="h-5 w-5 text-navy-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#488BF0" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <div>
                                <div className='font-semibold'>Lovely to see you!</div>
                                <div>It just takes a few minutes to complete the form. We would be very interested in knowing more about your history and the specific reasons you would like to become a mentor. Communicate with us and your mentees directly and maintain a personal touch. Jargon and well-written cover letters are not needed here!</div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='font-medium'>Photo</div>
                            <div className='flex gap-10 items-center'>
                                <div className='w-20 h-20 rounded-full bg-slate-200/60'>
                                    {formData.profilePicture && <img src={formData.profilePicture} alt="" className='w-20 h-20 rounded-full' />}
                                </div>
                                <input type="file" accept='image/*' className='hidden' ref={imageRef} onChange={handleImageChange} name="" id="" />
                                <button onClick={() => imageRef.current.click()} className='flex gap-5 items-center border border-gray-300 p-2 rounded-md'> <img src="https://img.icons8.com/fluency-systems-regular/20/upload--v1.png" alt="" /> <span>Upload Photo</span></button>
                            </div>
                        </div>
                        <div className='flex w-full gap-5'>
                            <div className='flex flex-col gap-1 w-1/2'>
                                <div className='font-medium'>First name*</div>
                                <input type='text' className='outline-blue-600 border border-gray-300 text-sm p-2 rounded-md w-full' placeholder='John' value={formData.firstName} onChange={(e) => {
                                    setFormData({ ...formData, firstName: e.target.value })
                                }} />
                            </div>
                            <div className='flex flex-col gap-1 w-1/2'>
                                <div className='font-medium'>Last name*</div>
                                <input type='text' className='outline-blue-600 border border-gray-300 p-2 text-sm rounded-md w-full' placeholder='Wick' value={formData.lastName} onChange={(e) => {
                                    setFormData({ ...formData, lastName: e.target.value })
                                }} />
                            </div>
                        </div>
                        <div className='flex w-full gap-5'>
                            <div className='flex flex-col gap-1 w-1/2'>
                                <div className='font-medium'>Email*</div>
                                <input type='text' className='outline-blue-600 border border-gray-300 p-2 text-sm rounded-md w-full' value={formData.email} placeholder='john@gmail.com' onChange={(e) => {
                                    setFormData({ ...formData, email: e.target.value })
                                }} />
                            </div>
                            <div className='flex flex-col gap-1 w-1/2'>
                                <div className='font-medium'>Password*</div>
                                <input type='password' className='outline-blue-600 border border-gray-300 p-2 text-sm rounded-md w-full' placeholder='Enter your password...' value={formData.password}
                                    onChange={(e) => {
                                        setFormData({ ...formData, password: e.target.value })
                                    }} />
                            </div>
                        </div>
                        <div className='flex w-full gap-5'>
                            <div className='flex flex-col gap-1 w-1/2'>
                                <div className='font-medium'>Job Title*</div>
                                <input type='text' className='outline-blue-600 border border-gray-300 p-2 text-sm rounded-md w-full' placeholder='' value={formData.jobTitle} onChange={(e) => {
                                    setFormData({ ...formData, jobTitle: e.target.value })
                                }} />
                            </div>
                            <div className='flex flex-col gap-1 w-1/2'>
                                <div className='font-medium'>Company*</div>
                                <input type='text' className='outline-blue-600 border border-gray-300 p-2 text-sm rounded-md w-full' placeholder='' value={formData.company} onChange={(e) => {
                                    setFormData({ ...formData, company: e.target.value })
                                }} />
                            </div>
                        </div>
                    </div>}
                    {page === 2 && <div className='w-full flex flex-col gap-5'>
                        <div className='flex flex-col gap-1 w-[48.5%]'>
                            <div className='font-medium'>Category*</div>
                            <select name="" value={formData.category} id="" className='border-gray-400 border outline-blue-600 p-2 rounded-md' onChange={(e) => {
                                setFormData({ ...formData, category: e.target.value })
                            }}>
                                <option value="" selected hidden>Please Select...</option>
                                <option value="ux">UX & Design</option>
                                <option value="web">Web Development</option>
                                <option value="app">Android Development</option>
                                <option value="cp">Competitive Programming</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <div className='font-medium'>Skills*</div>
                            <div className='flex flex-wrap border gap-5 border-gray-400 h-max p-3 rounded-md'>
                                {formData.skills.map((skill, index) => (
                                    <div className='bg-[#DEF7EC] rounded-lg flex gap-2 items-center justify-center font-medium text-[#118577] px-2 text-sm' key={index}>
                                        {skill}
                                        <div className='text-gray-400 cursor-pointer' onClick={() => {
                                            formData.skills.splice(index, 1)
                                            setFormData({ ...formData })
                                        }}>x</div>
                                    </div>
                                ))}
                                <input onChange={(e) => {
                                    console.log(e.target.value)
                                    if (e.target.value.endsWith(',')) {
                                        e.target.value = e.target.value.slice(0, -1)
                                    }
                                }} onKeyDown={handleKeyDowm} type="text" className='w-[200px] outline-none text-sm' placeholder='Enter your skills...' />
                            </div>
                            <div className='text-gray-500 text-sm'>Describe your expertise to connect with mentees who have similar interests. Comma-separated list of your skills (keep it below 10). Mentees will use this to find you.</div>
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <div className='font-medium'>Bio*</div>
                            <textarea name="" id="" rows="5" value={formData.bio} onChange={(e) => setFormData({ ...formData, bio: e.target.value })} className='border-gray-400 border outline-blue-600 p-2 rounded-md resize-none'></textarea>
                            <div className='text-gray-500 text-sm'>Tell us (and your mentees) a little bit about yourself. Talk about yourself in the first person, as if you'd directly talk to a mentee. This will be public.</div>
                        </div>
                        <div className='flex w-full gap-5'>
                            <div className='flex flex-col gap-1 w-1/2'>
                                <div className='font-medium'>LinkedIn URL*</div>
                                <input type='text' className='outline-blue-600 border border-gray-300 p-2 text-sm rounded-md w-full' placeholder='' value={formData.linkedin} onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })} />
                            </div>
                            <div className='flex flex-col gap-1 w-1/2'>
                                <div className='font-medium'>Twitter Handle</div>
                                <input type='text' className='outline-blue-600 border border-gray-300 p-2 text-sm rounded-md w-full' placeholder='' value={formData.twitter} onChange={(e) => setFormData({ ...formData, twitter: e.target.value })} />
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 w-[48.5%]'>
                            <div className='font-medium'>Personal Website</div>
                            <input type='text' className='outline-blue-600 border border-gray-300 p-2 text-sm rounded-md w-full' placeholder='' value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} />
                            <div className='text-gray-500 text-sm'>You can add your blog, GitHub profile or similar here</div>
                        </div>
                    </div>}
                    {page === 3 && <div className='w-full flex flex-col gap-5'>
                        <div className='flex bg-blue-50 px-5 text-sm py-3 rounded-md text-[#224F9C] items-start gap-2'>
                            <div className='mt-0.5'>
                                <svg class="h-5 w-5 text-navy-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#488BF0" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <div>
                                <div className='font-semibold'>Almost there!</div>
                                <div>There's only one more step left to become a mentor and start interacting with mentees worldwide! This phase allows you to showcase your successes and your ability to assist others.
                                    While many of these fields are optional, filling them out will improve our understanding of your work and greatly raise your chances. Once you become a mentor, they also offer you a head start.</div>
                            </div>
                        </div>
                        <div className='flex w-full gap-5'>
                            <div className='flex flex-col gap-1 w-1/2'>
                                <div className='font-medium'>Intro Video</div>
                                <input type='text' className='outline-blue-600 border border-gray-300 p-2 text-sm rounded-md w-full' placeholder='' value={formData.introVideo} onChange={(e) => setFormData({ ...formData, introVideo: e.target.value })} />
                                <div className='text-gray-500 text-sm'>Add a YouTube video for your future mentees</div>
                            </div>
                            <div className='flex flex-col gap-1 w-1/2'>
                                <div className='font-medium'>Featured Article</div>
                                <input type='text' className='outline-blue-600 border border-gray-300 p-2 text-sm rounded-md w-full' placeholder='' value={formData.article} onChange={(e) => setFormData({ ...formData, article: e.target.value })} />
                                <div className='text-gray-500 text-sm'>Link an interview / podcast / piece of writing you are proud of or were featured in.</div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <div className='font-medium'>Why do you want to become a mentor? (Not publicly visible)*</div>
                            <textarea name="" id="" rows="5" value={formData.whyMentor} onChange={(e) => setFormData({ ...formData, whyMentor: e.target.value })} className='border-gray-400 border outline-blue-600 p-2 rounded-md resize-none'></textarea>
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <div className='font-medium'>What, in your opinion, has been your greatest achievement so far? (Not publicly visible)*</div>
                            <textarea value={formData.greatestAchievement} onChange={(e) => setFormData({ ...formData, greatestAchievement: e.target.value })} name="" id="" rows="5" className='border-gray-400 border outline-blue-600 p-2 rounded-md resize-none'></textarea>
                        </div>
                    </div>}
                    {page !== 4 && <div className='flex text-sm items-center'>
                        {page > 1 && <div className='w-full flex justify-start'>
                            <button onClick={() => setPage(p => p - 1)} className='text-white bg-blue-900 w-max py-2 px-3 rounded-md'>Previous Step</button>
                        </div>}
                        {page <3 && <div className='w-full flex justify-end'>
                            <button onClick={handleNext} className='text-white bg-blue-900 w-max py-2 px-3 rounded-md'>Next Step</button>
                        </div>}
                        {page === 3 && <div className='w-full flex justify-end'>
                            <button onClick={handleSubmit} className='text-white bg-blue-900 w-max py-2 px-3 rounded-md'>Submit Application</button>
                        </div>}
                    </div>}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Apply