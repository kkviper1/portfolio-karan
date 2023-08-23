import Image from 'next/image'
import Head from 'next/head'
import Navfloat from './components/navfloat'
import Main from './components/Main'
import About from './components/About'
import Projects from './components/Projects'


export default function Home() {
  return (
    <div>
   <head>
    <title>Karan Khanna | Portfolio </title>
   </head>
    <Navfloat />
    <Main/>
    <About/>
    <Projects/>
   </div>
  )
}
