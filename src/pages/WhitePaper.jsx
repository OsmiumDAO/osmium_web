import { Button, Link } from '@mui/material'
import React from 'react'
import logo from '../assets/logo_dark.png'
import './css/Whitepaper.css'
import { FaCloudDownloadAlt } from 'react-icons/fa'
import whitePaper from '../assets/white_paper.pdf'

function WhitePaper() {
  return (
    <div className='container whitepaper' id='white paper'>
      <h2 className='subtitle'>White paper</h2>
      <div className='flex'>
        <div className='whitepaper__left about__image'>
          <img src={logo} alt='' className='whitepaper__logo' />
        </div>
        <div className='whitepaper__right about__text'>
          <h4>Abstract</h4>
          <p>
            Web3.0 and Cryptocurrency is maturing fast, users are beginning to
            witness a flood of traditional and retail investors into the crypto
            space. Crypto startups have plenty of equity and more centralized
            institutional investors are coming to view them as viable investment
            vehicles which from past statistics, has been true and mostly
            enriching them at the detriment of the decentralized crypto
            community. A pool of investors known as Venture Capital (VC),
            wishing to make a considerable amount of money quickly, are inherent
            to most startup projects. However most of these institutional
            investors enrich themselves at the detriment of the small everyday
            retail crypto users leaving most small investors with almost
            worthless bags of cryptos.
          </p>
          <p>
            The OsmiumDAO ecosystem will be fully a community owned project with
            the aim of providing a suite of values to its members otherwise
            known as DAO participants. OsmiumDAO will be a community driven
            investment unit where all members/participants decide and vote on
            certain investment opportunities of which upon consensus, such
            investments will be taken upon with treasury funds (otherwise known
            as DAO funds) and all proceeds from such investments, will be used
            for further development of the DAO as well as incentivizing its
            members
          </p>
          <Link href={whitePaper} download>
            <Button
              startIcon={<FaCloudDownloadAlt />}
              className='btn btn-large'
            >
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default WhitePaper
