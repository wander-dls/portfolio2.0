import {FaGithub, FaLinkedinIn} from "react-icons/fa"
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa"

export const NavLinks = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "work",
        path: "/work"
    },
    {
        name: "contact",
        path: "/contact"
    },
]

export const socials = [
    {
        icon: <FaGithub />, path: "https://github.com/wander-dls"
    },
    {
        icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/wander-delossantos/"
    }
]

export const stats = [
    {
        number: "5", text: "+ Years of Experience"
    },
    {
        number: "20", text: "+ Projects Completed"
    },
    {
        number: "5", text: "Technologies mastered"
    },
    {
        number: "200", text: "+ Code Commits"
    }
]

export const services = [
    {
        number: "01",
        title: "UI/UX Design",
        description: "Creative and detail-oriented UI/UX Designer with 5+ years of experience crafting user-centric digital experiences for web and mobile platforms.",
        href: ""
    },
    {
        number: "02",
        title: "Web Developer",
        description: "Versatile and results-driven Web Developer with 5+ years of experience building responsive, high-performance websites and web applications.",
        href: ""
    },
    {
        number: "03",
        title: "Frontend Developer",
        description: "Creative and performance-focused Frontend Developer with 5+ years of experience designing and building responsive, user-friendly web interfaces.",
        href: ""
    },
    {
        number: "04",
        title: "Graphic Designer",
        description: "Innovative and detail-oriented Graphic Designer with 10+ years of experience creating compelling visual content across digital and print media.",
        href: ""
    },
    
]

export const about = {
    title: "About Me",
    description: "I'm a passionate Frontend Developer with a strong foundation in HTML, CSS, JavaScript, React.js, and Next.js. I love creating beautiful and functional websites, and UI/UX that provide an exceptional user experience. With a keen eye for design and a commitment to best practices, I strive to deliver high-quality code and innovative solutions. Let's work together to bring your ideas to life!",
    info: [
        {
            fieldName: "Name:",
            fieldValue: "Wander De Los Santos"
        },
        {
            fieldName: "Phone:",
            fieldValue: "+1 347 479 5113"
        },
        {
            fieldName: "Experience:",
            fieldValue: "5+ Years"
        },
        {
            fieldName: "Email:",
            fieldValue: "delossantos.wander@gmail.com"
        },
        {
            fieldName: "Freelance:",
            fieldValue: "available"
        },
        {
            fieldName: "Languages:",
            fieldValue: "English, Spanish"
        },
    ]
}

export const expirience = {
    icon: '/assets/resume/badge.svg',
    title: "My Experience",
    description: "I have over 5 years of experience in web development, specializing in frontend technologies. I have worked on various projects, from small websites to large web applications, always striving for excellence and user satisfaction.",
    items: [
        {
            company: "Freelance (Self-employed)",
            position: "Frontend Developer",
            duration: "2020 - Present",
        },
        {
            company: "3Ducators",
            position: "Frontend Developer",
            duration: "2017 - 2020",
        },
        {
            company: "The RMM Group",
            position: "Frontend Developer",
            duration: "2011 - 2014",
        },
        {
            company: "NHYRE",
            position: "Web Developer",
            duration: "2009 - 2011",
        },
        
    ]
}

export const education = {
    icon: '/assets/resume/cap.svg',
    title: "My Education",
    description: "I have a strong educational background in Compure Science, with a focus on Java. I am always eager to learn and stay updated with the latest trends and best practices in the industry.",
    items: [
        {
            institution: "Rutgers University-Newark",
            degree: "Bachelor of Science in Computer Science",
            duration: "2016-2020",
        },
        {
            institution: "Bronx Community College",
            degree: "Associate of Science in Physics",
            duration: "2014 - 2016",
        },
        
    ]
}

export const skills = {
    title: "My Skills",
    description: "I am proficient in a variety of frontend technologies, including HTML, CSS, JavaScript, Figma, React.js, and Next.js. I also have experience with UI/UX design and graphic design.",
    items: [
        {
            name: "HTML5",
            icon: <FaHtml5 />
        },
        {
            name: "CSS3",
            icon: <FaCss3 />
        },
        {
            name: "JavaScript",
            icon: <FaJs />
        },
        {
            name: "React.js",
            icon: <FaReact />
        },
        {
            name: "Next.js",
            icon: <SiNextdotjs />
        },
        {
            name: "Figma",
            icon: <FaFigma />
        },
        {
            name: "Node.js",
            icon: <FaNodeJs />
        },
        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss />
        },
    ]
}

export const work = [
    {
        number: "01",
        category: "Frontend",
        title: "Portfolio Website",
        description: "A personal portfolio website showcasing my skills and projects. Built with Next.js and Tailwind CSS.",
        stack: [{name: "Next.js"}, {name: "Tailwind CSS"}],
        image: "./assets/work/thumb1.png",
        live: "",
        github: ""
    },
    {
        number: "02",
        category: "Fullstack",
        title: "cleaning service company website",
        description: "A website for a cleaning service company, built with Next.js and Tailwind CSS. It features a booking system.",
        stack: [{name: "Next.js"}, {name: "Tailwind CSS"}],
        image: "./assets/work/thumb2.png",
        live: "",
        github: ""
    },
    {
        number: "03",
        category: "Frontend",
        title: "Portfolio Website",
        description: "A personal portfolio website showcasing my skills and projects. Built with React.js and Tailwind CSS.",
        stack: [{name: "Next.js"}, {name: "Tailwind CSS"}],
        image: "./assets/work/thumb3.png",
        live: "",
        github: ""
    },
]

export const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+1) 347 479 5113",
        href: "tel:+13474795113"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "delossantos.wander@gmail.com",
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Location",
        description: "Newark, NJ",
    },
]