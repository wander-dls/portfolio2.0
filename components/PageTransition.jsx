"use client"

import { AnimatePresence, motion as m } from "framer-motion"
import { usePathname } from "next/navigation"

const PageTransition = ({ children }) => {
    const pathname = usePathname()
  return (
    <>
        <AnimatePresence>
            <div key={pathname}>
                <m.div initial={{opacity: 1}} animate={{ opacity: 0, transition: {delay: 1, duration: 0.4, ease:"easeInOut"}}} className="h-screen w-screen fixed bg-gray-900 top-0 -z-10"/>
                    {children} 
               
            </div>
        </AnimatePresence>
    </>
  )
}
export default PageTransition