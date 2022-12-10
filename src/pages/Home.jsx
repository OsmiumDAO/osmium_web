import React from 'react'
import './css/Home.css'
import homeImg from '../assets/home.png'
import { Typography } from '@mui/material'

function Home() {
  return (
    <div className='container home' id='home'>
      <section className='left home__text'>
        <Typography variant='h2' sx={{ mt: -3 }}>
          Community Driven Treasury and Investment Fund
        </Typography>
        <Typography variant='h6' align='justify'>
          The ethos of WEB3.0 is ownership, portability, equality, community and
          transparency. We believe all these elements contribute to giving
          everyone economic and social identities. However, these also
          constitute all the essential aspects of DAOs, NFTs and native tokens.
          join us and let's explore together.
        </Typography>
      </section>
      <section className='right home__image'>
        <img src={homeImg} alt='' />
      </section>
    </div>
  )
}

export default Home
