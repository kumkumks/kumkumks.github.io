type cardProps = {
  image: string;
  title: string;
  link: string;
}

const Card = ({ image, title, link }: cardProps) => {
  return (
    <a href={link} target='_blank' rel='noreferrer' className='block'>
      <div className='group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 ease-out hover:-translate-y-1'>
        <img
          src={image}
          alt={title}
          className='h-full w-full object-cover transition duration-500 ease-out group-hover:scale-110 group-hover:brightness-90'
        />

        <div className='absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent opacity-0 transition duration-300 group-hover:opacity-100' />

        <div className='absolute left-4 top-4 z-10 flex items-center gap-2'>
          <span className='rounded-full border border-white/40 bg-slate-950/55 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm transition duration-300 group-hover:border-white/60 group-hover:bg-slate-950/70'>
            Live
          </span>
        </div>

        <div className='absolute inset-x-0 bottom-0 translate-y-6 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
          <p className='text-lg font-semibold uppercase tracking-[0.18em] text-white'>{title}</p>
          <p className='mt-1 text-xs text-slate-200'>Live Website</p>
        </div>
      </div>
    </a>
  )
}

export default Card