import React from 'react'

const TopOprotunities = () => {
      const services = [
    {
      id: 1,
      service: "Software Development",
      description:
        "Innovative software development services to build, maintain, and upgrade applications, ensuring they meet the highest quality standards.",
    },
    {
      id: 2,
      service: "Web Development",
      description:
        "Comprehensive web development solutions from front-end design to back-end integration, delivering responsive and user-friendly websites.",
    },
    {
      id: 3,
      service: "Data Science",
      description:
        "Advanced data science services to analyze and interpret complex data, providing actionable insights and data-driven solutions.",
    },
    {
      id: 4,
      service: "Cloud Computing",
      description:
        "Reliable cloud computing services to manage, store, and process data efficiently, offering scalable and flexible cloud solutions.",
    },
    {
      id: 5,
      service: "DevOps",
      description:
        "DevOps services to streamline software development and operations, enhancing deployment efficiency and reducing time to market.",
    },
    {
      id: 6,
      service: "Mobile App Development",
      description:
        "Expert mobile app development for iOS and Android platforms, creating intuitive and engaging mobile experiences for your users.",
    },
  ];

  return (
    <div className='min-h-screen'>
    <h1 className=' text-white text-center text-[32px] md:text-[40px] font-bold my-8'>Top Oportunities</h1>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mx-4 md:mx-16 pb-24'>
        {
            services.map((item)=>(
                <div key={item.id} className='bg-[#111111] hover:bg-[#8C52FF] text-[#8C52FF] hover:text-white  py-2 md:py-8 px-2 md:px-6 rounded-[10px]'>
                    <h1 className='text-[23px] font-bold  '>{item.service}</h1>
                    <p className='text-[23px] text-white'>{item.description}</p>
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default TopOprotunities