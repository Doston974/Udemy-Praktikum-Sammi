import Image from 'next/image'
import Link from 'next/link'

function Logo() {
    return (
        <Link href={'/'} className='flex items-center gap-2'>
            <Image src={'/logo.png'} alt='logo' width={70} height={70} />
            <h1 className='font-space-grotesk text-4xl font-bold'>Unicron</h1>
        </Link>
    )
}

export default Logo