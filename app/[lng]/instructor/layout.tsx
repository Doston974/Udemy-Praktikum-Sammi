import { ChildProps } from '@/types'
import React from 'react'
import Navbar from './_components/Navbar'
import SideBar from './_components/SideBar'

const Layout = ({ children }: ChildProps) => {
    return (
        <>
            <Navbar />
            <SideBar />
            <main className="w-full pl-[320px] pt-[12vh]">
                <div className='size-full rounded-md bg-secondary px-4 pb-4'>
                    {children}
                </div>
            </main>
        </>
    )
}

export default Layout