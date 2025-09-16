import React from 'react'
import Hero from '../compontents/Hero'
import TopOprotunities from '../compontents/TopOprotunities'
import Working from '../compontents/Working'
import Marquee from 'react-fast-marquee';
const Home = () => {
  const companies=['Googel','Micro soft','TCS','HCL','TATA','Infosys','Netflix','Wippro','Deloite','Facebook','Meta','Accenture','Capgemini','Cognizant','EY','CGI','Lumel']
  return (
     <div className='bg-black  text-white'>
      <Hero/>
      <Marquee gradient={false} speed={50}>
       <div className='flex justify-between gap-8'>
        {
          companies.map((item,idx)=>(
              <p>{item}</p>
          ))
        }
     </div>
    </Marquee>
      <TopOprotunities/>
      <Working/>

    </div>
  )
}

export default Home