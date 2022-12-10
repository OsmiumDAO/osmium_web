import { Box } from '@mui/material'
import React, { useState } from 'react'
import Founder, { FounderDetail } from '../components/Founder'
import Popup from '../components/Popup'
import founders from '../data/founders'
import { Pagination, Autoplay } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import './css/Founders.css'

function Founders() {
  const [active, setActive] = useState(null)
  const [showPopup, setShowpopup] = useState(false)

  const handleClick = (founder) => {
    setActive(founder)
    setShowpopup(true)
  }
  return (
    <div className='container founders' id='founders'>
      <h2>Meet the initial contributors</h2>
      <p>
        Every member mentioned below serves a crucial role in the core
        formation, development and management of the DAO and its community.
      </p>
      <Box
        className='founders__container'
        sx={{
          flexGrow: 1,
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'center',
        }}
      >
        {founders.map((f, i) => (
          <Founder key={i + 1} founder={f} open={handleClick} />
        ))}
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
            waitForTransition: true,
          }}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className='founders__container-2'
        >
          {founders.map((f, i) => (
            <SwiperSlide key={i} className='fonder_wrapper'>
              <Founder
                animate={false}
                key={i + 1}
                founder={f}
                open={handleClick}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Popup title='' open={showPopup} setOpen={setShowpopup}>
        <FounderDetail founder={active} />
      </Popup>
    </div>
  )
}

export default Founders
