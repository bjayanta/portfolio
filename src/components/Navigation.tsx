'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { Button } from './ui/button';
import { LuDownload, LuMenu } from "react-icons/lu";
import { cn } from '@/lib/utils';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <nav className='py-4 border'>
            <div className='container flex justify-between items-center'>
                {/* Brand */}
                <Link href='/' className='flex items-center space-x-2'>
                    <Image
                        src="/images/logo-dark.svg"
                        alt="Next.js Logo"
                        width={40}
                        height={40}
                        priority
                    />

                    <span className='text-xl font-bold'>Jayanta</span>
                </Link>

                {/* Menu */}
                <ul className='hidden md:flex md:space-x-6 md:font-semibold'>
                    <li><Link href='/about-me' className='hover:text-blue-600'>About Me</Link></li>
                    <li><Link href='/skills' className='hover:text-blue-600'>Skills</Link></li>
                    <li><Link href='/projects' className='hover:text-blue-600'>Projects</Link></li>
                    <li><Link href='/contact-me' className='hover:text-blue-600'>Contact Me</Link></li>
                </ul>

                {/* Download */}
                <div className='hidden md:inline-block'>
                    <Button asChild>
                        <Link href="/doc/resume.pdf" target='_blank' download>
                            <span>Resume</span>
                            <LuDownload className='ml-2 w-4 h-4' />
                        </Link>
                    </Button>
                </div>

                {/* Responsive */}
                <div className='md:hidden'>
                    <Button variant={'link'} onClick={() => setIsOpen(!isOpen)}>
                        <LuMenu />
                    </Button>
                </div>
            </div>

            {/* Responsive menu */}
            <div className={cn('container mt-6 md:hidden', isOpen ? 'block' : 'hidden')}>
                <ul className='space-y-2'>
                    <li><Link href='/about-me' className='inline-flex w-full hover:text-blue-600'>About Me</Link></li>
                    <li><Link href='/skills' className='inline-flex w-full hover:text-blue-600'>Skills</Link></li>
                    <li><Link href='/projects' className='inline-flex w-full hover:text-blue-600'>Projects</Link></li>
                    <li><Link href='/contact-me' className='inline-flex w-full hover:text-blue-600'>Contact Me</Link></li>
                    <li><Link href="/doc/resume.pdf" className='inline-flex w-full hover:text-blue-600' target='_blank' download>Resume</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;
