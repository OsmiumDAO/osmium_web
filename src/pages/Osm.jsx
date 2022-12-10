import React from 'react'
import './css/Osm.css'
import osmImg from '../assets/osm_img.png'
import { Link } from '@mui/material'

function Osm() {
  return (
    <div className='osm container' id='get osm'>
      {/* <h2 className='subtitle'>OSM</h2> */}
      <div className='flex'>
        <section className='about__image'>
          <img src={osmImg} alt='' />
        </section>
        <section className='about__text'>
          <p className='addresses'>
            <strong>Liquidity Pool:</strong>
            <Link href='https://app.minswap.org/swap?currencySymbolA=&tokenNameA=&currencySymbolB=37a2b93b4aa2b286b92b7099faff0bb87e0c629a5079c0584da2d577&tokenNameB=4f534d'>
              Minswap
            </Link>
          </p>
          <p className='addresses'>
            <strong>Asset:</strong>{' '}
            <Link href='https://pool.pm/asset1q53lwe67n2sqsqx4ek6a06f6vw24yjqefk8f53'>
              View
            </Link>
          </p>
          <p className='addresses'>
            <strong>Policy ID:</strong>
            <Link href='https://cardanoscan.io/tokenPolicy/37a2b93b4aa2b286b92b7099faff0bb87e0c629a5079c0584da2d577'>
              Policy
            </Link>
          </p>
          <p>
            The OsmiumDAO native token $OSM will serve as the residual claim on
            the treasury. The treasury is essentially owned by OSM tokens. If
            the Investment Committee decides to make distributions from the
            treasury, they will be made to NFT holders pro-rata to OSM tokens
            held (like a dividend). The investment committee may also choose to
            buyback (through open market operations) tokens and may also sell
            some of the tokens in the treasury to raise additional capital when
            they believe the time is right. The OSM tokens will also be used for
            governance of the DAO (voting) alongside the OsmiumShare NFTs. The
            total supply of $OSM will be 600k. The entire supply of $OSM will be
            distributed to DAO members/pioneers over the course of eight years
            and through a fair distribution model.
          </p>
          <p>
            OSM tokens can also be used as a medium of exchange. Being a
            decentralized organization with members all over the globe, OSM
            token will eventually see rapid adoption and will represent a
            standard of value to facilitate the sale, purchase and exchange of
            goods or services. As the DAO grows and its treasury, the community
            can establish partnerships and acquire businesses that will accept
            OSM as a means of payment.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Osm
