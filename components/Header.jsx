import Link from "next/link"
import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import  MobileNav  from "@/components/MobileNav"

const Header = () => {
  return (
    <>
        <header className="py-8 xl:py-12 text-white p-8">
            <div className="container mx-auto flex justify-between items-center">
                <Link  href="/">
                
                   <h1 className="text-4xl font-semibold">
                        Wander<span className="text-green-400">.</span>
                    </h1>
                   
                </Link>
                {/* desktop navbar */}
                <div className="hidden xl:flex items-center gap-8 z-40">
                    <Navbar />
                    <Link href="/contact">
                        <Button variant="default"  className="z-50">
                            Hire me
                        </Button>
                    </Link>
                </div>
                <div className="xl:hidden z-41">
                    <MobileNav />
                </div>
            </div>
        </header>
    </>
  )
}
export default Header