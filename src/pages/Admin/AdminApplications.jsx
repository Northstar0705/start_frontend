import React, { useEffect, useState } from 'react'
import Navbar2 from '../../components/Navbar2'
import AdminSidebar from './AdminSidebar'
import { DataGrid } from '@mui/x-data-grid';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminApplications = () => {
    const navigate = useNavigate()
    const [rejected, setRejected] = useState(false)
    const [rejectedInd, setRejectedInd] = useState(0)
    const [rows, setRows] = useState([])
    useEffect(() => {
        const getApplications = async () => {
            const { data } = await axios.get('http://localhost:5000/api/admin/applications', { withCredentials: true })
            setRows(data)
        }
        getApplications()
    }, [])
    const columns = [
        { field: '_id', headerName: 'ID' },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        { field: 'email', headerName: 'Email', flex: 1 },
        {
            field: 'action', headerName: 'Action', flex: 1, renderCell: ({ row: { email, _id } }) => {
                return (
                    <div className='flex gap-2'>
                        <button onClick={() => navigate(`/admin/applications/${_id}`)} className='bg-[#118577] text-white rounded-md px-2 py-1'>View</button>
                        <button className='bg-[#118577] text-white rounded-md px-2 py-1' onClick={async () => {
                            try {
                                await axios.patch(`http://localhost:5000/api/admin/applications/${_id}`, {}, { withCredentials: true })
                                const newRows = rows.filter((value) => value.email !== email)
                                setRows(newRows)
                            } catch (err) {
                                console.log(err)
                            }
                        }}>Accept</button>
                        <button className='bg-[#118577] text-white rounded-md px-2 py-1' onClick={() => {
                            setRejected(true)
                            const ind = rows.indexOf(rows.find((value) => value.email === email))
                            setRejectedInd(ind)
                        }}>Reject</button>
                    </div>
                )
            }
        }
    ]
    return (
        <div className='flex flex-col w-full'>
            <Navbar2 path="mentor" />
            {rejected &&
                <div className='bg-gray-400/40 absolute z-20 flex w-screen h-screen items-center justify-center '>
                    <div className='bg-white rounded-md shadow-md w-[45%] flex flex-col px-5 py-2 gap-3'>
                        <p className='font-semibold text-xl w-full text-center'>Reason for Rejection</p>
                        <p>Please provide the reason for rejecting the mentorship application</p>
                        <TextField label='Reason' variant='outlined' />
                        <div className='w-full flex justify-end'>
                            <Button variant='text' color='primary' onClick={() => setRejected(false)}>Cancel</Button>
                            <Button variant='text' color='primary' onClick={async() => {
                                try{
                                    await axios.delete(`http://localhost:5000/api/admin/applications/${rows[rejectedInd]._id}`, {withCredentials: true})
                                    const newRows = rows.filter((value, ind) => ind !== rejectedInd)
                                    setRejected(false)
                                    setRows(newRows)
                                }catch(err){
                                    console.log(err)
                                }
                            }}>Submit</Button>
                        </div>
                    </div>
                </div>
            }
            <div className='flex w-full'>
                <div className=''>
                    <AdminSidebar path={'applications'} />
                </div>
                <div className='h-[75vh] w-full mt-2'>
                    <DataGrid getRowId={(row) => row._id} disableRowSelectionOnClick checkboxSelection rows={rows} sx={{
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

export default AdminApplications