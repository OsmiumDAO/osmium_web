import { Link } from '@mui/material'
import React from 'react'
import { FiTwitter } from 'react-icons/fi'
import { RxDiscordLogo } from 'react-icons/rx'
import './css/Founder.css'
import photo1 from '../assets/founders/1.png'
import photo2 from '../assets/founders/2.jpg'
import photo3 from '../assets/founders/3.jpg'
import photo4 from '../assets/founders/4.jpg'
import photo5 from '../assets/founders/5.jpg'
import photo6 from '../assets/founders/6.png'
import photo7 from '../assets/founders/7.png'
import photo8 from '../assets/founders/8.png'
import photo9 from '../assets/founders/9.jpg'
import photo10 from '../assets/founders/10.gif'
import photo11 from '../assets/founders/11.jpg'
import photo12 from '../assets/founders/12.jpg'
import photo13 from '../assets/founders/13.jpg'
import photo14 from '../assets/founders/14.png'
import photo15 from '../assets/founders/15.webp'
import photo16 from '../assets/founders/16.jpg'
import photo17 from '../assets/founders/17.png'

function Founder({ founder, open }) {
  const { name, position, socials } = founder
  return (
    <div className='founder' data-aos='flip-up'>
      <span className='founder__image' onClick={(e) => open(founder)}>
        {name.charAt(0)}
      </span>
      <h3>{name}</h3>
      <h4>{position}</h4>
      <div className='flex socials'>
        <Link href={`https://twitter.com/${socials?.twitter}`}>
          <FiTwitter className='founder__icon' />
        </Link>
        <Link href='https://discord.gg/TFzmEYyyHw'>
          <RxDiscordLogo className='founder__icon' />
        </Link>
      </div>
    </div>
  )
}

const photos = [
  photo1,
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  photo15,
  photo16,
  photo17,
]

export const FounderDetail = function ({ founder }) {
  return (
    <div className='founder__detail'>
      <section className='photo'>
        <img src={photos[founder?.photo]} alt='' />
      </section>
      <section className='info'>
        <h3>{founder?.name}</h3>
        <h4>{founder?.position}</h4>
        <p>{founder?.about}</p>
      </section>
    </div>
  )
}

export default Founder
