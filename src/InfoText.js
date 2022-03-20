import React from 'react'
import './InfoText.css'


export default function InfoText(props) {
  
  

  const aboutFade = props.aboutFade
    const setAboutFade = props.setAboutFade
    const aboutDisplay = props.aboutDisplay
    const setAboutDisplay = props.setAboutDisplay
    const aboutDisable = props.aboutDisable
    const setAboutDisable = props.setAboutDisable
    const setMainFade = props.setMainFade
    const setMainDisplay = props.setMainDisplay
    const setMainDisable = props.setMainDisable
    const lock = props.lock
    const setLock = props.setLock

    


    function FadeOut() {
      //i would remove the if statement if it wasnt for the fact that doing so messes up transtion animation
      
        setAboutFade(0)
        setMainFade(1)
        
      
      setAboutDisable(true)
      setMainDisable(false)
      
      //made a set tme out here so that fade out can happen then display can go


      setTimeout(() => 
      setAboutDisplay('none'),
        300)
        setTimeout(() => 
        setMainDisplay('inline'),
        300)
      
      setLock(1)
      
  

    }

    document.addEventListener('keydown', function(e){
      
      if(e.key == 'ArrowRight' && lock == 0){
        FadeOut()
        
      }

  } );

  return (
    <>
      <div className='About' style={{

        opacity: aboutFade,
        display: aboutDisplay,
        
        }}>
         
        This website transforms text into an abstract piece of geometric art

        <br></br>

        <button className='StartButton' onClick={FadeOut} disabled={aboutDisable}>
          Begin
          </button>

      </div>
    </>
  )

}   
    
  
