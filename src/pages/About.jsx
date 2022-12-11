import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import React, { useState } from 'react'
import aboutImg from '../assets/about_img.png'
import './css/About.css'
import { MdOutlineExpandLess } from 'react-icons/md'
import { MdOutlineExpandMore } from 'react-icons/md'

function About() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className='container about' id='about'>
      <h2 className='subtitle'>About</h2>
      <div className='flex'>
        <div className='about__image'>
          <img src={aboutImg} alt='' />
        </div>
        <article className='about__text'>
          <p>
            OsmiumDAO represents a risk managed treasury owned by the community.
            It aims to create a sustainable, perpetual treasury owned directly
            by the token holders, governed by OsmiumShare NFT holders. The DAO
            also aims to grow the treasury and pay out rewards periodically to
            holders. Finally, the DAO plans to educate the broader crypto
            community on the benefits of risk managed, diversified portfolio
            management in a decentralized way.
          </p>
          <Accordion
            aria-controls='panel1a-content'
            id='panel1a-header'
            elevation={0}
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
            <AccordionDetails style={{ backgroundColor: 'var(--bg-white)' }}>
              <h4>Governance</h4>
              <p>
                Osmium DAO will be governed by the OsmiumShare NFT holders, who
                have at least a minimum required amount of OSM tokens as
                determined By the community on a quaterly basis. NFT holders are
                responsible for adding and removing members from the Board, and
                participating in working groups to assist in maintaining growing
                the DAO.
              </p>
              <p>
                Board members are responsible for coordinating all DAO actions
                and implementing the outcome of the community votes, with the
                exception of treasury management. The board will be able to
                create necessary working groups for education, community
                outreach, marketing, fund raising and other necessary tasks. The
                board is also responsible for adding and removing members from
                the Investment Committee (IC).
              </p>
              <p>
                IC members have one sole responsibility, treasury management.
                They will be investing the treasury into different tokens, DeFi
                strategies, RealFi strategies, token liquidity management, and
                making decisions around distributions to token holders.
              </p>
              <p>
                Token holders are the claimants on the treasury. The treasury is
                owned by them, managed by the IC. If the treasury is voted to be
                dissolved (by the NFT holders), the treasury will be distributed
                pro-rata to the token holders. If the IC decides to distribute
                any amount of treasury value, this value will be distributed
                pro-rata to tokens held.
              </p>
            </AccordionDetails>
          </Accordion>
        </article>
      </div>
    </div>
  )
}

export default About
