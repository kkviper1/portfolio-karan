import React from 'react'
import Navfloat from '../components/navfloat'
import Link from 'next/link'
import Image from 'next/image'
import capsnet from "../../public/projects/capsnet.png"

const page = () => {
  return (
    <div>
        <Navfloat/>
        
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest'>Publication</p>
                <h2 className='py-4'>A Comparative Analysis of Classifiers for Image Classification</h2>
                <p className='py-2'>Image classification is a supervised learning method used to classify images. There is a challenge in today's world that Image classification is complex and can be solved using machine learning algorithms. The paper focuses on these tasks using classical machine learning algorithms namely K-Nearest Neighbour (KNN), Multi-Layered Perceptron (MLP) and Random Forest classifier (RF). A comparative analysis is performed on the dataset on the parameters of accuracy, time complexity, F1 score, recall and precision. It is observed that MLP has the highest accuracy of 89.57% followed by random forests having accuracy of 89.2% and lastly a KNN model with an accuracy of 85.87%. Further, it is observed that RF has the lowest time complexity of 34.89 seconds followed by KNN having time complexity of 106.92 seconds and lastly MLP having time complexity of 521.78 second per 100 epochs. This paper can help to realize the potential of neural networks in classification-based tasks where non binary classifications are required which is a typical expectation when real world data is considered.</p>
                <Link href={"https://ieeexplore.ieee.org/abstract/document/9058042"}>
                <p className='py-2 underline cursor-pointer'>IEEE Link</p>
                </Link>
                <p>DOI:10.1109/Confluence47617.2020.9058042</p>
                <Link href="/#publications">
                            <p className='text-center py-3 rounded-lg bg-gray-900 text-white font-bold text-lg cursor-pointer'>Go Back</p>
                </Link>
            </div>

            <div className='w-full h-auto m-auto shadow-xl shadow-gray-800 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src={capsnet} alt='/'></Image>
            </div>
        </div>
    </div>
    </div>
  )
}

export default page