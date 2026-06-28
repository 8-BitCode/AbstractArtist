import React from 'react'
import './InfoText.css'
import { useNavigate } from 'react-router-dom'

export default function InfoText() {
  const navigate = useNavigate()

  return (
    <>
      <div className="landing">

        {/* LEFT — stacked colour blocks */}
        <div className="left-col">
          <div className="cell-red"></div>
          <div className="lh-1"></div>
          <div className="cell-blue"></div>
          <div className="lh-2"></div>
          <div className="cell-yellow"></div>
        </div>

        {/* CENTRE — thick vertical divider */}
        <div className="center-div"></div>

        {/* RIGHT — all text + CTA */}
        <div className="right-col">
          <p className="hero-eyebrow">De Stijl · Generative Art · 2025</p>

          <h1 className="hero-title">
            <span>MONDRIAN</span>
            <span className="accent-word">ART</span>
            <span>GENERATOR</span>
          </h1>

          <p className="hero-subtitle">
            Enter any text. Watch it become a unique geometric composition in the spirit of De Stijl.
          </p>

          <div className="btn-wrapper">
            <button className="StartButton" onClick={() => navigate('/input')}>
              <span className="btn-text">CREATE CANVAS</span>
              <span className="btn-arrow">→</span>
            </button>
          </div>

          <p className="btn-hint">Click to begin</p>
        </div>

      </div>

      <p className="landing-tag">Each composition is unique · Infinite possibilities</p>
    </>
  )
}