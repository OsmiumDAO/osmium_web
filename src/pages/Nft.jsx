import React, { useState } from 'react'
import './css/nft.css'
import nftImg from '../assets/nft_img.png'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from '@mui/material'
import Popup from '../components/Popup'
import ComingSoon from '../components/ComingSoon'
import { MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md'

function Nft() {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState(false)
  return (
    <div className='container nft' id='nft'>
      <h2 className='subtitle'>NFT</h2>
      <div className='flex'>
        <section className='about__image'>
          <img src={nftImg} alt='' />
        </section>
        <section className='about__text'>
          <p>
            Non Fungible Tokens are going to play a crucial role in the
            OsmiumDAO ecosystem. Holding these NFTs will provide access to
            rewards and incentives beyond the simple utility of governance
            rights. This includes $OSM token distribution, governance, community
            pass, access to events and educational contents, and many more as
            determined by the community. The DAOs treasury will be seeded
            through the sales of these NFTs. OsmiumDAO will feature three series
            of NFT collections; OG OsmiumShare, OsmiumShare and OSPioneer.
          </p>
          <Accordion
            aria-controls='panel1a-content'
            id='panel1a-header'
            elevation={0}
            className='myaccordion dark'
          >
            <AccordionSummary onClick={() => setExpanded(!expanded)}>
              {expanded ? (
                <span className='expand_text'>
                  <MdOutlineExpandLess />
                </span>
              ) : (
                <span className='expand_text'>
                  More... <MdOutlineExpandMore />
                </span>
              )}
            </AccordionSummary>
            <AccordionDetails>
              <p>
                The OsmiumShare is a collection of 10,000 unique art
                collectibles on the Cardano blockchain. The OsmiumShare NFT will
                be auctioned in two stages (1000 as OG collections and the
                remaining 9000 for public). OsmiumShare will virtually represent
                a share of a portion of the $OSM tokens. Holders of this NFT
                will be eligible for a per Epoch OSM token claim for 8 years
                (find more details in tokenomics), OsmiumShare NFT will serve as
                membership cards/pass for the ecosystem, governance and further
                relevance as decided by the community. In a more generic
                outlook, OsmiumShare NFT holders are the owners of the DAO and
                will play an important role in the entirety of the project.
              </p>
              <p>
                The OSPioneer will be an unlimited supply collection. This will
                also serve as a membership pass to the ecosystem. Any individual
                who wants to have access to the DAOs exclusive information and
                educational contents such as smart passive investment options in
                DEFI, learn risk management strategy and its benefits, liquidity
                mining, portfolio management and diversification, understand
                market dynamics from different viewpoints, participate in
                OsmiumDAO governance discussion and any other crypto educational
                content, must possess the OSPioneer NFT. This collection will be
                auctioned at a uniform rate of 10ADA.
              </p>
            </AccordionDetails>
          </Accordion>

          <Button
            onClick={() => setOpen(true)}
            className='btn btn-large mintbtn'
          >
            Mint now
          </Button>
        </section>
      </div>
      <Popup open={open} setOpen={setOpen}>
        <ComingSoon />
      </Popup>
    </div>
  )
}

export default Nft
