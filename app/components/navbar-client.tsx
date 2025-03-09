"use client"

import { useEffect } from "react"

export default function NavbarClient() {
  useEffect(() => {
    // Import Flowbite's JavaScript
    import("flowbite").then((flowbite) => {
      // Initialize all Flowbite components
      flowbite.initFlowbite()
    })
  }, [])

  return null
}

