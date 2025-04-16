"use client"
import { Tooltip, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"
import { work } from  "@/constants/index"
import { TooltipTrigger } from "@radix-ui/react-tooltip"
import { motion as m} from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import Image from "next/image"
import WorkSliderBtns from "@/components/WorkSliderBtns"



const Work = () => {
  const [ project, setProject ] = useState(work[0])

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(work[currentIndex]);
  }

  return (
    <>
      <m.section 
        initial={{ opacity: 0}}
        animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"} }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
        <div className="container mx-auto">
          <div className="flex px-8 flex-col xl:flex-row xl:gap-[30px] xl:px-10">
            <div className="w-[90%] xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.number}</div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-green-400 transition-all duration-500 capitalize">{project.category} project</h2>
                <p className="text-white/60">{project.description}</p>
                <ul className="flex gap-4">
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className="text-xl text-green-400">
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    )
                  })}
                </ul>
                <div className="border boder-white/20"></div>
                <div className="flex gap-4">
                  <Link href={project.live} target="_blank" className="">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-green-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  <Link href={project.github} target="_blank" className="">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub  className="text-white text-3xl group-hover:text-green-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                {work.map((item, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20"></div>
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="w-full h-full">
                        <Image src={item.image} alt="" fill className="object-cover" />
                      </div>
                    </SwiperSlide>
                  )
                })}
               <div className="xl:flex">
                  <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-green-400 hover:bg-green-400-hover text-gray-900 text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
               </div>
              </Swiper>
            </div>
          </div>
        </div>
      </m.section>
    </>
  )
}
export default Work