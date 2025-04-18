"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { info } from "@/constants"
import { motion as m } from "framer-motion"
import { useRef, useState } from "react"
import { toast } from "sonner"
import  emailjs  from "@emailjs/browser"

const {EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY} = process.env


const Contact = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [service, setService] = useState("")
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  })

  const form = useRef()
  const sentEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm( 'service_3s8pzxq', 'template_qg38cxm', form.current, 'user_Il99xAYsTCv9ajUwjun9y')
      .then((result) => {
          setData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
            service: "",
          })
          toast.success("Message sent successfully")
          console.log(result.text);
      }, (error) => {
          toast.error("Message not sent")
          console.log(error.text);
      });

    
  }
  return (
    <>
      <m.section initial={{ opacity: 0}}
        animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"} }}
        className="py-6">
          <div className="container mx-auto">
            <div className="flex flex-col gap-[30px] xl:flex-row">
              {/* form */}
              <div className="xl:w-[54%] order-2 xl:order-none">
                <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={sentEmail} ref={form}>
                  <h3 className="text-4xl text-green-400">Let's Work Together</h3>
                  <p className="text-white/60">Let's collaborate to create something impactful and memorable.
                  Tell me about your project and I'll get back to you as soon as I can.
                  </p>
                  {/* input */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input type={firstName} name="firstName" placeholder="Firstname" value={data.firstName} onChange={e => {setData({...data, firstName: e.target.value})}} />
                    <Input type={lastName} name="lastName" placeholder="Lastname" value={data.lastName} onChange={e => {setData({...data, lastName: e.target.value})}} />
                    <Input type={email} name="email" placeholder="Email address" value={data.email} onChange={e => {setData({...data, email: e.target.value})}} />
                    <Input type={phone} name="phone" placeholder="Phone Number" value={data.phone} onChange={e => {setData({...data, phone: e.target.value})}} />
                  </div>
                  {/* select */}
                  <Select name="service" onValueChange={e => setService()} >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select a Services</SelectLabel>
                        <SelectItem value="uiux">UI/UX Design</SelectItem>
                        <SelectItem value="webdev">Web Development</SelectItem>
                        <SelectItem value="frontend">Frontend Development</SelectItem>
                        <SelectItem value="graphic">Graphic Design</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {/* textarea */}
                  <Textarea name="message" type={message} placeholder="Type your message here." className="h-[200px]" value={data.message} onChange={e => {setData({...data, message: e.target.value})}} />
                  {/* button */}
                  <Button size="md" className="max-w-40 h-10">Send Message</Button>
                </form>
              </div>
              {/* info */}
              <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                <ul className="flex flex-col gap-10">
                  {info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center gap-6">
                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] flex items-center justify-center rounded-md text-green-400 bg-[#27272c]">
                          <div className="text-[28px]">{item.icon}</div>
                        </div>
                        <div className="flex-1">
                          <p className="text-white/60">{item.title}</p>
                          <h3 className="text-xl">{item.description}</h3>

                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
      </m.section>
    </>
  )
}
export default Contact