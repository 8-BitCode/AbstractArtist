import React from "react";
import Sketch from "react-p5";
import './Art.css'
import { useState } from "react";

function App(props) {
  //cool code: Abstract artistddffsa, hnhkn /b.;çñlbkkn nky6ilo8u.,p0-o hfuovh j, wsdcvikljblksjdvbsl, nice 12345678909876543211234567890987654321312312312:)))Psacxa312sxsaxassac654321cascscacsxswcesawdawsqcxsasxsadc sac, fgdfgfdgf, ‎, odixdkjvb lzfvdsdvfxsfscvfdd, beansgugifssfgs
  // ewefwefwefefweefwcccsascacascccsvvdcsvdssdddffexcccdscsdwdwwdqdqwwwdqwdwdwqdddqwcdcsdcdscssddsc
  

    const setMainFade = props.setMainFade
    const setMainDisplay = props.setMainDisplay
    const setMainDisable = props.setMainDisable
    const artFade = props.artFade
    const setArtFade = props.setArtFade
    const artDisplay = props.artDisplay
    const setArtDisplay = props.setArtDisplay
    const artDisable = props.artDisable
    const setArtDisable = props.setArtDisable
    var portraitWidth = window.screen.width - (window.screen.width/3)
    const portraitHeight = window.screen.height- (window.screen.height/3)
    const seedText = props.seedText
    const lock = props.lock
    const setLock = props.setLock
    const capsSeedText = props.capsSeedText
    
    
    const [p5, setP5] = useState();
    if (portraitHeight>portraitWidth){
      portraitWidth = window.screen.width - (window.screen.width/6)
    }
    

    //May change this later to add to randomness
    var seed = new Math.seedrandom(seedText);
    seed = parseFloat(seed()) * 10000000000000000
    seed = seed.toString().split('.').join("")
    seed = (""+seed).split("").filter(val => val !== "0")



    function back(){
      setArtFade(0)
      setMainFade(1)

      setTimeout(() => 
      setArtDisplay('none'),
        300)
        setTimeout(() => 
        setMainDisplay('inline'),
        300)

      setArtDisable(true)
      setMainDisable(false)
      setLock(1)
    

    }




    var white = [255, 244, 219]
    var black = [0,0,0]
    var red = [204, 51, 51]
    var yellow = [255, 204, 0]
    var blue = [0, 57, 166]
    var colourpicker = []
    
    var colours = [white,black,yellow,blue,red]
    
    
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
            // p5.stroke('rgb(0,255,0)');
            // p5.strokeWeight(6)
            p5.rect((x),((yleng)*seed[i]/10 + Sweight/2),((portraitWidth)*seed[seed[i]]/10 ),((yleng)*seed[seed[i]]/10 )) 
            
            // p5.stroke('rgb(100%,0%,10%)');
            // p5.strokeWeight(10)
            
            
           
            p5.rect((x + (portraitWidth)*seed[seed[i]]/10),((yleng)*seed[i]/10 + Sweight/2),(Sweight/100),(portraitHeight))
            
            p5.rect((x),(0),(Sweight/100),(portraitHeight))
            
            if(((portraitWidth)*seed[seed[i]]/10) > ((xleng)*seed[i]/10 ) ){

              // p5.stroke(255, 204, 0);
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
      

      
      
      document.addEventListener('keydown', function(e){
        if(e.key === 'ArrowLeft' && lock === 2){
            
            back()
           
        }
    
    });
    
    
    
    function download (){

      if(p5){
        p5.save(capsSeedText+ '.png')
        
      }
      
    }


  


    return (
    <div className='Art' style={{
      opacity:artFade,
      display:artDisplay,
      disabled:artDisable,
      
    }}>
      <div className='Artcon'>
      <Sketch setup={setup} draw={draw} id='Sketch' />
      </div>
    
    <div className='Batcon'>
  <button className='Back' onClick={back}>Back</button>
  <button className='Download' onClick={download}>Download</button>
    </div>

    
    </div>
    )
  }

    
  
  export default App
