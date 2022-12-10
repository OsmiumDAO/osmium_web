import React from 'react'
import phases from '../data/phases'
import './css/Roadmap.css'

function RoadMap() {
  return (
    <div className='container roadmap' id='roadmap'>
      <h2 className='subtitle'>Road map</h2>
      <div className='flex'>
        {Array(3)
          .fill()
          .map((_, i) => (
            <Phase stages={phases[i + 1]} key={i + 1} no={i + 1} />
          ))}
      </div>
    </div>
  )
}

const Phase = ({ stages, no }) => {
  return (
    <div className='phase' data-aos='flip-left'>
      <span className='phase__no'>
        <i>Phase</i>
        {no}
      </span>
      <ul>
        {stages.map((stage, i) => (
          <li key={stage}>{stage}</li>
        ))}
      </ul>
    </div>
  )
}

export default RoadMap
