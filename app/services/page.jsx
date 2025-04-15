"use client"

import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link'
import { services } from '@/constants'
import { motion as m } from 'framer-motion'


const Services = () => {
  return (
    <>
      <section className='min-h-[60vw] xl:min-h-[50px] flex flex-col justify-center py-12'>
        <div className='container mx-auto'>
          <m.div
            initial={{opacity: 0}}
            animate={{opacity: 1,
                      transition: 
                        {
                          delay: 2, 
                          duration: 0.2, 
                          ease: 'easeIn'
                        },
            }}
            className='grid grid-cols-1 md:grid-cols-2 gap-[60px] px-4 md:px-8'>
                {services.map((service, index) => {
                  return (
                    <div key={index}
                      className='flex flex-col gap-6 flex-1 justify-center group'>
                      <div className='flex items-center w-full justify-between'>
                        <div className='text-5xl front-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500 z-44'>{service.number}</div>
                      
                        <Link href={service.href} className='w-[70px] h-[70px] flex items-center justify-center rounded-full bg-white group-hover:bg-green-400 transition-all duration-500 hover:-rotate-45'>
                          <BsArrowDownRight className='text-gray-900 text-3xl'/>
                        </Link>
                      </div>
                      <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-green-400 transition-all duration-500'>{service.title}</h2>
                      <p className='text-white/60'>{service.description}</p>
                      <div className='border-b border-white/20 w-full'></div>
                    </div>
                  )
                })}
          </m.div>
        </div>
      </section>
    </>
  )
}
export default Services