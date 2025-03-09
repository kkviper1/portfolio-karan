import Navfloat from "../components/navfloat"
import Link from "next/link"
import Image from "next/image"
import webd from "../../public/projects/webd.png"

const page = () => {
  return (
    <div>
      <Navfloat />

      <div id="about" className="w-full md:h-screen p-2 flex items-center py-24">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="uppercase text-xl tracking-widest">Project</p>
            <h2 className="py-4">Website Element Detection using Object Detection Models</h2>
            <p className="py-2">
              Used various kinds of object detection models such as Faster RCNN, Yolo V5, and SSD to detect different
              elements of a webpage such as header, text, button, etc.
            </p>
            {/* <Link href={"https://github.com/kkviper1/StableDiffusion_Asuka"}>
                <p className='py-2 underline cursor-pointer'>Github Link</p>
                </Link> */}
            <Link href="/#projects">
              <p className="text-center py-3 rounded-lg bg-gray-900 text-white font-bold text-lg cursor-pointer">
                Go Back
              </p>
            </Link>
          </div>

          <div className="w-full h-auto m-auto shadow-xl shadow-gray-800 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image className="rounded-xl" src={webd} alt="/"></Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page

