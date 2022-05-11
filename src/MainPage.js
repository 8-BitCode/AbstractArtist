import React from 'react'
import './MainPage.css'

function MainPage(props) {

    var suedoSeedText = 0
   
    const mainFade = props.mainFade
    const setMainFade = props.setMainFade
    const mainDisplay = props.mainDisplay
    const setMainDisplay = props.setMainDisplay
    const mainDisable = props.mainDisable
    const setMainDisable = props.setMainDisable
    const setArtFade = props.setArtFade
    const setArtDisplay = props.setArtDisplay
    const setArtDisable = props.setArtDisable
    const seedText = props.seedText
    const setSeedText = props.setSeedText
    const lock = props.lock
    const setLock = props.setLock
    const capsSeedText = props.capsSeedText
    const setCapsSeedText = props.setCapsSeedText


    
    // interpolates between values of opacity,disbale & display when info = 0, main = 1, visa vera

    

    function textForm(val){
        suedoSeedText = val.target.value
        setCapsSeedText(suedoSeedText)
        suedoSeedText = suedoSeedText.replaceAll(/ /g, '').toLowerCase()
        setSeedText(suedoSeedText)
        return 
    }
    function generateSeed(){
        

        setMainFade(0)
        setArtFade(1)
      
        setTimeout(() => 
        setMainDisplay('none'),
        300)
        setTimeout(() => 
        setArtDisplay('inline'),
        300)


        setMainDisable(true)
        setArtDisable(false)
        setLock(2)
        
        
    }
    

  
 
  document.addEventListener('keydown', function(e){
    if(e.key == 'ArrowRight' && lock == 1){
      generateSeed()
      
      
      
 
    }

} );

    


  return (
    <div className='container' style={{ 


        opacity: mainFade,
        disable: mainDisable,
        display: mainDisplay,

    }}>
    
    <div className = 'Txt' style={{opacity: mainFade,}}>Input text here:</div>
    <br></br>
    <textarea onChange={textForm} rows='10'></textarea>
    <br></br>
    <button className='Generate' value={seedText} onClick={generateSeed} >Generate "Art"</button>
    
    </div>
 
  )
}

export default MainPage