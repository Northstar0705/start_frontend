import React, { useState } from 'react'
import AdminNavbar from './AdminNavbar'
import AdminSidebar from './AdminSidebar'
import { DataGrid } from '@mui/x-data-grid';
import { Tooltip } from '@mui/material';

const MentorApllications = () => {
    const [rows, setRows] = useState([
        { id: 1, firstName: 'Snow', lastName: 'Jon', email: 'snowjon@gmail.com', status: 'pending' },
        { id: 2, firstName: 'Lannister', lastName: 'Cersei', email: 'lannister@gmail.com', status: 'pending' },
        { id: 3, firstName: 'Lannister', lastName: 'Jaime', email: 'jamie@gmail.com', status: 'pending' },
        { id: 4, firstName: 'Stark', lastName: 'Arya', email: 'stark@gmail.com', status: 'pending' },
        { id: 5, firstName: 'Targaryen', lastName: 'Daenerys', email: 'childe@gmail.com', status: 'pending' },
        { id: 6, firstName: 'Melisandre', lastName: 'Sony', email: 'sony2@gmail.com', status: 'pending' },
    ])
    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'firstName', headerName: 'First name', width:130},
        { field: 'lastName', headerName: 'Last name', width:130},
        { field: 'email', headerName: 'Email', flex: 1 },
        {
            field: 'action', headerName: 'Action', flex:1, renderCell: ({ row:{email} }) => {
                return (
                    <div className='flex gap-2'>
                        <button className='bg-[#118577] text-white rounded-md px-2 py-1'>View</button>
                        <button className='bg-[#118577] text-white rounded-md px-2 py-1' onClick={()=>{
                            const ind = rows.indexOf(rows.find((value)=>value.email===email))
                            console.log(email)
                            rows[ind].status = 'accepted'
                            setRows([...rows])
                        }}>Accept</button>
                        <button className='bg-[#118577] text-white rounded-md px-2 py-1' onClick={()=>{
                            const ind = rows.indexOf(rows.find((value)=>value.email===email))
                            rows[ind].status = 'rejected'
                            setRows([...rows])
                            console.log(rows)
                        }}>Reject</button>
                    </div>
                )
            }
        },
        {
            field: 'status', headerName: 'Status', align: 'left', renderCell: ({ row: { status } }) => {
                return (
                    <Tooltip title={status} placement='right'>
                        <div className={`${(status === "accepted") ? "bg-green-600" : status === 'pending' ? "bg-orange-400" : "bg-red-600"} w-3 h-3 rounded-full`} />
                    </Tooltip>
                )
            }
        }

    ]
    return (
        <div className='flex flex-col w-full'>
            <AdminNavbar />
            <div className='flex w-full'>
                <div className=''>
                    <AdminSidebar path={'applications'} />
                </div>
                <div className='h-[75vh] w-full mt-2'>
                    <DataGrid disableRowSelectionOnClick checkboxSelection rows={rows} sx={{
                        '& .MuiDataGrid-cell:focus': {
                            outline: 'none'
                        }, '& .MuiDataGrid-cell:focus-within': {
                            outline: "none"
                        }, '& .MuiDataGrid-columnHeader:focus-within': {
                            outline: "none"
                        }
                    }} columns={columns} />
                </div>
            </div>
        </div>
    )
}

export default MentorApllications