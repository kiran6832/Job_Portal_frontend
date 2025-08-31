import React from 'react'
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='md:flex items-center justify-between px-4 md:px-16 py-16 bg-black text-white border-t-2 border-[#8C52FF]'>
    <div>
        <h1 className='text-[32px] text-[#8C52FF] font-extrabold'>Job Portal</h1>
    </div>
    <div className='md:flex justify-between space-y-4 md:gap-16'>
        <div>
          <h4 className='text-[28px] font-extrabold'>Support</h4>
          <ul className='text-[20px] space-y-2'>
            <li >kailasnagar,padakandla village,Nandyal dist,Andhra Pradesh</li>
            <li>mkirankumar6839@gmail.com</li>
            <li>+91 7997589153</li>
          </ul>
        </div>
        <div>
          <h4 className='text-[28px] font-extrabold'>Quick Links</h4>
          <ul className='text-[20px]  space-y-2'>
            <li>
              Home
            </li>
            <li >
              Jobs
            </li>
              <li>
                Dashboard
              </li>
          </ul>
        </div>
        <div>
          <h4 className='text-[28px] font-extrabold'>Follow Us</h4>
          <ul className='text-[20px]  space-y-2'>
            <li className='flex items-center gap-4'>
                <span>
                  <FaSquareXTwitter />
                </span>
                <span>Twitter (X)</span>
            </li>
            <li className='flex items-center gap-4'>
                <span>
                  <FaSquareInstagram />
                </span>
                <span>Instagram</span>
            </li>
            <li className='flex items-center gap-4'>
                <span>
                  <FaYoutube />
                </span>
                <span>Youtube</span>
            </li>
            <li className='flex items-center gap-4'>
                <span>
                  <FaLinkedin />
                </span>
                <span>LinkedIn</span>
              
            </li>
          </ul>
        </div>
    </div>
    </div>
  )
}

export default Footer