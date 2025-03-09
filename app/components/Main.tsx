import { FaGithub, FaLinkedin } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
import Link from "next/link"

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center snap-start">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-white">Welcome to my Portfolio</p>
          <h1>Karan Khanna</h1>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-800 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <Link href="https://www.linkedin.com/in/karan-khanna-74191185/">
                <FaLinkedin />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-800 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <Link href="https://github.com/kkviper1">
                {" "}
                <FaGithub />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-800 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <Link href="mailto:karan.khanna@georgebrown.ca">
                <AiOutlineMail />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main

