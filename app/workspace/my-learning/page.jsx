import React from 'react'
import WelcomeBanner from '../__components/WelcomeBanner'
import EnrollCourseList from '../__components/EnrollCourseList'

const MyLearning = () => {
  return (
    <div className='p-10'>
        <WelcomeBanner/>
      <h2 className='font-bold text-2xl mt-5'>My Learning</h2>
      <EnrollCourseList/>
    </div>
  )
}

export default MyLearning
