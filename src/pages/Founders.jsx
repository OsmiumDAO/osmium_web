import React, { useState } from 'react'
import Founder, { FounderDetail } from '../components/Founder'
import Popup from '../components/Popup'
import founders from '../data/founders'
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
        Every member of the team serves a crucial role in further development
        and management of the protocol, the community, and direction. Hover over
        each member to learn more about thier experience and the role in the
        Osmium team.
      </p>
      <div className='founders__container'>
        {founders.map((f, i) => (
          <Founder key={i + 1} founder={f} open={handleClick} />
        ))}
      </div>
      <Popup title='' open={showPopup} setOpen={setShowpopup}>
        <FounderDetail founder={active} />
      </Popup>
    </div>
  )
}

export default Founders
