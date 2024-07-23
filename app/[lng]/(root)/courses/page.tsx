import TopBar from '@/components/shared/top-bar'
import React from 'react'
import AllCourses from './_components/AllCourses'

const Page = () => {
  return (
    <>
      <TopBar label={'allCourses'} description={'allCourseDescription'} />
      <AllCourses />
    </>
  )
}

export default Page