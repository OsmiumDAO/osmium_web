import React from 'react'
import aboutImg from '../assets/about_img.png'
import './css/About.css'

function About() {
  return (
    <div className='container about' id='about'>
      <h2 className='subtitle'>About The DAO</h2>
      <div className='flex'>
        <div className='about__image'>
          <img src={aboutImg} alt='' />
        </div>
        <article className='about__text'>
          <p>
            OsmiumDAO is meant to represent a professionally managed treasury
            owned by the community. It aims to create a sustainable, perpetual
            treasury owned directly by the token holders, governed by
            OsmiumShare NFT holders. The DAO also aims to grow the treasury and
            pay out dividends in perpetuity. Finally, the DAO plans to educate
            the broader crypto community on the benefits of risk managed,
            diversified portfolio management in a decentralized way.
          </p>
          <h4>Operations</h4>
          <p>
            Osmium DAO will be governed by the OsmiumShare NFT holders, who have
            at least minimum required amount of OSM tokens. NFT holders are
            responsible for adding and removing members from the Board, and
            participating in working groups to help move the DAO foward. Board
            members are responsible for all DAO actions, with the exception of
            treasury management. The board will be able to create necessary
            working groups for education, community outreach, marketing, fund
            raising and other necessary tasks. The board is also responsible for
            adding and removing members from the Investment Committee (IC).
          </p>
          <p>
            IC members have one sole responsibility, treasury management. They
            will be investing the treasury into different tokens, DeFi
            strategies, RealFi strategies, token liquidity management, and
            making decisions around distributions to token holders. Token
            holders are the claimants on the treasury. The treasury is owned by
            them, managed by the IC. If the treasury is voted to be dissolved
            (by the NFT holders or IC members), the treasury will be distributed
            pro-rata to the token holders. If the IC decides to distribute any
            amount of treasury value, this value will be distributed pro-rata to
            token holders.
          </p>
        </article>
      </div>
    </div>
  )
}

export default About
