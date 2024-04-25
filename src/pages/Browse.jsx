import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from "axios"
import SearchIcon from '@mui/icons-material/Search';
import NorthIcon from '@mui/icons-material/North';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SouthIcon from '@mui/icons-material/South';
import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select } from '@mui/material';
import Loader from '../components/Loader';
import BrowseCard from '../components/BrowseCard';

const Browse = () => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)
  const [loggedIn, setLoggedIn] = useState()
  const [mentors, setMentors] = useState([])

  const [filterSkills, setFilterSkills] = useState("")
  // const ITEM_HEIGHT = 48;
  // const ITEM_PADDING_TOP = 8;
  // const MenuProps = {
  //   PaperProps: {
  //     style: {
  //       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
  //       width: 250,
  //       marginLeft: 70
  //     },
  //   },
  // };

  const [increasing, setIncreasing] = useState(true)

  const handleChange = (event) => {
    setFilterSkills(event.target.value);
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get(`/api/mentee`, { withCredentials: true })
        console.log(data)
        setUser(data)
        setLoggedIn(true)
      }
      catch (err) {
        console.log(err)
      }
    }
    getUser()
  }, [setUser])

  useEffect(() => {
    const getMentors = async () => {
      try {
        const { data } = await axios.get(`/api/mentor/mentors?skills=${filterSkills.replace(' ', ",")}`, { withCredentials: true })
        console.log(data)
        setMentors(data)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    getMentors()
  }, [filterSkills])

  return (
    <div className='flex flex-col gap-5 pb-5'>
      <Navbar loggedIn={loggedIn} path={'browse'} user={user} setUser={setUser} setLoading={setLoading} />
      {loading && <Loader />}
      {!loading && <div className='flex flex-col px-20'>
        <div className='flex flex-col'>
          <div className='flex flex-col gap-3 border-b border-gray-300 pb-5'>
            <div className='flex gap-10'>
              <div className='w-max flex justify-between border border-gray-400 rounded-md p-2'>
                <input value={filterSkills} onChange={handleChange} className='w-[350px] outline-none' type="text" placeholder='Search by skill' />
                <SearchIcon className='text-[#118577]' />
              </div>
              <div onClick={() => setIncreasing(!increasing)} className='flex w-max cursor-pointer gap-3 border border-gray-300 rounded-md items-center px-5'>
                <span>Price</span>
                {increasing ? <NorthIcon className='text-gray-500' /> : <SouthIcon className='text-gray-500 ' />}
              </div>
            </div>
            {/* <div className='flex gap-10'>
            <div>
            <FormControl sx={{ m: 1, width: 100 }}>
            <InputLabel id="demo-multiple-checkbox-label">Skills</InputLabel>
            <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={filterSkills}
            onChange={handleChange}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.length > 0 ? selected.length + ' skills' : "Skills"}
            MenuProps={MenuProps}
            >
            {skills.map((name) => (
              <MenuItem key={name} value={name}>
              <Checkbox checked={filterSkills.indexOf(name) > -1} />
              <ListItemText primary={name} />
              </MenuItem>
            ))}
                </Select>
              </FormControl>
            </div>
            </div> */}
            {filterSkills.length > 0 && <div onClick={() => setFilterSkills("")} className='cursor-pointer font-semibold'><HighlightOffIcon /> Reset Filters</div>}
          </div>
          <div className='flex flex-col w-full gap-10 justify-center items-center mt-5'>
            {mentors.map((mentor, index) => (
              <BrowseCard mentor = {mentor} key={index} />
            ))}
          </div>
        </div>
      </div>}
    </div>
  )
}

export default Browse