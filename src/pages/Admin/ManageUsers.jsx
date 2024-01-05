import React, { useState } from 'react'
import AdminNavbar from './AdminNavbar'
import AdminSidebar from './AdminSidebar'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { DataGrid } from '@mui/x-data-grid';
import Tooltip from '@mui/material/Tooltip';

const ManageUsers = () => {
    const [alignment, setAlignment] = React.useState('mentees');

    const handleChange = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
            console.log(rows,mentee,mentor)
            if (newAlignment === 'mentees') {
                setRows(mentee)
            }
            else {
                setRows(mentor)
            }
        }
    };

    const [mentee, setMentee] = useState([
        { id: 1, firstName: 'Snow', lastName: 'Jon', email: 'snowjon@gmail.com', registeredOn: '14th july 2024', status: 'verified' },
        { id: 2, firstName: 'Lannister', lastName: 'Cersei', email: 'lannister@gmail.com', registeredOn: '14th july 2024', status: 'verified' },
        { id: 3, firstName: 'Lannister', lastName: 'Jaime', email: 'jamie@gmail.com', registeredOn: '14th july 2024', status: 'inactive' },
        { id: 4, firstName: 'Stark', lastName: 'Arya', email: 'stark@gmail.com', registeredOn: '14th july 2024', status: 'verified' },
        { id: 5, firstName: 'Targaryen', lastName: 'Daenerys', email: 'childe@gmail.com', registeredOn: '14th july 2024', status: 'pending' },
        { id: 6, firstName: 'Melisandre', lastName: 'Sony', email: 'sony2@gmail.com', registeredOn: '14th july 2024', status: 'inactive' },
    ])
    const [rows, setRows] = useState(mentee)
    const [mentor, setMentor] = useState([
        { id: 1, firstName: 'Snow', lastName: 'Jon', email: 'snowjon@gmail.com', registeredOn: '14th july 2024', status: 'active' },
        { id: 2, firstName: 'Lannister', lastName: 'Cersei', email: 'lannister@gmail.com', registeredOn: '14th july 2024', status: 'active' },
        { id: 3, firstName: 'Lannister', lastName: 'Jaime', email: 'jamie@gmail.com', registeredOn: '14th july 2024', status: 'inactive' },
        { id: 4, firstName: 'Stark', lastName: 'Arya', email: 'stark@gmail.com', registeredOn: '14th july 2024', status: 'active' },
        { id: 5, firstName: 'Targaryen', lastName: 'Daenerys', email: 'childe@gmail.com', registeredOn: '14th july 2024', status: 'pending' },
        { id: 6, firstName: 'Melisandre', lastName: 'Sony', email: 'sony2@gmail.com', registeredOn: '14th july 2024', status: 'inactive' },
    ])

    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'firstName', headerName: 'First name', flex: 1 },
        { field: 'lastName', headerName: 'Last name', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1 },
        {
            field: 'action', headerName: 'Action', width: 150, renderCell: ({ id }) => {
                return (
                    <div className='flex gap-2'>
                        <button className='bg-[#118577] text-white rounded-md px-2 py-1'>View</button>
                        <button onClick={() => {
                            if(alignment==='mentees'){
                                const newMentee = mentee.filter((value) => {
                                    return value.id !== id
                                })
                                setMentee(newMentee)
                                setRows(newMentee)
                                console.log(mentee)
                            }
                            else{
                                const newMentor = mentor.filter((value) => {
                                    return value.id !== id
                                })
                                setMentor(newMentor)
                                setRows(newMentor)
                                console.log(mentor)
                            }
                        }} className='bg-[#118577] text-white rounded-md px-2 py-1'>Delete</button>
                    </div>
                )

            }
        },
        {
            field: 'status', headerName: 'Status', align: 'left', renderCell: ({ row: { status } }) => {
                return (
                    <Tooltip title={status} placement='right'>
                        <div className={`${(status === "verified" || status === "active") ? "bg-green-600" : status === 'inactive' ? "bg-gray-400" : "bg-orange-400"} w-3 h-3 rounded-full`} />
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
                    </ToggleButtonGroup>
                    <div className='h-[75vh] w-full'>
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
        </div>
    )
}

export default ManageUsers