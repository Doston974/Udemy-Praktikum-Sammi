import { ChildProps } from '@/types'
import React from 'react'
import Navbar from './_components/Navbar'
import Footer from './_components/Footer'

const Layout = ({ children }: ChildProps) => {
    return (
        <div>
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}

export default Layout