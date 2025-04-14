import {FaGithub, FaLinkedinIn} from "react-icons/fa"

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