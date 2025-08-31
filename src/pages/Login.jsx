import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='flex flex-col justify-center items-center px-4 md:px-0  bg-black min-h-screen'>
        <h1 className='text-[32px] text-center text-[#8C52FF] font-bold mb-4'>Login</h1>
        <form className='flex flex-col gap-4 justify-center  text-white md:w-[600px] bg-[#111111] shadow-xl p-4 md:p-12 rounded-xl'>
            <div>
            <label className='text-[23px]'>
                Email</label>
                <input type='text' className='bg-black border px-4 border-gray-300 rounded-lg w-full h-[45px]'></input>
            </div>
            <div>
            <label className='text-[23px]' >
                password </label>
                <input type='password' className='bg-black border px-4 border-gray-300 rounded-lg w-full h-[45px]'></input>
           </div>
           <p className='text-[18px] md:text-[23px]'>Do you have no account? Register<Link to='/register'><span className='text-[#8C52FF] underline'> here</span></Link></p>
            <button className='w-full h-[45px] bg-[#8C52FF] teat-white font-bold text-[23px] rounded-lg'>Login</button>
        </form>
    </div>
  )
}

export default Login