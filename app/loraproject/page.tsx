import React from 'react'
import Navfloat from '../components/navfloat'
import Link from 'next/link'
import Image from 'next/image'
import inference from '../../public/projects/inference.png'

const page = () => {
  return (
    <div>
        <Navfloat/>
        
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-24'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest'>Project</p>
                <h2 className='py-4'>Implementing LORA framework on a Merged Diffusion Model for Image Synthesis</h2>
                <p className='py-2'>In this project, We have tried to explore and understand the working of state-of-art Diffusion models which are being widely used for image synthesis. In addition to this, we have also explored the area for merging two diffusion models with different parameters setting and weightage to build a merged diffusion model which exhibits the features of both the models. To enhance the experimentation further we have tried to implement the famous LORA framework on the merged diffusion model which helps in fine tuning of the model, along with reducing the computational power required to finetune a stable diffusion model in the general sense.</p>
                <Link href={"https://github.com/kkviper1/StableDiffusion_Asuka"}>
                <p className='py-2 underline cursor-pointer'>Github Link</p>
                </Link>
                <Link href="/#projects">
                            <p className='text-center py-3 rounded-lg bg-gray-900 text-white font-bold text-lg cursor-pointer'>Go Back</p>
                </Link>
            </div>

            <div className='w-full h-auto m-auto shadow-xl shadow-gray-800 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src={inference} alt='/'></Image>
            </div>
        </div>
    </div>
    </div>
  )
}

export default page