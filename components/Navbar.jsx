"use client"

import { NavLinks } from "@/constants/index"
import { usePathname } from "next/navigation"
import Link from "next/link"


const Navbar = () => {
    const pathname = usePathname()
    
  return (
    <>
        <nav className="flex gap-8">
            {NavLinks.map((link, index) => {
                return <Link href={link.path} key={index} className={`${link.path === pathname && "text-green-400 border-b-2 border-green-400"} capitalize font-medium hover:text-green-400 transition-all`}>{link.name}</Link>
            })}
        </nav>
    </>
  )
}
export default Navbar