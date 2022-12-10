import React, { useState } from 'react'
import './css/nft.css'
import nftImg from '../assets/nft_img.png'
import { Button } from '@mui/material'
import Popup from '../components/Popup'
import ComingSoon from '../components/ComingSoon'

function Nft() {
  const [open, setOpen] = useState(false)
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
            OsmiumDAO ecosystem. These NFTs will have suites of rewarding and
            incentivizing benefits to its holders. This includes $OSM token
            distribution, governance, community pass, access to events and
            educational contents, airdrops and many more as outlined by the
            community. The DAOs initial fundraising model will be through the
            NFT sales. OsmiumDAO will feature two series of NFT collections
            namely OsmiumShare and OSPioneer.
          </p>
          <p>
            The OsmiumShare is a collection of 10,000 unique art collectibles on
            the Cardano blockchain. The OsmiumShare NFT will be auctioned in two
            stages (1000 as OG collections and the remaining 9000 for public).
            OsmiumShare will virtually represent a share of a portion of the
            $OSM tokens. Holders of this NFT will be eligible for a per Epoch
            OSM token claim for 8 years (find more details in tokenomics),
            OsmiumShare NFT will serve as membership cards/pass for the
            ecosystem, governance and further relevance as decided by the
            community. In a more generic outlook, OsmiumShare NFT holders are
            the owners of the DAO and will play an important role in the
            entirety of the project.
          </p>
          <p>
            The OSPioneer will be an unlimited supply collection. This will also
            serve as a membership pass to the ecosystem. Any individual who
            wants to have access to the DAOs exclusive information and
            educational contents such as smart passive investment options in
            DEFI, learn risk management strategy and its benefits, liquidity
            mining, portfolio management and diversification, understand market
            dynamics from different viewpoints, participate in OsmiumDAO
            governance discussion and any other crypto educational content, must
            possess the OSPioneer NFT. This collection will be auctioned at a
            uniform rate of 10ADA.
          </p>
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
