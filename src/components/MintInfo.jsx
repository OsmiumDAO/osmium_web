import React from 'react'
import { Wallet } from '../pages/Wallets'
import './css/MintInfo.css'

function MintInfo() {
  return (
    <div className='comingsoon mintinfo'>
      <p>Send exactly the amount of ADA specified below:</p>
      <ul>
        <li>
          <span>1NFT </span>
          <span>107ADA</span>
        </li>
        <li>
          <span>3NFTs</span>
          <span>321ADA</span>
        </li>
        <li>
          <span>5NFTs</span>
          <span>521ADA</span>
        </li>
        <li>
          <span>10NFTs</span>
          <span>1031ADA</span>
        </li>
      </ul>
      <p>Send ADA to the mint address below</p>
      <Wallet
        wallet={{
          address: 'addr1v86z88xz89m234enl24m3za25fqqevx566h6m6k93r9x7vsk7g7jv',
        }}
      />
    </div>
  )
}

export default MintInfo
