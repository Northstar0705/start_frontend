import React from 'react'
import { useParams } from 'react-router-dom'

const ViewApplication = () => {
    const {id} = useParams()
    const data = {firstName:"Gaurav",lastName:"Rai",email:"gauravrai54152@gmail.com",jobTitle:"Frontend Developer",company:"Accenture",category:"Web Development",skills:["cpp","java","HTML","CSS","React.js","Node.js"],bio:"This is my Bio",profilePicture:"",linkedin:"https://www.linkedin.com/in/gaurav-rai-a48615209/",
    twitter:"",website:"https://github.com/gaurav3278",introVideo:"http://www.shadowsphotography.co/wp-content/uploads/2017/12/photography-01-800x400.jpg",article:"",whyMentor:"Because I want to help others",greatestAcheivement:""} 
    return (
        <div className='flex justify-center w-full'>
            <h2>Mentor Application</h2>

        </div>
    )
}

export default ViewApplication