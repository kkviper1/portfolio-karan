import React from 'react'
import {FcAbout} from 'react-icons/fc'
import {SiBookstack} from 'react-icons/si'
import {GoProject} from 'react-icons/go'
import {FaHome} from 'react-icons/fa'
import Link from 'next/link'

const Navfloat = () => {
    return (
        <div> 
            <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-[#202225] text-white shadow-lg'>
                <Link href='#home'>
                <SideBarIcon icon={<FaHome size='32'/>} text="Home"/>
                </Link>
                <hr/>
                <Link href='/#about'><SideBarIcon icon={<FcAbout size='32' />} text='About Me' /></Link>
                <Link href='/#projects'><SideBarIcon icon={<GoProject size='32'/>} text='Projects'/></Link>
                <SideBarIcon icon={<SiBookstack size='32'/>} text='Publications' />
            </div>
        </div>
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