import React from 'react'
import './css/Home.css'
import homeImg from '../assets/home.jpg'
// import osmiumVid from '../assets/Osmium.mp4'
import { Button, Typography } from '@mui/material'
import { BiBitcoin } from 'react-icons/bi'
// import { useStyles } from '../components/styles'

function Home() {
  // const classes = useStyles()
  return (
    <div className='container home' id='home'>
      <section className='left home__text'>
        <Typography variant='h3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, ipsa.
        </Typography>
        <Button startIcon={<BiBitcoin />} className={'btn btn-large'}>
          Get started
        </Button>
      </section>
      <section className='right home__image'>
        <img src={homeImg} alt='' />
      </section>
    </div>
  )
}

export default Home
