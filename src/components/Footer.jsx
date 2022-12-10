import React from 'react'
import './css/Footer.css'
import { FiTwitter } from 'react-icons/fi'
import { RxDiscordLogo } from 'react-icons/rx'
import { IoNewspaperSharp } from 'react-icons/io5'
import { BsMedium } from 'react-icons/bs'
import { CiYoutube } from 'react-icons/ci'
import { BsGithub } from 'react-icons/bs'
import { TfiWallet } from 'react-icons/tfi'
import { SiBloglovin } from 'react-icons/si'
import { VscLaw } from 'react-icons/vsc'
import { Link, Tooltip } from '@mui/material'
import tangentLogo from '../assets/partners/tangent.png'

import whitePaper from '../assets/white_paper.pdf'

function Footer() {
  return (
    <footer className='footer container'>
      <section className='socials'>
        <h3>Join us</h3>
        <span></span>
        <div className='flex'>
          <Link href={'https://twitter.com/OsmiumDAO_'}>
            <Tooltip title='Twitter'>
              <FiTwitter className='socials__icon' />
            </Tooltip>
          </Link>
          <Link href='https://discord.gg/TFzmEYyyHw'>
            <Tooltip title='Discord'>
              <RxDiscordLogo className='socials__icon' />
            </Tooltip>
          </Link>
          <Link href=''>
            <Tooltip color='white' title='Medium'>
              <BsMedium className='socials__icon' />
            </Tooltip>
          </Link>
          <Link href=''>
            <Tooltip title='Youtube'>
              <CiYoutube className='socials__icon' />
            </Tooltip>
          </Link>
        </div>
        <span></span>
      </section>
      <section className='partners'>
        <h3>Partners</h3>
        <div className='partners__container'>
          <Link href='https://tangent.art'>
            <img src={tangentLogo} alt='' />
            Tangent
          </Link>
        </div>
      </section>
      <section className='footer__links'>
        <h3>Resources</h3>
        {/* <div className='links__group'> */}
        <ul>
          <li>
            <Link href='#wallets'>
              <TfiWallet /> Wallets
            </Link>
          </li>
          <li>
            <Link>
              <SiBloglovin />
              Blog
            </Link>
          </li>
          <li>
            <Link href={whitePaper} download>
              <IoNewspaperSharp /> Whitepaper
            </Link>
          </li>
          <li>
            <Link href='https://github.com/OsmiumDAO'>
              <BsGithub /> Github
            </Link>
          </li>
          <li>
            <Link
              href='https://docs.google.com/document/d/12dVUe9HDzvCntprmqN9UXnWN3u8G-VoS7RLWNtIoVM0/edit?usp=sharing'
              target={'_blank'}
            >
              <VscLaw /> Guiding Principles
            </Link>
          </li>
        </ul>
      </section>
      <section className='copyright'>
        Copyright &copy; 2022 Osmium DAO All rights reserved.
      </section>
    </footer>
  )
}

export default Footer
