import React from 'react'
import WelcomeBanner from './_components/WelcomeBanner'

const Courses = () => {
  return (
    <div className="bg-red-500 grid grid-cols-1 md:grid-cols-3">
      <div className="col-span-2">
      <WelcomeBanner/>
      </div>
      <div>
        Right section
      </div>
    </div>
  )
}

export default Courses