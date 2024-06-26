import React from 'react'
import {FcAbout} from 'react-icons/fc'
import {SiBookstack} from 'react-icons/si'
import {GoProject} from 'react-icons/go'
import {FaHome} from 'react-icons/fa'
import Link from 'next/link'
//import { Collapse } from 'flowbite';
//import type { CollapseOptions, CollapseInterface } from 'flowbite';
//import type { InstanceOptions } from 'flowbite';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";


const Navfloat = () => {
    return (
        /** 
        <div> 
            <div className='fixed top-0 left-0 h-10 w-screen m-0 flex flex-col bg-[#202225] text-white shadow-lg'>
                <Link href='#home'>
                <SideBarIcon icon={<FaHome size='32'/>} text="Home"/>
                </Link>
                <hr/>
                <Link href='/#about'><SideBarIcon icon={<FcAbout size='32' />} text='About Me' /></Link>
                <Link href='/#projects'><SideBarIcon icon={<GoProject size='32'/>} text='Projects'/></Link>
                <Link href="/#publications"><SideBarIcon icon={<SiBookstack size='32'/>} text='Publications' /></Link> 
            </div>
        </div>
        */
       

            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">

            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black"></span>
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
               <a href='https://www.github.com/kkviper1'><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Github</button></a>
                <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <a href="/#home" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="/#about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                </li>
                <li>
                    <a href="/#projects" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</a>
                </li>
                <li>
                    <a href="/#publications" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Publications</a>
                </li>
                </ul>
            </div>
            </div>
            </nav> 

            /** 
            <Navbar fluid rounded>
            <NavbarBrand>
              <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-black">Flowbite React</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
              <NavbarLink href="/#home" active>
                Home
              </NavbarLink>
              <NavbarLink as={Link} href="/#About">
                About
              </NavbarLink>
              <NavbarLink href="/#projects">Projects</NavbarLink>
              <NavbarLink href="/#publications">Publications</NavbarLink>
            </NavbarCollapse>
          </Navbar> */

    )
}

const SideBarIcon = ({ icon, text = 'tooltip' }:{icon:any,text:any}) => (
    <div className='sidebar-icon group'>
        {icon}
        
        <span className='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
);

export default Navfloat