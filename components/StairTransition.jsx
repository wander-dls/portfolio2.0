"use client"
import { motion as m, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import Stairs from "@/components/Stairs"

const StairTransition = () => {
    const pathname = usePathname()
  return (
    <>
        <AnimatePresence mode="wait">
            <div key={pathname}>
                <div className="h-screen w-screen fixed top-0 left-0 right-0 flex"><Stairs /></div>
            </div>
        </AnimatePresence>
    </>
  )
}
export default StairTransition


{/* <m.div className="h-screen w-screen fixed bg-gray-900 top-0 -z-10" initial={{opacity: 1}} animate={{opacity: 0, transition: { delay: 1, duration: 0.4, ease: "easeInOut"}}} /> */}