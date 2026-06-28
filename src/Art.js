import React, { useContext, useRef, useState } from "react";
import Sketch from "react-p5";
import './Art.css'
import { useNavigate } from "react-router-dom";
import seedrandom from "seedrandom";
import { ArtContext } from './App';

function Art() {
    const navigate = useNavigate()
    const { artData } = useContext(ArtContext)
    
    const seedText = artData.seedText || ''
    const capsSeedText = artData.displayText || ''
    
    const [p5, setP5] = useState();
    // Size canvas to the visible content area
    const portraitWidth = window.innerWidth;
    const portraitHeight = window.innerHeight - 90 - 70; // subtract header + footer

    // Seed generation
    var seed = seedrandom(seedText)();
    seed = parseFloat(seed) * 10000000000000000
    seed = seed.toString().split('.').join("")
    seed = (""+seed).split("").filter(val => val !== "0")

    function back(){
        navigate('/input')
    }

    var white = [255, 244, 219]
    var black = [0,0,0]
    var red = [204, 51, 51]
    var yellow = [255, 204, 0]
    var blue = [0, 57, 166]
    var colourpicker = []
    
    var colours = [white,black,yellow,blue,red]
    
    for(var j = 0; j<=seed.length-1; j++){
      if(seed[j]<=1|| seed[j]<=2){ colourpicker.push(0) }
      if(seed[j]<=3){ colourpicker.push(0) }
      if( seed[j]<=4 ||seed[j]<=5){ colourpicker.push(2) }
      if(seed[j]<=6|| seed[j]<=7){ colourpicker.push(3) }
      if(seed[j]<=8|| seed[j]<=9){ colourpicker.push(4) }
    }
    colourpicker = colourpicker.slice(0,seed.length)

    var setup = (p5, canvasParentRef) => {
        p5.createCanvas(portraitWidth, portraitHeight).parent(canvasParentRef)
        setP5(p5)
    }
    
    var SF = 15
    var Sweight = SF * (portraitWidth/1280)
    if(portraitHeight>portraitWidth){
        Sweight = SF * (portraitHeight/1280)
    }

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
            
            if (((yleng)*seed[i]/10) > ((yleng)*seed[i+1]/10)){ biggerDialator.push(0) }
            if (((yleng)*seed[i]/10) < ((yleng)*seed[i+1]/10)){ biggerDialator.push(1) }
            if (((yleng)*seed[i]/10) === ((yleng)*seed[i+1]/10)){ biggerDialator.push(2) }
            
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

    function download(){
        if(p5){
            const fileName = capsSeedText || 'artwork'
            p5.save(fileName + '.png')
        }
    }

    const displayText = capsSeedText ? `"${capsSeedText}"` : 'GEOMETRIC COMPOSITION';

    return (
        <div className="art-page">
            <div className="ap-v1"></div>
            <div className="ap-v2"></div>
            <div className="ap-h1"></div>
            <div className="ap-h2"></div>
            <div className="ap-h3"></div>
            <div className="ap-h4"></div>

            <div className="art-header">
                <div className="title-block">
                    <p className="art-eyebrow">Your composition</p>
                    <h1 className="art-title">
                        <mark>{displayText}</mark>
                    </h1>
                </div>
                <div className="header-badge">DE STIJL · UNIQUE</div>
            </div>

            {/* ref attached here so getCanvasDimensions can read clientWidth/Height */}
            <div className="art-canvas-zone">
                <div className="canvas-inner">
                    <Sketch setup={setup} draw={draw} id="Sketch" />
                </div>
            </div>

            <div className="art-footer">
                <button className="Back" onClick={back}>
                    <span>← BACK</span>
                </button>
                <div className="foot-div"></div>
                <button className="Download" onClick={download}>
                    <span>DOWNLOAD ↓</span>
                </button>
            </div>
        </div>
    )
}

export default Art