
import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

// My Components
import Stats from "@/components/Stats"
import Socials from "@/components/Socials"
import Photo from "@/components/Photo"

const Home = () => {
  return (
    <>
      <section className="h-full">
        <div className="container mx-auto md:px-8 h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">FrontEnd Developer</span>
              <h1 className="h1">Hello I'm <br /> <span className="text-green-400">Wander De Los Santos</span></h1>
              <p className="max-w-[500px] mb-9 text-white/80 p-8 xl:p-0">Front End Developer with 5+ years of experience applying deep technical 
                knowledge and creative design sense to amplify online traffic. 
                Combines sound technical frameworks with appealing media assets 
                to generate front end solutions focused on expanding user bases. 
              </p>
              <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-start gap-8">
                <Button variant="outline" className="uppercase flex items-center gap-2 z-40"
                size="lg">
                  <span>Download Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
                <div className="mb-8 xl:mb-0 z-40"><Socials constainerStyles="flex gap-6" iconStyles="w-9 h-9 border border-green-400 rounded-full flex justify-center items-center text-green-400 text-base hover:bg-green-400 hover:text-gray-900 hover:transition-all duration-500" /></div>
              </div>
            </div>
            <div className="order-1 xl:oreder-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
      </section>
    </>
  )
}
export default Home
