
import Categories from './_components/Categories'
import FeaturedCourses from './_components/FeaturedCourses'
import Hero from './_components/Hero'
import Instructor from './_components/Instructor'
import LearningJourney from './_components/LearningJourney'

function Page() {

    return (
        <>
            <Hero />
            <FeaturedCourses />
            <Categories/>
            <Instructor/>
            <LearningJourney/>
        </>
    )
}

export default Page