import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Profile from './Profile';
const Navbar = () => {
  const [profile,setProfile]=useState(false);
  return (
    <div className='bg-black'> 
    <div className='flex justify-between items-center bg-black px-4 md:px-8 py-4 border-b-2 border-[#8C52FF]'>
    <Link to={'/'}><h1 className='text-[23px] md:text-[32px] font-extrabold text-[#8C52FF] '>Job Portal</h1></Link> 
      <div className='flex justify-between gap-6 items-center'>
        <Link to='/'><p className='text-white hover:text-[#8C52FF] text-[20px] '>Home</p></Link>
        <Link to='/jobs'><p className='text-white hover:text-[#8C52FF] text-[20px]'>Jobs</p></Link>
        <div className='relative'>
           <Link to='/login'><p className='bg-[#8C52FF] text-white text-[20px] rounded-full px-4 py-1' onMouseOver={()=>setProfile(true)} onMouseLeave={()=>setProfile(false)}>Login</p></Link>
             {
    profile && <div className='bg-[#111111] space-y-2 absolute -left-[100px]  text-white  py-2 text-[18px] rounded-2xl' onMouseOver={()=>setProfile(true)} onMouseLeave={()=>setProfile(false)}>
     <p className='hover:bg-[#8C52FF] px-6'>profile</p>
     <p className='hover:bg-[#8C52FF]  px-6'>My Applications</p>
     <p className='hover:bg-[#8C52FF]  px-6'>saved jobs</p>
     <p className='hover:bg-[#8C52FF]  px-6'>Sign out</p>
      </div>
   }
        </div>
      
      </div>
    </div>
   
    </div>
  )
}

export default Navbar