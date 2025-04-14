import { socials } from "@/constants/index"
import Link from "next/link"

const Socials = ({constainerStyles, iconStyles}) => {
  return (
    <div className={constainerStyles}>
        {socials.map((social, index) =>{
            return (
                <Link href={social.path} key={index} target="_blank" className={iconStyles}>
                    {social.icon}
                </Link>
            )
        })}
    </div>
  )
}
export default Socials