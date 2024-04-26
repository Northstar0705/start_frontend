import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AssistantIcon from '@mui/icons-material/Assistant';
import EventIcon from '@mui/icons-material/Event';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip';
import axios from 'axios'

const MentorSidebar = ({ path, user }) => {
  const navigate = useNavigate()

  const handleClick = async () => {
    try {
      await axios.get('/api/auth/logout')
      navigate('/login')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={`${path === 'inquiries' ? "w-max" : "w-[300px]"} h-full flex flex-col bg-[#172e59] text-white justify-between`}>
      <div className='flex flex-col gap-2'>
        <div onClick={() => navigate("/mentor/dashboard")} className={`flex gap-2 p-2.5 ${path === "dashboard" && "bg-[#118577]"} cursor-pointer`}>
          {path === "inquiries" && <Tooltip title="Dashboard">
            <DashboardIcon />
          </Tooltip>}
          {path !== "inquiries" && <DashboardIcon />}
          {path !== "inquiries" && <span>Dashboard</span>}
        </div>
        <div onClick={() => navigate("/mentor/applications")} className={`flex gap-2 p-2.5 ${path === "application" && "bg-[#118577]"} cursor-pointer`}>
          {path === "inquiries" && <Tooltip title="Assignement">
            <AssignmentIndIcon />
          </Tooltip>}
          {path !== "inquiries" && <AssignmentIndIcon />}
          {path !== "inquiries" && <div>Assignment</div>}
        </div>
        <div onClick={() => navigate("/mentor/inquiries")} className={`flex gap-2 p-2.5 ${path === "inquiries" && "bg-[#118577]"} cursor-pointer`}>
          {path === "inquiries" && <Tooltip title="Inquiries">
            <AssistantIcon />
          </Tooltip>}
          {path !== "inquiries" && <AssistantIcon />}
          {path !== "inquiries" && <div>Inquiries</div>}
        </div>
        <div onClick={() => navigate("/mentor/addEvent")} className={`flex gap-2 p-2.5 ${path === "addEvent" && "bg-[#118577]"} cursor-pointer`}>
          {path === "inquiries" && <Tooltip title="Events">
            <EventIcon />
          </Tooltip>}
          {path !== "inquiries" && <EventIcon />}
          {path !== "inquiries" && <div>Add Events</div>}
        </div>
        <div onClick={() => navigate("/mentor/settings")} className={`flex gap-2 p-2.5 ${path === "settings" && "bg-[#118577]"} cursor-pointer`}>
          {path === "inquiries" && <Tooltip title="Settings">
            <SettingsIcon />
          </Tooltip>}
          {path !== "inquiries" && <SettingsIcon />}
          {path !== "inquiries" && <div>Settings</div>}
        </div>
      </div>
      {path !== "inquiries" && <div className='px-5 py-1 text-white border-t border-white flex flex-col gap-3'>
        <div className='flex flex-col'>
          <span className='font-normal'>Signed in as</span>
          <span className='font-bold'>{user?.email}</span>
        </div>
        <span onClick={handleClick} className='text-rose-500 cursor-pointer'>Sign Out</span>
      </div>}
      {path === "inquiries" && <div onClick={handleClick} className="flex justify-center w-full mb-10 rotate-180 cursor-pointer">{path === "inquiries" && <Tooltip title="Logout">
        <LogoutIcon />
      </Tooltip>}</div>}
    </div>
  )
}

export default MentorSidebar