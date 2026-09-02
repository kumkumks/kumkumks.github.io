import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const badgeData = [
  {
    id: 1,
    name: 'GitHub',
    link: 'https://github.com/kumkumks',
    icon: faGithub,
    style: 'w-[150px] bg-gray-800 text-white hover:bg-[#171515] hover:bg-white/80 hover:text-black hover:translate-y-0.5 ',
  },
  {
    id: 2,
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/kumkum--sharma/',
    icon: faLinkedin,
    style: 'w-[150px] bg-blue-700 text-white hover:bg-blue-800 hover:bg-white/80 hover:text-blue-700 hover:translate-y-0.5',
  },
  {
    id: 3,
    name: 'kumkumks671@gmail.com',
    link: 'mailto:kumkumks671@gmail.com',
    icon: faEnvelope,
    style: 'w-[240px] sm:w-[270px] bg-red-600 text-white hover:bg-red-700 hover:bg-white/80 hover:text-red-600 hover:translate-y-0.5',
  },
]

const Badge = () => {
  return (
    <div className='flex w-full flex-wrap items-center justify-center gap-3 md:justify-center'>
      {badgeData.map((item) => {
        const isExternalLink = item.link.startsWith('http') || item.link.startsWith('mailto:')
        const isLongText = item.name.length > 18

        return (
          <a
            key={item.id}
            href={item.link}
            target={isExternalLink && !item.link.startsWith('mailto:') ? '_blank' : undefined}
            rel={isExternalLink && !item.link.startsWith('mailto:') ? 'noreferrer' : undefined}
            className={`flex ${item.style} items-center justify-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition duration-200 hover:-translate-y-0.5  ${isLongText ? 'text-[11px] sm:text-xs md:text-sm' : ''}`}
            aria-label={item.name}
          >
            <FontAwesomeIcon icon={item.icon} className='h-4 w-4 shrink-0' />
            <span className='truncate'>{item.name}</span>
          </a>
        )
      })}
    </div>
  )
}

export default Badge
