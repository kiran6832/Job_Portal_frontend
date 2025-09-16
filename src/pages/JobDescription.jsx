import React from 'react'

const JobDescription = () => {
  return (
    <div className='min-h-screen bg-black'>
      <div className='bg-[#8C52FF] flex justify-center items-center h-[300px]'>
        <h1 className='text-center font-bold text-[45px]'>Job Details</h1>
      </div>
        <div className='bg-[#111111] rounded-2xl mx-16 px-8 py-6 mt-12'>
          <h className='text-white font-bold text-[28px]'>Full stack developer</h>
         
            
        </div>
        <div className='bg-[#111111] space-y-2 rounded-2xl mx-16 px-8 py-6 mt-2'>
          <h1 className='text-white font-bold text-[20px]'>About Job: <span className='font-normal'>Experience required in both frontend and backend technologies</span></h1>
          <h1 className='text-white font-bold text-[20px]'>Education: <span className='font-normal'>Bachelors degree in computer science or BE in computers 2024/2025 passouts</span></h1>
          <h1 className='text-white font-bold text-[20px]'>Required skills: <span className='font-normal'>React,Node js,Express js,REST API,Mongo DB and CI/CD etc</span></h1>
          <h1 className='text-white font-bold text-[20px]'>Employment Type: <span className='font-normal'>Full Time, Permanent</span></h1>
          <h1 className='text-white font-bold text-[20px]'>About Company:<span className='font-normal'> Write software documentation guides & develop assistance tools
User requirements: Analyze user requirements & define site objectives
Troubleshooting: Resolve issues & ensure programs function</span></h1>
          <div className='flex gap-6'>
            <button className='border border-[#8C52FF] hover:bg-[#8C52FF] text-[20px] px-6 py-2 text-white rounded-full'>save job</button>
            <button className='bg-[#8C52FF] text-[20px] px-6 py-2 text-white rounded-full'>Apply job</button>
            
          </div>
            
        </div>
    </div>
  )
}

export default JobDescription