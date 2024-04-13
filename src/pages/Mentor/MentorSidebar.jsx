import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AssistantIcon from '@mui/icons-material/Assistant';
import EventIcon from '@mui/icons-material/Event';
import SettingsIcon from '@mui/icons-material/Settings';
import {useNavigate} from 'react-router-dom'
const MentorSidebar = ({path}) => {
  const navigate = useNavigate()
  return (
    <div className="w-[300px] h-full flex flex-col bg-[#172e59] text-white justify-between">
      <div className='flex flex-col gap-2'>
        <div onClick={()=>navigate("/mentor/dashboard")} className={`flex gap-2 p-2.5 ${path==="dashboard" && "bg-[#118577]"} cursor-pointer`}>
          <DashboardIcon />
          <span>Dashboard</span>
        </div>
        <div onClick={()=>navigate("/mentor/applications")} className={`flex gap-2 p-2.5 ${path==="application" && "bg-[#118577]"} cursor-pointer`}>
          <AssignmentIndIcon />
          <div>Applications</div>
        </div>
        <div onClick={()=>navigate("/mentor/inquiries")} className={`flex gap-2 p-2.5 ${path==="inquiries" && "bg-[#118577]"} cursor-pointer`}>
          <AssistantIcon />
          <div>Inquiries</div>
        </div>
        <div onClick={()=>navigate("/mentor/addEvent")} className={`flex gap-2 p-2.5 ${path==="addEvent" && "bg-[#118577]"} cursor-pointer`}>
          <EventIcon />
          <div>Add Events</div>
        </div>
        <div onClick={()=>navigate("/mentor/settings")} className={`flex gap-2 p-2.5 ${path==="settings" && "bg-[#118577]"} cursor-pointer`}>
          <SettingsIcon />
          <div>Settings</div>
        </div>
      </div>
      <div className='px-5 py-1 text-white border-t border-white flex flex-col gap-3'>
        <div className='flex flex-col'>
          <span className='font-normal'>Signed in as</span>
          <span className='font-bold'>ayushraj0607@gmail.com</span>
        </div>
        <span className='text-rose-500 cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}

export default MentorSidebar