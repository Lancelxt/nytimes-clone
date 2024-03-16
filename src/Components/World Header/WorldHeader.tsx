import React from 'react'
import './WorldHeader.css'

const WorldHeader = () => {
  return (
    <div className='world-header'>
      <h1>World News</h1>
      <ol className='countries-list'>
    <li>AFRICA</li>
    <li>AMERICAS</li>
    <li>ASIA</li>
    <li>AUSTRALIA</li>
    <li>CANADA</li>
    <li>EUROPE</li>
    <li>MIDDLE EAST</li>
      </ol>
    </div>
  )
}

export default WorldHeader