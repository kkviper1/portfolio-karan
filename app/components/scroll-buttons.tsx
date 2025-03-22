"use client"

import { useState, useEffect } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"

export default function ScrollButtons() {
  const [activeSection, setActiveSection] = useState(0)
  const [sections, setSections] = useState<HTMLElement[]>([])
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    // Get all sections with snap-start class
    const sectionElements = Array.from(document.querySelectorAll(".snap-start")) as HTMLElement[]
    setSections(sectionElements)

    // Function to determine which section is currently in view
    const handleScroll = () => {
      // Get current scroll position
      const scrollPosition = window.scrollY

      // Find which section we're currently in
      for (let i = 0; i < sectionElements.length; i++) {
        const section = sectionElements[i]
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        // If we're within this section
        if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
          setActiveSection(i)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check
    setTimeout(handleScroll, 100)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (direction: "up" | "down") => {
    if (sections.length === 0) return

    let targetIndex
    if (direction === "up") {
      targetIndex = Math.max(0, activeSection - 1)
    } else {
      targetIndex = Math.min(sections.length - 1, activeSection + 1)
    }

    sections[targetIndex].scrollIntoView({ behavior: "smooth" })
  }

  const handleSectionClick = (index: number) => {
    sections[index].scrollIntoView({ behavior: "smooth" })
  }

  // Debug information to help troubleshoot
  console.log("Active section:", activeSection)
  console.log("Total sections:", sections.length)

  return (
    <div
      className="fixed right-6 bottom-1/2 transform translate-y-1/2 z-50 flex flex-col gap-4"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <button
        onClick={() => scrollToSection("up")}
        className="p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
        aria-label="Scroll up"
      >
        <ChevronUp size={24} />
      </button>

      {/* Section indicators */}
      <div className="flex flex-col items-center gap-2">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSectionClick(index)}
            className={`rounded-full transition-all duration-300 ${
              index === activeSection
                ? "bg-blue-500 w-4 h-4"
                : isHovering
                  ? "bg-gray-400 w-3 h-3 hover:bg-blue-400"
                  : "bg-gray-400 w-2 h-2"
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={() => scrollToSection("down")}
        className="p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </button>
    </div>
  )
}

