import React from 'react'
import './css/nft.css'
import nftImg from '../assets/nft_img.png'

function Nft() {
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
            NFT sales. 100% of all funds realized through the sales of the NFTs
            will be remitted into the community Vault/Treasury which will be
            used for community chosen investments. This NFTs represent your
            percentage share of the treasury pro-rata to how many OSM tokens you
            hold. We consider our NFTs as shares to the community treasury.
            OsmiumDAO will feature two series of NFT collections namely
            OsmiumShare and OSPioneer.
          </p>
          <p>
            The OsmiumShare is a collection of 10,000 unique art collectibles on
            the Cardano blockchain. The OsmiumShare NFT will be auctioned in two
            stages (1000 as OG collections and the remaining 9000 for public).
            OsmiumShare will virtually represent a share of a portion of the
            $OSM tokens. Holders of this NFT will be eligible for a one-time
            monthly OSM token airdrop for 8years (find more details in
            tokenomics), OsmiumShare NFT will serve as membership cards/pass for
            the ecosystem, governance and further relevance as decided by the
            community. In a more generic outlook, OsmiumShare NFT holders are
            the owners of the DAO. 1000 units of the OsmiumShare NFTs will be
            auctioned initially at 103 ADA as OG collection and then the other
            9000 units of this collection will be auctioned at a uniform rate of
            103 ADA at a later date. 21 of the OG collection will be reserved in
            treasury for future giveaways / community events, 29 will be
            distributed to co-founders, 500 of the public Collection will be
            reserved for partnerships. However, Holders of this NFT will play an
            important role in the entirety of the project.
          </p>
          <p>
            <b>
              <u>OSPIONEER:</u>
            </b>{' '}
            The OSPioneer will be an unlimited supply collection. This will also
            serve as a membership card for the ecosystem. Any individual who
            wants to have access to the DAOs exclusive information and
            educational contents such as smart passive investment options in
            DEFI, learn risk management strategy and its benefits, liquidity
            mining, portfolio management and diversification, understand market
            dynamics from different viewpoints, participate in OsmiumDAO
            governance discussion and any other crypto educational content, must
            possess the OSPioneer NFT. This collection will be auctioned at a
            uniform rate of 10ADA.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Nft
