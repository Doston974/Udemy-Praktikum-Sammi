import { courses } from '@/constants'
import InstructorCourseCard from '@/components/cards/instructor-course.card'
import Header from '../_components/Header'

function Page() {
  return (
    <>
      <Header title='My courses' description='Here are your latest courses' />
      <div className='mt-4 grid grid-cols-3 gap-4'>
        {courses.map((item, idx) => (
          <InstructorCourseCard key={item.title} {...item} />
        ))}
      </div>
    </>
  )
}

export default Page