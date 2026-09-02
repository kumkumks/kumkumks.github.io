import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const badgeData = [
  {
    id: 1,
    name: 'GitHub',
    link: 'https://github.com/kumkumks',
    icon: faGithub,
  },
  {
    id: 2,
    name: 'LinkedIn',
    link: '#',
    icon: faLinkedin,
  },
  {
    id: 3,
    name: 'X / Twitter',
    link: '#',
    icon: faXTwitter,
  },
]

const Badge = () => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-3 sm:justify-end'>
      {badgeData.map((item) => {
        const isExternalLink = item.link.startsWith('http')

        return (
          <a
            key={item.id}
            href={item.link}
            target={isExternalLink ? '_blank' : undefined}
            rel={isExternalLink ? 'noreferrer' : undefined}
            className='flex w-[150px] items-center justify-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-black shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white sm:text-base'
            aria-label={item.name}
          >
            <FontAwesomeIcon icon={item.icon} className='h-4 w-4' />
            <span>{item.name}</span>
          </a>
        )
      })}
    </div>
  )
}

export default Badge