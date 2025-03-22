import Navfloat from "./components/navfloat"
import Main from "./components/Main"
import About from "./components/About"
import Projects from "./components/Projects"
import Publications from "./components/Publications"
import ScrollButtons from "./components/scroll-buttons"

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <head>
        <title>Karan Khanna | Portfolio </title>
      </head>
      <Navfloat />
      <ScrollButtons />
      <Main />
      <About />
      <Projects />
      <Publications />
    </div>
  )
}

