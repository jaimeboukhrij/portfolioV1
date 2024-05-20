import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'

const socialMedia = [
  {
    icon: <FaWhatsapp size={25} />,
    href: 'https://api.whatsapp.com/send?phone=692559207'
  },
  {
    icon: <FaGithub size={25} />,
    href: 'https://github.com/jaimeboukhrij'
  },
  {
    icon: <FaLinkedin size={25} />,
    href: 'https://www.linkedin.com/in/jaime-boukhrij/'
  }

]
export function SocialMedia () {
  return (

    socialMedia.map(({ icon, href }) => {
      return (
        <li key={href} className='rounded-[999px] cursor-pointer transition-all w-[50px] h-[50px] hover:bg-hover'>
          <a className='w-full h-auto p-3 flex justy-center items-center ' target='_blank' href={href}>
            <span>
              {icon}
            </span>
          </a>
        </li>
      )
    })

  )
}
