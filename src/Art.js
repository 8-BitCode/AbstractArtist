import React from "react";
import Sketch from "react-p5";
import './Art.css'
import { useState } from "react";

function App(props) {
  //cool code: Abstract artistddffsa, hnhkn /b.;çñlbkkn nky6ilo8u.,p0-o hfuovh j, wsdcvikljblksjdvbsl, nice 12345678909876543211234567890987654321312312312:)))Psacxa312sxsaxassac654321cascscacsxswcesawdawsqcxsasxsadc sac, fgdfgfdgf, ‎, odixdkjvb lzfvdsdvfxsfscvfdd, beansgugifssfgs

  

    const setMainFade = props.setMainFade
    const setMainDisplay = props.setMainDisplay
    const setMainDisable = props.setMainDisable
    const artFade = props.artFade
    const setArtFade = props.setArtFade
    const artDisplay = props.artDisplay
    const setArtDisplay = props.setArtDisplay
    const artDisable = props.artDisable
    const setArtDisable = props.setArtDisable
    const portraitWidth = window.screen.width - (window.screen.width/6)
    const portraitHeight = window.screen.height - (window.screen.height/3)
    const seedText = props.seedText
    const lineThic = portraitWidth * (50/1920)
    const lock = props.lock
    const setLock = props.setLock
    const capsSeedText = props.capsSeedText
    const setCapsSeedText = props.setCapsSeedText
    
    const [p5, setP5] = useState();
    
    

    //May change this later to add to randomness
    var seed = new Math.seedrandom(seedText);
    seed = parseFloat(seed()) * 10000000000000000
    seed = seed.toString().split('.').join("");;

    console.log(seed)
    var x = seed.slice(0,3)
    var y = seed.slice(3,6)
    var z = seed.slice(6,9)

    // this code made some muted colours :/

    // if (x > 255 ){
    //   x = seed.slice(0,2)
    // }
    // if(x > 255){
    //   y = seed.slice(3,5)
    // }
    // if(z > 255){
    //   z = seed.slice(6,8)
    // }
    if(x > 150 && y > 150 && z > 150){
      x = seed.slice(0,2)
      y = seed.slice(3,5)
      z = seed.slice(6,8)
    }

    var colourPicker = [0,0,0,0,0]

    var last = seed.slice(seed.length - 1)
    var secondToLast = seed.slice(seed.length - 2, seed.length-1)
    var thirdToLast = seed.slice(seed.length - 3, seed.length - 2)
    var fourthToLast = seed.slice(seed.length - 4, seed.length - 3)
    var fifthToLast = seed.slice(seed.length - 5, seed.length - 4)

    var stroThic = lineThic * (last/lineThic)
    if(portraitHeight > portraitWidth){
      stroThic = 0
    }

    console.log('last: ' + last)


    for (var j = 0; j <=9; j++){
      if(last == j || last == j+1 ){
        if(j % 2 != 0){
          colourPicker[0] = (j-1)/2
          
        }
        else{
          colourPicker[0] = j/2
        
        }
      }
      if(secondToLast == j || secondToLast == j+1 ){
        if(j % 2 != 0){
          colourPicker[1] = (j-1)/2
          
        }
        else{
          colourPicker[1] = j/2
        
        }
      }
      if(thirdToLast == j || thirdToLast == j+1 ){
        if(j % 2 != 0){
          colourPicker[2] = (j-1)/2
         
        }
        else{
          colourPicker[2] = j/2
          
        }
      }
      if(fourthToLast == j || fourthToLast == j+1 ){
        if(j % 2 != 0){
          colourPicker[3] = (j-1)/2
          
        }
        else{
          colourPicker[3] = j/2
          
        }
      }
      if(fifthToLast == j || fifthToLast == j+1 ){
        if(j % 2 != 0){
          colourPicker[4] = (j-1)/2
          
        }
        else{
          colourPicker[4] = j/2
          
        }
      }
    }
  
  var Xcor = [0,0,0,0,0]
  var Ycor = [0,0,0,0,0]

    for(var i = 0; i <= 9; i++){
      if(last == i ){
        Xcor[0] = portraitWidth * (i/10)
      }
      if(last == i ){
        Ycor[0] = portraitHeight * (i/10)
      
      }
      if(secondToLast == i ){
        Xcor[1] = portraitWidth * (i/10)
        
      }
      if(secondToLast == i ){
        Ycor[1] = portraitHeight * (i/10)
        
      }
      if(thirdToLast == i ){
        Xcor[2] = portraitWidth * (i/10)
        
      }
      if(thirdToLast == i ){
        Ycor[2] = portraitHeight * (i/10)
        
      }
      if(fourthToLast == i ){
        Xcor[3] = portraitWidth * (i/10)
        
      }
      if(fourthToLast == i ){
        Ycor[3] = portraitHeight * (i/10)
        
      }
      if(fifthToLast == i ){
        Xcor[4] = portraitWidth * (i/10)
        
      }
      if(fifthToLast == i ){
        Ycor[4] = portraitHeight * (i/10)
        
      }
    }

  

    

    
    console.log('Second to last: ' + secondToLast)
    console.log('x: ' + x)
    console.log('y: ' + y)
    console.log('z: ' + z)



    //TODO: split seed into 3 values for base background and triadic colours,
    var black = [0,0,0]
    var white = [255,255,255]
    var triadic1 = [x,y,z]
    var triadic2 = [z,x,y]
    var triadic3 = [y,z,x]

    var colours = [black,white,triadic1,triadic2,triadic3]


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
      console.log(Xcor)

      Xcor.sort((a,b) => {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });
    Ycor.sort((a,b) => {
      if(a > b) return 1;
      if(a < b) return -1;
      return 0;
  });




      
    
 
      

    

      var setup = (p5, canvasParentRef) => {

          p5.createCanvas(portraitWidth, portraitHeight).parent(canvasParentRef)
        
          setP5(p5)
          
      }
      

      const draw = p5 => {   
        p5.background(colours[2])

        p5.strokeWeight(stroThic)

        for(var l = 0; l<=4; l++){
          p5.fill(colours[colourPicker[l]])
          p5.rect(Xcor[l],0, lineThic, portraitHeight)
          p5.rect(0,Ycor[l], portraitWidth, lineThic)
          
        }
        for(var p = 0; p<=4; p++){
          p5.fill(colours[p])
          if(p == 0){
            p5.fill(colours[3])
          }
        p5.rect(Xcor[p] + lineThic, Ycor[p + (4-colourPicker[p])] + lineThic, Xcor[p + 1] - lineThic - Xcor[p], Ycor[p + (4-colourPicker[p]) + 1] - Ycor[p + (4-colourPicker[p])]-lineThic)
        

        }
  
      
        
      }

      document.addEventListener('keydown', function(e){
        if(e.key == 'ArrowLeft' && lock == 2){
            
            back()
           
        }
    
    } );
    
    
    
    function download (){

      if(p5){
        p5.save(capsSeedText.replaceAll(/ /g, '') + '.png')
        
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