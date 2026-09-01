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
        <div className='grid grid-cols-2 gap-4 justify-center items-center p-7'>
            {
                CardData.map((card) => (
                    <Card key={card.id} link={card.link} image={card.image} title={card.name} />
                ))
            }
        </div>
    )
}

export default Project