import Image from 'next/image'
import Head from 'next/head'
import Navfloat from './components/navfloat'
import Main from './components/Main'
import About from './components/About'
import Projects from './components/Projects'
import Publications from './components/Publications'



export default function Home() {
  return (
    <div className='snap-y snap-mandatory'>
   <head>
    <title>Karan Khanna | Portfolio </title>
   </head>
    <Navfloat />
    <Main/>
    <About/>
    <Projects/>
    <Publications/>

   </div>
  )
}
