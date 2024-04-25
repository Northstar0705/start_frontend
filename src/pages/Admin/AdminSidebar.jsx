import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventIcon from '@mui/icons-material/Event';
import { useNavigate } from "react-router-dom";

const AdminSidebar = ({ path, user }) => {
  const navigate = useNavigate();
  const handleLogOut = () =>{
    
  }
  return (
    <div className='bg-[#172e59] w-[300px] h-[92vh] flex flex-col justify-between'>
      <div className="flex flex-col gap-2">
        <div onClick={() => navigate('/admin/dashboard')} className={`${path !== 'dashboard' ? "bg-none" : "bg-[#118577]"} text-white flex w-full px-5 py-2 cursor-pointer`}>
          <DashboardIcon />
          <div className="ml-2">Dashboard</div>
        </div>
        <div
          onClick={() => navigate("/admin/users")}
          className={`${path !== "users" ? "bg-none" : "bg-[#118577]"
            } text-white flex w-full px-5 py-2 cursor-pointer`}
        >
          <ManageAccountsIcon />
          <div className="ml-2">Manage Users</div>
        </div>
        <div
          onClick={() => navigate("/admin/applications")}
          className={`${path !== "applications" ? "bg-none" : "bg-[#118577]"
            } text-white flex w-full px-5 py-2 cursor-pointer`}
        >
          <AssignmentIndIcon />
          <div className="ml-2">Mentorship Applications</div>
        </div>
        <div
          onClick={() => navigate("/admin/calendar")}
          className={`${path !== "calender" ? "bg-none" : "bg-[#118577]"
            } text-white flex w-full px-5 py-2 cursor-pointer`}
        >
          <CalendarMonthIcon />
          <div className="ml-2">Calendar</div>
        </div>
        <div
          onClick={() => navigate("/admin/event")}
          className={`${path !== "event" ? "bg-none" : "bg-[#118577]"
            } text-white flex w-full px-5 py-2 cursor-pointer`}
        >
          <EventIcon />
          <div className="ml-2">Events</div>
        </div>
      </div>
      <div className='px-5 py-1 text-white border-t border-gray-500 flex flex-col gap-3'>
        <div className='flex flex-col'>
          <span className='font-normal'>Signed in as</span>
          <span className='font-bold'>{user?.email}</span>
        </div>
        <span onClick={handleLogOut} className='text-rose-500 font-normal cursor-pointer'>Sign Out</span>
      </div>
    </div>
  );
};

export default AdminSidebar;
