import Image from 'next/image'
import React from 'react'

const WelcomeBanner = () => {
  return (
    <div className='flex gap-5 bg-white items-center rounded-xl p-5'>
        <Image src="/panda.jpeg" alt='panda' width={100} height={100} />
        <div className="gap">
            <h2 className='font-bold text-[27px]'>Welcome to <span className='text-primary text-[30px]'>Learnwise</span> Academy </h2>
            <h2 className='text-gray-500'>Explore,Learn And Built All the Real Life Projects</h2>
        </div>
    </div>
  )
}

export default WelcomeBanner