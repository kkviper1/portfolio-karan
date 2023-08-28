import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import capsnet from '../../public/projects/capsnet.png'

const Publications = () => {
  return (
    <div id='publications' className='w-full'>
    <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase'>Publications</p>
        <h2 className='py-4'>{"What I've Reasearched"}</h2>
        <div className='grid md:grid-cols-2 gap-8'>

            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-800 rounded-xl p-4 group hover:bg-gradient-to-r from-[#080808] to-[#1d192e]'>
                <Image className='rounded-xl group-hover:opacity-10' src={capsnet} alt='/' />
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-2xl text-white tracking-wider text-center'>A Comparative Analysis of Classifiers for Image Classification</h3>
                    <p className='pb-4 pt-2 text-white text-center'>CapsNet</p>
                    <Link href={"capsnet"}>
                        <p className='text-center py-3 rounded-lg bg-gray-900 text-white font-bold text-lg cursor-pointer'>More Info</p>
                    </Link>
                </div>
            </div>



        </div>
    </div>

</div>
  )
}

export default Publications