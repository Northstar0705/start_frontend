import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { useNavigate } from 'react-router-dom';

const AdminSidebar = ({path}) => {
  const navigate = useNavigate()
  return (
    <div className='bg-[#172e59] w-[300px] h-screen flex flex-col gap-2'>
      <div onClick={()=>navigate('/admin/dashboard')} className={`${path!=='dashboard'?"bg-none":"bg-[#118577]"} text-white flex w-full px-5 py-2 cursor-pointer`}>
        <DashboardIcon />
        <div className='ml-2'>Dashboard</div>
      </div>
      <div onClick={()=>navigate('/admin/users')} className={`${path!=='users'?"bg-none":"bg-[#118577]"} text-white flex w-full px-5 py-2 cursor-pointer`}>
        <ManageAccountsIcon />
        <div className='ml-2'>Manage Users</div>
      </div>
      <div onClick={()=>navigate('/admin/applications')} className={`${path!=='applications'?"bg-none":"bg-[#118577]"} text-white flex w-full px-5 py-2 cursor-pointer`}>
        <AssignmentIndIcon />
        <div className='ml-2'>Mentorship Applications</div>
      </div>
    </div>
  )
}

export default AdminSidebar