import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import AdminSidebar from './AdminSidebar'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { DataGrid } from '@mui/x-data-grid';
import Tooltip from '@mui/material/Tooltip';
import axios from "axios"

const ManageUsers = () => {
    const [alignment, setAlignment] = React.useState('mentees');
    const [mentee, setMentee] = useState([])
    const [rows, setRows] = useState(mentee)
    const [mentor, setMentor] = useState([])
    const [admin, setAdmin] = useState([])

    useEffect(()=>{
        const getUsers = async () => {
            const {data} = await axios.get('http://localhost:5000/api/admin/users', {withCredentials: true})
            console.log(data)
            setMentee(data.mentee)
            setMentor(data.mentors)
            setAdmin(data.admin)
            setRows(data.mentee)
        }
        getUsers()
    },[])

    const columns = [
        { field: '_id', headerName: 'ID'},
        { field: 'firstName', headerName: 'First name', flex: alignment === "admin" ? 1 : "" },
        { field: 'lastName', headerName: 'Last name', flex: alignment === "admin" ? 1 : "" },
        { field: 'email', headerName: 'Email', flex: 1 },
        {
            field: 'action', headerName: 'Action', flex: 1, renderCell: ({ row: { _id } }) => {
                return (
                    <div className='flex gap-2'>
                        <button className='bg-[#118577] text-white rounded-md px-2 py-1'>View</button>
                        <button onClick={async() => {
                            try{
                                if (alignment === 'mentees') {
                                    await axios.delete(`http://localhost:5000/api/admin/mentee/${_id}`, {withCredentials: true})

                                    const newMentee = mentee.filter((value) => {
                                        return value._id !== _id
                                    })
                                    setMentee(newMentee)
                                    setRows(newMentee)
                                    console.log(mentee)
                                }
                                else {
                                    await axios.delete(`http://localhost:5000/api/admin/mentor/${_id}`, {withCredentials: true})
                                    const newMentor = mentor.filter((value) => {
                                        return value._id !==_id
                                    })
                                    console.log(newMentor)
                                    setMentor(newMentor)
                                    setRows(newMentor)
                                    console.log(mentor)
                                }
                            }catch(err){
                                console.log(err)
                            }
                        }} className='bg-[#118577] text-white rounded-md px-2 py-1'>Delete</button>
                        {alignment==="mentees" && <button onClick={async() => {
                            try{
                                await axios.patch(`http://localhost:5000/api/admin/addAdmin/${_id}`, {}, {withCredentials: true})
                                const value = mentee.filter(x => x._id ===_id)[0]
                                const newMentee = mentee.filter(x => x._id !==_id)
                                setMentee(newMentee)
                                setRows(newMentee)
                                setAdmin([...admin, value])
                            }catch(err){
                                console.log(err)
                            }
                        }} className='bg-[#118577] text-white rounded-md px-2 py-1'>Make Admin</button>}
                    </div>
                )

            }
        },
        {
            field: "role", headerName: 'Role', align: 'left', renderCell: ({ row: {_id } }) => {
                return (
                    alignment === "mentees" ? <div className='flex gap-2'>
                        <button className='bg-[#118577] text-white rounded-md px-2 py-1'>Mentee</button>
                    </div> : <div className='p-2 bg-[#118577] rounded-md text-white'>{alignment === "admin" ? "Admin" : "Mentor"}</div>
                )
            }
        }
    ]

    const handleChange = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
            console.log(rows, mentee, mentor, admin)
            if (newAlignment === 'mentees') {
                setRows([...mentee])
            }
            else if (newAlignment === 'mentors') {
                setRows([...mentor])
            }
            else {
                setRows([...admin])
            }
        }
    };

    return (
        <div className='flex flex-col w-full'>
            <AdminNavbar />
            <div className='flex w-full'>
                <div className=''>
                    <AdminSidebar path={'users'} />
                </div>
                <div className='flex flex-col gap-4 p-2 w-full'>
                    <ToggleButtonGroup
                        color='primary'
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                    >
                        <ToggleButton size='small' value="mentees">Mentees</ToggleButton>
                        <ToggleButton size='small' value="mentors">Mentors</ToggleButton>
                        <ToggleButton size='small' value="admin">Admin</ToggleButton>
                    </ToggleButtonGroup>
                    <div className='h-[75vh] w-full'>
                        <DataGrid getRowId={(row) => row._id} disableRowSelectionOnClick rowde checkboxSelection rows={rows} sx={{
                            '& .MuiDataGrid-cell:focus': {
                                outline: 'none'
                            }, '& .MuiDataGrid-cell:focus-within': {
                                outline: "none"
                            }, '& .MuiDataGrid-columnHeader:focus-within': {
                                outline: "none"
                            }
                        }} columns={columns} columnVisibilityModel={alignment === "admin" ? { action: false } : { action: true }} isRowSelectable={(data) => data.row !== undefined} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageUsers