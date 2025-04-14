
"use client"

import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
import { usePathname } from "next/navigation"
import Link from "next/link"
import { CiMenuFries   } from "react-icons/ci"
import { NavLinks } from "@/constants/index"

const MobileNav = () => {
    const pathname = usePathname()
  return (
    <>
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-green-400" />
            </SheetTrigger>
                <SheetContent className="flex flex-col">
                    <div className="mt-32 mb-20 text-center text-2xl">
                     <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Wander<span className="text-green-400">.</span>
                        </h1>
                     </Link>
                    </div>
                 <nav className="flex flex-col gap-8 items-center z-40">
                 {NavLinks.map((link, index) => (
                        <Link key={index} href={link.path} className={`text-xl capitalize hover:text-green-400 transition-all ${link.path === pathname && "text-green-400 border-b-2 border-green-400"}`}>
                            <div className={`flex items-center font-semibold justify-center`}>
                                {link.name}
                            </div>
                        </Link>
                    ))}
                 </nav>
            </SheetContent>
        </Sheet>

    </>
  )
}
export default MobileNav