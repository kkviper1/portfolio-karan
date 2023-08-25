import Image from 'next/image'
import React from 'react'
import IELTS from '../../public/projects/IELTS.png'
import inference from '../../public/projects/inference.png'
import webd from '../../public/projects/webd.png'
import dota from '../../public/projects/dota.webp'
import toxicity from '../../public/projects/toxicity.jpg'
import Link from 'next/link'


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase'>Projects</p>
            <h2 className='py-4'>{"What I've Built"}</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-800 rounded-xl p-4 group hover:bg-gradient-to-r from-[#080808] to-[#1d192e]'>
                    <Image className='rounded-xl group-hover:opacity-10' src={IELTS} alt='/' />
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-2xl text-white tracking-wider text-center'>Automatic IELTS Essay Grading using Transformers and LLMs</h3>
                        <p className='pb-4 pt-2 text-white text-center'>Transformers/LLM</p>
                        <Link href={"ieltsproject"}>
                            <p className='text-center py-3 rounded-lg bg-gray-900 text-white font-bold text-lg cursor-pointer'>More Info</p>
                        </Link>
                    </div>
                </div>

                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-800 rounded-xl p-4 group hover:bg-gradient-to-r from-[#080808] to-[#1d192e]'>
                    <Image className='rounded-xl group-hover:opacity-10' src={inference} alt='/' />
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-2xl text-white tracking-wider text-center'>Implementing LORA framework on a Merged Diffusion Model for Image Synthesis</h3>
                        <p className='pb-4 pt-2 text-white text-center'>Stable Diffusion/LoRA</p>
                        <Link href='/loraproject'>
                            <p className='text-center py-3 rounded-lg bg-gray-900 text-white font-bold text-lg cursor-pointer'>More Info</p>
                        </Link>
                    </div>
                </div>

                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-800 rounded-xl p-4 group hover:bg-gradient-to-r from-[#080808] to-[#1d192e]'>
                    <Image className='rounded-xl group-hover:opacity-10' src={webd} alt='/' />
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-2xl text-white tracking-wider text-center'>Website Element Detection using Object Detection Models</h3>
                        <p className='pb-4 pt-2 text-white text-center'>YOLO/SSD/RCNN</p>
                        <Link href='/'>
                            <p className='text-center py-3 rounded-lg bg-gray-900 text-white font-bold text-lg cursor-pointer'>More Info</p>
                        </Link>
                    </div>
                </div>

                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-800 rounded-xl p-4 group hover:bg-gradient-to-r from-[#080808] to-[#1d192e]'>
                    <Image className='rounded-xl group-hover:opacity-10' src={dota} alt='/' />
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-2xl text-white tracking-wider text-center'>Esports Data Analysis Using Big Data Tools</h3>
                        <p className='pb-4 pt-2 text-white text-center'>Power BI/Tabluea</p>
                        <Link href='/'>
                            <p className='text-center py-3 rounded-lg bg-gray-900 text-white font-bold text-lg cursor-pointer'>More Info</p>
                        </Link>
                    </div>
                </div>

                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-800 rounded-xl p-4 group hover:bg-gradient-to-r from-[#080808] to-[#1d192e]'>
                    <Image className='rounded-xl group-hover:opacity-10' src={toxicity} alt='/' />
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-2xl text-white tracking-wider text-center'>Toxicity Detection in Online Games</h3>
                        <p className='pb-4 pt-2 text-white text-center'>Transformers</p>
                        <Link href='/'>
                            <p className='text-center py-3 rounded-lg bg-gray-900 text-white font-bold text-lg cursor-pointer'>More Info</p>
                        </Link>
                    </div>
                </div>


            </div>
        </div>

    </div>
  )
}

export default Projects