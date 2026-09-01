import React from 'react'
import Card from '../component/card'
import img1  from '../assets/sfsbusnest.jpeg'
import img2  from '../assets/service.jpeg'
import img3  from '../assets/blixtro.jpeg'

const CardData = [
  {
    id:1,
    name:'sfsbusnest',
    image:img1,
    link:'https://sfsbusnest.in/',
  },
  {
    id:2,
    name:'Services',
    image:img2,
    link:'https://services.sfsbusnest.in/',
  },
  {
    id:3,
    name:'Blixtro',
    image:img3,
    link:'https://blixtro.sfscollege.app/'
  }
]

const Project = () => {
    return (
        <section className='mx-auto max-w-7xl px-3 py-6 sm:px-5 md:px-6 lg:px-8'>
            <div className='grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2'>
                {
                    CardData.map((card) => (
                        <Card key={card.id} link={card.link} image={card.image} title={card.name} />
                    ))
                }
            </div>
        </section>
    )
}

export default Project