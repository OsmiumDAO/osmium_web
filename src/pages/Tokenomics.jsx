import React from 'react'
import tok_img from '../assets/tokenomics_img.png'
import Token from '../components/Token'
import './css/Tokenomics.css'
import { AiOutlineCrown } from 'react-icons/ai'
import { GiLaurelCrown } from 'react-icons/gi'
import { FcSalesPerformance } from 'react-icons/fc'
import { GiOpenTreasureChest } from 'react-icons/gi'
import { IoIosPeople } from 'react-icons/io'

const tokenomics = [
  {
    name: 'founders',
    percentage: 2,
    icon: <GiLaurelCrown className='token__icon' />,
  },
  {
    name: 'co-founders',
    percentage: 2,
    icon: <AiOutlineCrown className='token__icon' />,
  },
  {
    name: 'marketing',
    percentage: 6,
    icon: <FcSalesPerformance className='token__icon' />,
  },
  {
    name: 'treasury',
    percentage: 25,
    icon: <GiOpenTreasureChest className='token__icon' />,
  },
  {
    name: 'community',
    percentage: 65,
    icon: <IoIosPeople className='token__icon' />,
  },
]
function Tokenomics() {
  return (
    <div className='container tokenomics' id='tokenomics'>
      {/* <h2 className='subtitle'>Tokenomics</h2> */}
      <div className='flex'>
        <div className='tokenomics__left about__image'>
          <img src={tok_img} alt='' className='tokenomics__logo' />
        </div>
        <div className='tokenomics__right about__text'>
          <h4 className='supply'>Token Total Supply: 600,000</h4>
          {tokenomics.map((tk, i) => (
            <Token key={i + 1} {...tk} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tokenomics
