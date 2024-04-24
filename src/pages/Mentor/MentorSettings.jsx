import React, { useRef, useState } from 'react'
import Navbar from '../../components/Navbar'
import MentorSidebar from './MentorSidebar'
import Loader from '../../components/Loader'
import axios from "axios"

const MentorSettings = () => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({
    currPass: "",
    newPass: "",
    confirmPass: "",
  })
  const [page, setPage] = useState(1);
  const imageRef = useRef()
  const handleKeyDowm = (e) => {
    if (e.key === ',' || e.key === 'Enter') {
      console.log(e.target.value)
      setUser({ ...user, skills: [...user?.skills, e.target.value] })
      e.target.value = ''
    }
  }
  const handleChange = () => {
    //image to url
    const file = imageRef.current.files[0]
    const reader = new FileReader()
    reader.onloadend = () => {
      setUser({ ...user, image: reader.result })
    }
    reader.readAsDataURL(file)
  }

  const handleClick = async () => {
    try {
      await axios.patch('/api/mentor/update', user)
      alert("Profile Updated Successfully")
    } catch (err) {
      console.log(err)
      alert("Profile Update Failed")
    }
  };

  const handlePassChange = async () => {
    if (form.currPass === "" || form.newPass === "" || form.confirmPass === "") {
      alert("Please fill all the required fields");
    }
    else if (form.newPass !== form.confirmPass) {
      alert("Passwords do not match")
    }
    else {
      try {
        await axios.patch('/api/mentor/changePassword', { oldPassword: form.currPass, newPassword: form.newPass })
        alert("Password Changed Successfully")
      } catch (err) {
        console.log(err)
        alert("Invalid Password")
      }
    }
  }

  return (
    <div className='flex flex-col w-full h-screen'>
      <Navbar loggedIn={true} path={"mentor"} user={user} setUser={setUser} setLoading={setLoading} />
      <div className='h-full flex overflow-scroll'>
        <div>
          <MentorSidebar path={"settings"} user={user} />
        </div>
        {loading && <Loader />}
        <div className='flex flex-col items-center w-full overflow-scroll gap-5'>
          <div className=" flex gap-10 mt-2 w-[90%]">
            <div onClick={() => setPage(1)} className={`flex px-2 gap-1 items-center ${page === 1 && "text-[#21A391] border-b-2 border-[#21A391]"} font-medium  cursor-pointer`}>
              <h3>Profile</h3>
            </div>
            <div onClick={() => setPage(2)} className={`flex px-2 gap-1 items-center ${page === 2 && "text-[#21A391] border-b-2 border-[#21A391]"} font-medium  cursor-pointer`}>
              <h3>Subscription Billing</h3>
            </div>
            <div onClick={() => setPage(3)} className={`flex px-2 gap-1 items-center ${page === 3 && "text-[#21A391] border-b-2 border-[#21A391]"} font-medium  cursor-pointer`}>
              <h3>Balance</h3>
            </div>
            <div onClick={() => setPage(4)} className={`flex px-2 gap-1 items-center ${page === 4 && "text-[#21A391] border-b-2 border-[#21A391]"} font-medium  cursor-pointer`}>
              <h3>Password</h3>
            </div>
          </div>
          {(page === 1 && !loading) && <div className="flex flex-col items-center justify-center w-[90%]">
            <h1 className="text-[1.25rem] font-[700]">Your Profile</h1>
            <div className="my-2 w-full h-full border rounded-md py-2 border-gray-400">
              <div className=" flex flex-col items-start px-5 font-semibold ">
                <h2 className="">Personal Information</h2>
                <div className="flex flex-col w-full mx-2 mt-5 bg-[#f2f7ff] p-4  border rounded-md border-none">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 flex bg-[#488bf0] rounded-full p-1 items-center  justify-center">
                      <div className="text-white  text-sm">i</div>
                    </div>
                    <div className="text-[#2e71b6]">Tips</div>
                  </div>
                  <div className="flex flex-col ">
                    <div className="flex  items-center  gap-4 font-normal text-[#2e71b6]">
                      <div className="w-1 h-1 bg-[#2e71b6] rounded-full"></div>
                      Adding your photo and social media profiles helps mentors feel
                      confident that you’re a real person (e.g. not a bot).
                    </div>
                  </div>
                </div>
              </div>
              {/* photo */}
              <div className="flex flex-col items-start px-5 py-1 font-semibold gap-4">
                <div className="">Photo</div>
                <div className="flex items-center gap-4">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src={user?.profilePicture ? user?.profilePicture : "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"}
                    alt=""
                  />
                  <div className="border rounded-md p-1">
                    <input onChange={handleChange} accept="image/*" type="file" className="hidden" ref={imageRef} />
                    <button onClick={() => imageRef.current.click()} className="text-[#2e71b6]">Upload photo</button>
                  </div>
                </div>
                {/* first name and last name */}
                <div className="flex  items-start gap-4">
                  <div className="flex flex-col items-start gap-1">
                    <div className="">First Name</div>
                    <input
                      className="border rounded-md p-2 w-96 outline-blue-600"
                      type="text"
                      disabled
                      placeholder="First Name"
                      value={user?.firstName}
                      onChange={(e) => {
                        setUser({ ...user, firstName: e.target.value });
                      }}
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <div className="">Last Name</div>
                    <input
                      className="border rounded-md p-2 w-96 outline-blue-600"
                      type="text"
                      disabled
                      placeholder="Last Name"
                      value={user?.lastName}
                      onChange={(e) => {
                        setUser({ ...user, lastName: e.target.value });
                      }}
                    />
                  </div>
                </div>
                {/* email  and location*/}
                <div className="flex  items-start gap-4">
                  <div className="flex flex-col items-start gap-1">
                    <div className="">Email</div>
                    <input
                      className="border rounded-md p-2 w-96 outline-blue-600"
                      type="text"
                      disabled
                      placeholder="Email"
                      value={user?.email}
                      onChange={(e) => {
                        setUser({ ...user, email: e.target.value });
                      }}
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <div className="">Category</div>
                    <input
                      className="border rounded-md p-2 w-96 outline-blue-600"
                      type="text"
                      placeholder="Category"
                      value={user?.category}
                      onChange={(e) => {
                        setUser({ ...user, category: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <div className="flex  items-start gap-4">
                  <div className="flex flex-col items-start gap-1">
                    <div className="">Job Title</div>
                    <input
                      className="border rounded-md p-2 w-96 outline-blue-600"
                      type="text"
                      disabled
                      placeholder="Job Title"
                      value={user?.jobTitle}
                      onChange={(e) => {
                        setUser({ ...user, jobTitle: e.target.value });
                      }}
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <div className="">Company</div>
                    <input
                      className="border rounded-md p-2 w-96 outline-blue-600"
                      type="text"
                      placeholder="Company"
                      value={user?.company}
                      onChange={(e) => {
                        setUser({ ...user, company: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <div className='flex flex-col gap-1 w-full'>
                  <div className='font-medium'>Skills</div>
                  <div className='flex flex-wrap border w-[49rem] gap-5 h-max p-3 rounded-md'>
                    {user?.skills.map((skill, index) => (
                      <div className='bg-[#DEF7EC] rounded-lg flex gap-2 items-center justify-center font-medium text-[#118577] px-2 text-sm' key={index}>
                        {skill}
                        <div className='text-gray-400 cursor-pointer' onClick={() => {
                          user?.skills.splice(index, 1)
                          setUser({ ...user })
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
                </div>
                <div className="flex  items-start gap-4">
                  <div className="flex flex-col items-start gap-1">
                    <div className="">LinkedIn</div>
                    <input
                      className="border rounded-md p-2 w-96 outline-blue-600"
                      type="text"
                      placeholder="https://www.linkedin.com/"
                      value={user?.linkedin}
                      onChange={(e) => {
                        setUser({ ...user, linkedin: e.target.value });
                      }}
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <div className="">Twitter</div>
                    <input
                      className="border rounded-md p-2 w-96 outline-blue-600"
                      type="text"
                      placeholder="https://twitter.com/"
                      value={user?.twitter}
                      onChange={(e) => {
                        setUser({ ...user, twitter: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <div className="flex  items-start gap-4 ">
                  <div className="flex flex-col items-start gap-1">
                    <div className="">Bio</div>
                    <textarea
                      className="border rounded-md p-2 w-[49rem] h-60 outline-blue-600"
                      type="text"
                      placeholder=""
                      value={user?.bio}
                      onChange={(e) => {
                        setUser({ ...user, bio: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <div>
                  <button
                    className="bg-[#488bf0] text-white rounded-md p-2 "
                    onClick={handleClick}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
            <div className="mx-10 my-2   w-full h-full border rounded-md border-gray-400">
              <div className=" flex flex-col items-start p-5 font-semibold ">
                <h2>Choose Your Account</h2>
              </div>
              <div className="flex flex-col items-start px-5 font-normal ">
                Once you delete your account, there’s no going back. Please be
                certain!
              </div>
              {/* delete button */}
              <div className="flex flex-col items-start p-5 font-normal ">
                <button className="bg-red-500 text-white rounded-md p-2 ">
                  Delete Account
                </button>
              </div>
            </div>
          </div>}
          {page === 4 && <div className="flex flex-col gap-5 h-full items-center justify-center">
            <h2 className="text-3xl font-semibold">Change Password</h2>
            <div className="flex flex-col gap-5 w-[400px] rounded-md bg-gray-200 shadow-md p-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="currentPassword" className="font-semibold">Current Password</label>
                <input onChange={(e) => { setForm({ ...form, currPass: e.target.value }) }} type="password" className="border rounded-md p-2 outline-none" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="newPassword" className="font-semibold">New Password</label>
                <input onChange={(e) => { setForm({ ...form, newPass: e.target.value }) }} type="password" className="border rounded-md p-2 outline-none" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="confirmPassword" className="font-semibold">Confirm Password</label>
                <input onChange={(e) => { setForm({ ...form, confirmPass: e.target.value }) }} type="password" className="border rounded-md p-2 outline-none" />
              </div>
              <button onClick={handlePassChange} type="button" className="bg-[#488bf0] text-white rounded-md p-2 w-[200px]">Change Password</button>
            </div>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default MentorSettings