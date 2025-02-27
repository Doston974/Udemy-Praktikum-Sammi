"use client"

import Logo from '@/components/shared/Logo'
import ModeToggle from '@/components/shared/mode-toggle'
import { Button } from '@/components/ui/button'
import { navLinks } from '@/constants'
import { LogIn, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import GlogalSearch from './global-search'
import LanguageDropdown from '@/components/shared/language-dropdown'
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs'
import UserBox from '@/components/shared/user-box'
import useTranslate from '@/hooks/use-translate'
import Mobile from './mobile'
import { useParams, usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const Navbar = () => {
    const t = useTranslate()
    const pathname = usePathname()
    const { lng } = useParams()

    return (
        <div className='fixed inset-0 z-40 h-20 bg-background/70 backdrop-blur-xl'>
            <div className='container mx-auto flex h-full max-w-7xl items-center justify-between border-b'>
                <div className='flex items-center gap-4'>
                    <Logo />
                    <div className='md:flex hidden items-center gap-3 border-l pl-2'>
                        {navLinks.map(nav => (
                            <Link
                                href={`/${nav.route}`}
                                key={nav.route}
                                className={cn(
                                    'font-medium hover:text-blue-500 hover:underline transition-all',
                                    pathname === `/${lng}/${nav.route}` && "text-blue-500"
                                )}
                            >
                                {t(nav.name)}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-2 md:border-r md:pr-3'>
                        <div className='md:flex hidden'>
                            <GlogalSearch />
                            <LanguageDropdown />
                            <Button size={"icon"} variant={"ghost"}>
                                <ShoppingCart />
                            </Button>
                        </div>
                        <Mobile />
                        <ModeToggle />
                    </div>

                    <SignedIn>
                        <UserBox />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode='modal' >
                            <Button
                                variant={"ghost"}
                                size={"lg"}
                                rounded={"full"}
                                className='hidden md:flex'
                            >
                                {t("logIn")}
                            </Button>
                        </SignInButton>
                        <SignUpButton mode='modal'>
                            <Button
                                size={"lg"}
                                rounded={"full"}
                                className='hidden md:flex'
                            >
                                {t("signUp")}
                            </Button>
                        </SignUpButton>
                        <SignInButton mode='modal'>
                            <Button
                                size={"icon"}
                                variant={"ghost"}
                                className='md:hidden'
                            >
                                <LogIn />
                            </Button>
                        </SignInButton>
                    </SignedOut>
                </div>
            </div>
        </div>
    )
}

export default Navbar