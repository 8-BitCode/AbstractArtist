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
        
        // Process the text for the seed (your original logic)
        const processedText = capsSeedText.replaceAll(/ /g, '').toLowerCase()
        
        // Store in context instead of URL
        setArtData({
            seedText: processedText,
            displayText: capsSeedText
        })
        
        // Navigate without URL parameters
        navigate('/art')
    }

    function goBack() {
        navigate('/')
    }

    return (
        <div className='container'>
            <div className="mondrian-accent accent-1"></div>
            <div className="mondrian-accent accent-2"></div>
            <div className="mondrian-accent accent-3"></div>
            
            <div className='Txt'>ENTER YOUR TEXT</div>
            
            <div className="textarea-wrapper">
                <textarea 
                    onChange={textForm} 
                    placeholder="Type anything... Create your own Mondrian composition"
                    value={capsSeedText}
                ></textarea>
            </div>
            
            <div className="button-wrapper">
                <button className='Generate' onClick={generateSeed}>
                    GENERATE ART
                </button>
                <button className='BackButton' onClick={goBack}>
                    BACK
                </button>
            </div>
            
            <div className="instruction">
                Each text creates a unique geometric composition
            </div>
        </div>
    )
}

export default MainPage