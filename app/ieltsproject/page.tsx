import Navfloat from "../components/navfloat"
import Link from "next/link"
import IELTS from "../../public/projects/IELTS.png"
import Image from "next/image"

const page = () => {
  return (
    <div>
      <Navfloat />

      <div id="about" className="w-full md:h-screen p-2 flex items-center py-24">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="uppercase text-xl tracking-widest">Project</p>
            <h2 className="py-4">Automatic IELTS Essay Grading using Transformers and LLMs</h2>
            <p className="py-2">
              Created NLP models to automatically grade essays for the IELTS examination by finetuning Transformer and
              LLM models and then deployed them using gradio and huggingface spaces
            </p>
            <Link href={"https://huggingface.co/spaces/karanzrk/IELTSAutoGrading"}>
              <p className="py-2 underline cursor-pointer">Huggingface Spaces Link (BERT)</p>
            </Link>
            <Link href={"https://huggingface.co/spaces/karanzrk/IELTSAutoGrading_GPT"}>
              <p className="py-2 underline cursor-pointer">Huggingface Spaces Link (GPT)</p>
            </Link>
            <Link href="/#projects">
              <p className="text-center py-3 rounded-lg bg-gray-900 text-white font-bold text-lg cursor-pointer">
                Go Back
              </p>
            </Link>
          </div>

          <div className="w-full h-auto m-auto shadow-xl shadow-gray-800 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image className="rounded-xl" src={IELTS} alt="/"></Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page

