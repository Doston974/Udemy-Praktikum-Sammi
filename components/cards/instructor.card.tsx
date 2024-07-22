import Image from 'next/image'
import { IInstructor } from '@/types'


function InstructorCard(instructor: IInstructor) {
    return (

        <div className='flex flex-col space-y-1'>
            <div className='relative h-72 w-full'>
                <Image
                    src={instructor.image}
                    alt={instructor.name}
                    className='rounded-md  object-cover'
                    fill
                />
            </div>
            <h1 className='font-space-grotesk text-2xl font-bold'>
                {instructor.name}
            </h1>
            <div className='font-medium text-muted-foreground'>
                {instructor.job}
            </div>
        </div>

    )
}

export default InstructorCard