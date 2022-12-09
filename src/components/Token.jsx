import React from 'react'

import './css/Token.css'

function Token({ name, percentage, icon }) {
  return (
    <div className='token'>
      <span className='key'>
        {icon}
        {name}
      </span>
      <span className='value'>{percentage}%</span>
    </div>
  )
}

export default Token
