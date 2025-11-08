import React from 'react'
import './InfoText.css'
import { useNavigate } from 'react-router-dom'

export default function InfoText() {
  const navigate = useNavigate()

  function handleStart() {
    navigate('/input')
  }

  return (
    <>
      <div className="color-block color-block-1"></div>
      <div className="color-block color-block-2"></div>
      <div className='About'>
        <div>
          MONDRIAN ART GENERATOR
        </div>
        <div className="subtitle">
          Transform text into geometric art inspired by Piet Mondrian
        </div>
        <button 
          className='StartButton' 
          onClick={handleStart}
        >
          CREATE ART
        </button>
      </div>
    </>
  )
}