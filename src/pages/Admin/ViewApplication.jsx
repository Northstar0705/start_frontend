import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import AdminSidebar from './AdminSidebar'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';

const ViewApplication = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const data = {
        firstName: "Gaurav", lastName: "Rai", email: "gauravrai54152@gmail.com", jobTitle: "Frontend Developer", company: "Accenture", category: "Web Development", skills: ["cpp", "java", "HTML", "CSS", "React.js", "Node.js"], bio: "This is my Bio", profilePicture: "http://www.shadowsphotography.co/wp-content/uploads/2017/12/photography-01-800x400.jpg", linkedin: "https://www.linkedin.com/in/gaurav-rai-a48615209/",
        twitter: "", website: "https://github.com/gaurav3278", introVideo: "", article: "", whyMentor: "Because I want to help others", greatestAcheivement: "This is my greatest achievement"
    }
    return (
        <div className='flex flex-col w-full'>
            <AdminNavbar />
            <div className='flex w-full h-[92vh] overflow-scroll'>
                <div className=''>
                    <AdminSidebar path={'applications'} />
                </div>
                <div className='flex flex-col w-full p-5 h-[92vh] overflow-scroll'>
                    <div className='flex w-full items-center justify-between'>
                        <ArrowBackIcon className='text-gray-600 cursor-pointer' onClick={() => navigate('/admin/applications')} />
                        <h2 className='text-xl text-gray-600 font-medium'>Mentor Application</h2>
                        <div className='w-8 h-8 rounded-full flex'>
                            <img src={data.profilePicture} className='w-8 h-8 rounded-full' alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col w-full p-2 gap-3'>
                        <div className='text-lg text-gray-500 font-medium'>About</div>
                        <div className='flex flex-wrap gap-3'>
                            <div>
                                <div>First Name*</div>
                                <div className='border border-black min-w-[200px] rounded-md p-2'>{data.firstName}</div>
                            </div>
                            <div>
                                <div>Last Name*</div>
                                <div className='border border-black min-w-[200px] rounded-md p-2'>{data.lastName}</div>
                            </div>
                            <div>
                                <div>Email*</div>
                                <div className='border  border-black min-w-[200px] rounded-md p-2'>{data.email}</div>
                            </div>
                            <div>
                                <div>Job Title</div>
                                <div className='border border-black min-w-[200px] rounded-md p-2'>{data.jobTitle}</div>
                            </div>
                            <div>
                                <div>Company</div>
                                <div className='border border-black min-w-[200px] rounded-md p-2'>{data.company}</div>
                            </div>
                        </div>
                        <div>Profile</div>
                        <div className='flex gap-3 w-full'>
                            <div className=''>
                                <div>Category*</div>
                                <div className='border border-black min-w-[200px] rounded-md p-2'>{data.category}</div>
                            </div>
                            <div className='w-full'>
                                <div>Skills*</div>
                                <div className='border border-black w-full flex gap-2 rounded-md p-2'>
                                    {data.skills.map((skill, index) => (
                                        <div key={index} className='p-1 py-0 bg-[#118577] text-white'>{skill} </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div>
                                <div>Bio*</div>
                                <div className='border  border-black min-w-[200px] rounded-md p-2'>{data.bio}</div>
                            </div>
                            <div>
                                <div>LinkedIn URL*</div>
                                <div className='border border-black min-w-[200px] rounded-md p-2'>{data.linkedin}</div>
                            </div>
                            {data.twitter && <div>
                                <div>Twitter Handle</div>
                                <div className='border border-black min-w-[200px] rounded-md p-2'>{data.twitter}</div>
                            </div>}
                            {data.website && <div>
                                <div>Personal Website</div>
                                <div className='border border-black min-w-[200px] rounded-md p-2'>{data.website}</div>
                            </div>}
                            {data.introVideo && <div>
                                <div>Intro Video</div>
                                <div className='border border-black min-w-[200px] rounded-md p-2'>{data.introVideo}</div>
                            </div>}
                            {data.introVideo && <div>
                                <div>Featured Article</div>
                                <div className='border border-black min-w-[200px] rounded-md p-2'>{data.article}</div>
                            </div>}
                            <div>
                                <div>Why do you want to be a mentor?*</div>
                                <div className='border border-black min-w-[200px] rounded-md p-2'>{data.whyMentor}</div>
                            </div>
                            <div>
                                <div>Greatest Achievement*</div>
                                <div className='border border-black min-w-[200px] rounded-md p-2'>{data.greatestAcheivement}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default ViewApplication