import { Button, Link } from '@mui/material'
import React, { useState } from 'react'
import { AiOutlineCopy } from 'react-icons/ai'
import wallets from '../data/wallets'
import './css/Wallets.css'

function Wallets() {
  return (
    <div className='container wallets' id='wallets'>
      <h2 className='subtitle'>DAO Wallets</h2>
      <ul className='wallets__list'>
        {wallets.map((w, i) => (
          <Wallet wallet={w} key={i + 1} />
        ))}
      </ul>
    </div>
  )
}

const Wallet = ({ wallet }) => {
  const [text, setText] = useState('copy')

  const handleCopy = async (address) => {
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(address)
    } else {
      document.execCommand('copy', true, address)
    }
    setText('copied!')
    return setTimeout(() => setText('copy'), 1500)
  }

  return (
    <li className='wallet'>
      <h4>{wallet?.title}</h4>
      <p>
        {wallet?.address}

        <button
          onClick={(e) => handleCopy(wallet?.address)}
          disabled={text !== 'copy'}
        >
          {text} {text === 'copy' && <AiOutlineCopy />}
        </button>
      </p>
      <Link href={wallet?.link} target='_blank'>
        <Button className='btn'>View</Button>
      </Link>
    </li>
  )
}
export default Wallets
