import React from 'react'
import { Link } from 'react-router-dom'
import { CiLocationOn } from "react-icons/ci";
const Jobs = () => {
  const jobs=[
    {
      title:'Full stack developer',
      description:'Experience required in both frontend and backend technologies',
      type:'Full time',
      email:'hrFmintues@gmail.com',
      location:'Hyderabad',
    },
    {
      title:'Full stack developer',
      description:'Experience required in both frontend and backend technologies',
      type:'Full time',
      email:'hrFmintues@gmail.com',
      location:'Hyderabad',
    },
    {
      title:'Full stack developer',
      description:'Experience required in both frontend and backend technologies',
      type:'Full time',
      email:'hrFmintues@gmail.com',
      location:'Hyderabad',
    },
    {
      title:'Full stack developer',
      description:'Experience required in both frontend and backend technologies',
      type:'Full time',
      email:'hrFmintues@gmail.com',
      location:'Hyderabad',
    },
    {
      title:'Full stack developer',
      description:'Experience required in both frontend and backend technologies',
      type:'Full time',
      email:'hrFmintues@gmail.com',
      location:'Hyderabad',
    },
    {
      title:'Full stack developer',
      description:'Experience required in both frontend and backend technologies',
      type:'Full time',
      email:'hrFmintues@gmail.com',
      location:'Hyderabad',
    },
    {
      title:'Full stack developer',
      description:'Experience required in both frontend and backend technologies',
      type:'Full time',
      email:'hrFmintues@gmail.com',
      location:'Hyderabad',
    },
    {
      title:'Full stack developer',
      description:'Experience required in both frontend and backend technologies',
      type:'Full time',
      email:'hrFmintues@gmail.com',
      location:'Hyderabad',
    },
    {
      title:'Full stack developer',
      description:'Experience required in both frontend and backend technologies',
      type:'Full time',
      email:'hrFmintues@gmail.com',
      location:'Hyderabad',
    }
  ]
  return (
    <div className='min-h-screen flex flex-col  bg-black px-4 md:px-16 py-12 text-white'>
      <input type='text' placeholder='search jobs' className='px-4 border-2 mx-auto border-[#8C52FF] rounded-[10px] w-full md:w-[900px] h-[45px] bg-black mb-8'></input>
      <div className='flex justify-between gap-8'>
      <section className='hidden md:block border-r-2 border-[#8C52FF] px-2'>
      <h1 className='text-[23px] mb-4'>Filter by prefered location</h1>
      <div className='space-y-2'>
        {
          ['Hyderabad','Banglore','Mumbai','Kolkata','chennai'].map((item,idx)=>(
             <label className='flex gap-4 text-white items-center'>
          <input type='checkbox' className='w-[28px] h-[28px]'/>
          {item}
        </label>
          ))
        }
       
      </div>
      <h1 className='text-[23px] mt-8 mb-4'>Filter by job</h1>
       <div className='space-y-2'>
        {
          ['Software','Full stack developer','Frontend developer','Backend developer','UI/UX design','Devops developer','Java developer','python developer'].map((item,idx)=>(
             <label className='flex gap-4 text-white items-center'>
          <input type='checkbox' className='w-[28px] h-[28px]'/>
          {item}
        </label>
          ))
        }
       
      </div>
      </section>
      <section className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {
          jobs.map((item,idx)=>(
            <Link to='/jobDes'><div key={idx} className='space-y-2 border bg-[#8C52FF] hover:bg-black border-[#8C52FF] md:max-h-[200px] rounded-2xl p-2 md:p-8'>
              <h1 className='text-[23px] md:text-[28px] font-bold'>{item.title}</h1>
              <p className='text-[18px] md:text-[20px]'>{item.description}</p>
              <p className='flex gap-2 text-[18px]'>{item.type}<span className='flex items-center gap-1'><CiLocationOn className='text-white font-bold'/>{item.location}</span></p>
            </div></Link>
          ))
        }
      </section>
      </div>
    </div>
  )
}

export default Jobs