import React from 'react'
import './css/Osm.css'
import osmImg from '../assets/osm_img.png'
import { Link } from '@mui/material'

function Osm() {
  return (
    <div className='osm container' id='get osm'>
      <h2 className='subtitle'>OSM</h2>
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
              asset1q53lwe67n2sqsqx4ek6a06f6vw24yjqefk8f53
            </Link>
          </p>
          <p className='addresses'>
            <strong>Policy ID:</strong>
            <Link href='https://cardanoscan.io/tokenPolicy/37a2b93b4aa2b286b92b7099faff0bb87e0c629a5079c0584da2d577'>
              37a2b93b4aa2b286b92b7099faff0bb87e0c629a5079c0584da2d577
            </Link>
          </p>
          <p>
            The OSM token is designed to serve as a claim on the treasury. If
            the pioneers ever decide to dissolve the treasury, all treasury
            funds will be distributed pro-rata to OSM token holders. With an
            extremely low supply, supportive community, slow and decentralized
            emission rate and periodic secondary market buyback, $OSM tokens are
            expected to keep their value without significant depreciation
            overtime. The DAO is designed to ensure that external funds are
            always sought for through numerous ways which in the long term, will
            hedge the overall value of OSM.
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
