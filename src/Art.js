import React, { useContext, useRef, useEffect } from "react";
import Sketch from "react-p5";
import './Art.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import seedrandom from "seedrandom";
import { ArtContext } from './App';

function Art() {
    const navigate = useNavigate()
    const { artData } = useContext(ArtContext)
    
    const seedText = artData.seedText || ''
    const capsSeedText = artData.displayText || ''
    
    const [p5, setP5] = useState();
    const marqueeRef = useRef(null);
    
    var portraitWidth = window.screen.width - (window.screen.width/3)
    const portraitHeight = window.screen.height- (window.screen.height/3)
    
    if (portraitHeight > portraitWidth){
      portraitWidth = window.screen.width - (window.screen.width/6)
    }

    // Calculate animation duration based on text length for constant speed
    useEffect(() => {
        if (marqueeRef.current && capsSeedText && capsSeedText.length > 43) {
            const textElement = marqueeRef.current;
            const textWidth = textElement.scrollWidth;
            const containerWidth = textElement.parentElement.offsetWidth;
            
            // Calculate total distance (text width + container width for smooth entry/exit)
            const totalDistance = textWidth + containerWidth;
            
            // Constant speed: 200 pixels per second (adjust this value to change speed)
            const pixelsPerSecond = 200;
            const duration = totalDistance / pixelsPerSecond;
            
            // Set the animation duration
            textElement.style.animationDuration = `${duration}s`;
        }
    }, [capsSeedText]);

    // Seed generation - YOUR ORIGINAL CODE
    var seed = seedrandom(seedText)();
    seed = parseFloat(seed) * 10000000000000000
    seed = seed.toString().split('.').join("")
    seed = (""+seed).split("").filter(val => val !== "0")

    function back(){
        navigate('/input')
    }

    // Color setup - YOUR ORIGINAL CODE
    var white = [255, 244, 219]
    var black = [0,0,0]
    var red = [204, 51, 51]
    var yellow = [255, 204, 0]
    var blue = [0, 57, 166]
    var colourpicker = []
    
    var colours = [white,black,yellow,blue,red]
    
    // YOUR ORIGINAL COLOR PICKER LOGIC
    for(var j = 0; j<=seed.length-1; j++){
      if(seed[j]<=1|| seed[j]<=2){
        colourpicker.push(0)
      }
      if(seed[j]<=3){
        colourpicker.push(0)
      }
      if( seed[j]<=4 ||seed[j]<=5){
        colourpicker.push(2)
      }
      if(seed[j]<=6|| seed[j]<=7){
        colourpicker.push(3)
      }
      if(seed[j]<=8|| seed[j]<=9){
        colourpicker.push(4)
      }
    }
    colourpicker = colourpicker.slice(0,seed.length)

    var setup = (p5, canvasParentRef) => {
        p5.createCanvas(portraitWidth, portraitHeight).parent(canvasParentRef)
        setP5(p5)
    }
    
    // YOUR ORIGINAL SCALE FACTOR
    var SF = 15
    var Sweight = SF * (portraitWidth/1280)
    if(portraitHeight>portraitWidth){
        Sweight = SF * (portraitHeight/1280)
    }

    // YOUR ORIGINAL COUNT MAP LOGIC
    const countMap = new Map()
    countMap[0] = 0
    countMap[1] = 0 
    countMap[2] = 0 
    countMap[3] = 0 
    countMap[4] = 0
    const out = []

    colourpicker.forEach(number => countMap[number]++)

    while (countMap[0] + countMap[1] + countMap[2] + countMap[3] + countMap[4] !== 0) {
        for(let i = 0; i <= 4; i++) {
            if (countMap[i] > 0) {
                out.push(i)
                countMap[i]--
            }
        }
    }

    // YOUR ORIGINAL DRAW FUNCTION
    const draw = p5 => {   
        p5.background(colours[0])
        p5.noFill()
        p5.strokeWeight(Sweight)
        var x = Sweight/2
        var xleng = portraitWidth *2/3
        var yleng = portraitHeight *2/3
        var i = 0
        var biggerDialator = []
          
        while(x<=portraitWidth){
            i = i + 1
            
            if (((yleng)*seed[i]/10) > ((yleng)*seed[i+1]/10)){
              biggerDialator.push(0)
            }
            if (((yleng)*seed[i]/10) < ((yleng)*seed[i+1]/10)){
              biggerDialator.push(1)
            }
            if (((yleng)*seed[i]/10) === ((yleng)*seed[i+1]/10)){
              biggerDialator.push(2)
            }
            
            p5.fill(colours[colourpicker[i]])
            p5.rect((x),(Sweight/2),((xleng)*seed[i]/10 ),((yleng)*seed[i]/10))
            
            p5.fill(colours[colourpicker[i+2]])
            p5.rect((x),((yleng)*seed[i]/10 + Sweight/2),((portraitWidth)*seed[seed[i]]/10 ),((yleng)*seed[seed[i]]/10 )) 
            
            p5.rect((x + (portraitWidth)*seed[seed[i]]/10),((yleng)*seed[i]/10 + Sweight/2),(Sweight/100),(portraitHeight))
            p5.rect((x),(0),(Sweight/100),(portraitHeight))
            
            if(((portraitWidth)*seed[seed[i]]/10) > ((xleng)*seed[i]/10 ) ){
              p5.fill(colours[colourpicker[i+3]])
              p5.rect((x + ((portraitWidth)*seed[seed[i]]/10 )),((0) + Sweight/2),(Sweight/100),(((yleng)*seed[i]/10) - x) )
              p5.rect((x),((yleng)*seed[i]/10 + Sweight/2),((portraitWidth)*seed[seed[i]]/10 -(((xleng)*seed[i]/10 )) ),((yleng)*seed[seed[i]]/10 )) 
            }
           
            x = x + (xleng)*seed[i]/10
            xleng = portraitWidth - Math.round(((xleng)*seed[i]/10)/x) 
        }
        
        p5.rect((0),(0),(portraitWidth),(Sweight/2))
        p5.rect((0),(0),(Sweight/2),(portraitHeight))
        p5.rect((0),(portraitHeight-Sweight/2),(portraitWidth),(Sweight/2))
        p5.rect((portraitWidth-Sweight/2),(0),(Sweight/2),(portraitHeight))
    }

    function download (){
        if(p5){
            const fileName = capsSeedText || 'artwork'
            p5.save(fileName + '.png')
        }
    }

    // Check if text is too long for marquee effect
    const isTextLong = capsSeedText && capsSeedText.length > 43;
    const displayText = capsSeedText ? `"${capsSeedText}"` : 'GEOMETRIC COMPOSITION';

    return (
        <div className='Art'>
            {/* Mondrian background blocks */}
            <div className="mondrian-block block-1"></div>
            <div className="mondrian-block block-2"></div>
            <div className="mondrian-block block-3"></div>
            <div className="mondrian-block block-4"></div>
            
            {/* Art title with marquee effect for long text */}
            <div className="art-title">
                <div className="marquee-container">
                    <div 
                        ref={marqueeRef}
                        className={`marquee-content ${!isTextLong ? 'static-title' : ''}`}
                    >
                        {displayText}
                    </div>
                </div>
            </div>
            
            <div className='Artcon'>
                <div className="canvas-container">
                    <Sketch setup={setup} draw={draw} id='Sketch' />
                </div>
            </div>
        
            <div className='Batcon'>
                <button className='Back' onClick={back}>BACK</button>
                <button className='Download' onClick={download}>DOWNLOAD</button>
            </div>
        </div>
    )
}

export default Art