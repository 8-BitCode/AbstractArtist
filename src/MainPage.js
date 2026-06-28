import React, { useState, useContext } from 'react'
import './MainPage.css'
import { useNavigate } from 'react-router-dom'
import { ArtContext } from './App'

function MainPage() {
    const navigate = useNavigate()
    const { setArtData } = useContext(ArtContext)
    const [capsSeedText, setCapsSeedText] = useState('')

    function textForm(val){
        const text = val.target.value
        setCapsSeedText(text)
    }
    
    function generateSeed(){
        if (capsSeedText.trim() === '') {
            alert('Please enter some text first!')
            return
        }
        const processedText = capsSeedText.replaceAll(/ /g, '').toLowerCase()
        setArtData({ seedText: processedText, displayText: capsSeedText })
        navigate('/art')
    }

    function goBack() {
        navigate('/')
    }

    return (
        <div className="input-page">
            {/* Grid lines */}
            <div className="ip-v1"></div>
            <div className="ip-v2"></div>
            <div className="ip-v3"></div>
            <div className="ip-h1"></div>
            <div className="ip-h2"></div>

            {/* Left color column */}
            <div className="ip-left">
                <div className="hl1"></div>
                <div className="left-yellow"></div>
                <div className="hl2"></div>
                <div className="left-red"></div>
                <div className="hl3"></div>
                <div className="left-blue">
                    <p className="left-label">De Stijl<br/>Generator<br/>Studio</p>
                </div>
            </div>

            {/* Right input area */}
            <div className="ip-right">
                <p className="input-eyebrow">Step 01 · Enter Your Text</p>
                <h2 className="input-heading">
                    YOUR WORDS,<br /><em>YOUR</em> GRID
                </h2>

                <div className="textarea-frame">
                    <textarea
                        onChange={textForm}
                        placeholder="Type anything — a word, a phrase, a feeling…"
                        value={capsSeedText}
                        maxLength={500}
                    />
                    <div className="char-count">{capsSeedText.length} / 500</div>
                </div>

                <div className="button-row">
                    <button className="Generate" onClick={generateSeed}>
                        <span>GENERATE CANVAS</span>
                        <span>→</span>
                    </button>
                    <button className="BackButton" onClick={goBack}>← BACK</button>
                </div>

                <p className="input-hint">Every unique text produces a unique composition</p>
            </div>
        </div>
    )
}

export default MainPage