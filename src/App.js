import Art from './Art';
import InfoText from './InfoText';
import MainPage from './MainPage'
import { useState } from 'react';
import React from 'react';

function App() {

  const [aboutFade, setAboutFade] = useState(1)
  const [aboutDisable, setAboutDisable] = useState(false)
  const [aboutDisplay, setAboutDisplay] =  useState('inline')
  const [mainFade, setMainFade] = useState(0)
  const [mainDisable, setMainDisable] = useState(true)
  const [mainDisplay, setMainDisplay] =  useState('none')
  const [artFade, setArtFade] = useState(0)
  const [artDisable, setArtDisable] = useState(true)
  const [artDisplay, setArtDisplay] =  useState('none')
  const [seedText, setSeedText] = useState('')
  const [lock, setLock] = useState(0)
  const [capsSeedText, setCapsSeedText] = useState(0)

  return (
    <div>

      <InfoText
          aboutFade={aboutFade}
          setAboutFade={setAboutFade}
          aboutDisable={aboutDisable}
          setAboutDisable={setAboutDisable}
          aboutDisplay={aboutDisplay}
          setAboutDisplay={setAboutDisplay}
          mainFade={mainFade}
          setMainFade={setMainFade}
          mainDisable={mainDisable}
          setMainDisable={setMainDisable}
          mainDisplay={mainDisplay}
          setMainDisplay={setMainDisplay}
          artFade={artFade}
        setArtFade={setArtFade}
        artDisable={artDisable}
        setArtDisable={setArtDisable}
        artDisplay={artDisplay}
        setArtDisplay={setArtDisplay}
        lock={lock}
        setLock={setLock}
      
      />
      <MainPage
            aboutFade={aboutFade}
            setAboutFade={setAboutFade}
            aboutDisable={aboutDisable}
            setAboutDisable={setAboutDisable}
            aboutDisplay={aboutDisplay}
            setAboutDisplay={setAboutDisplay}
            mainFade={mainFade}
            setMainFade={setMainFade}
            mainDisable={mainDisable}
            setMainDisable={setMainDisable}
            mainDisplay={mainDisplay}
            setMainDisplay={setMainDisplay}
            artFade={artFade}
            setArtFade={setArtFade}
            artDisable={artDisable}
            setArtDisable={setArtDisable}
            artDisplay={artDisplay}
            setArtDisplay={setArtDisplay}
            seedText={seedText}
            setSeedText={setSeedText}
            lock={lock}
            setLock={setLock}
            capsSeedText={capsSeedText}
            setCapsSeedText={setCapsSeedText}

      
      />
      <Art
        artFade={artFade}
        setArtFade={setArtFade}
        artDisable={artDisable}
        setArtDisable={setArtDisable}
        artDisplay={artDisplay}
        setArtDisplay={setArtDisplay}
        mainFade={mainFade}
        setMainFade={setMainFade}
        mainDisable={mainDisable}
        setMainDisable={setMainDisable}
        mainDisplay={mainDisplay}
        setMainDisplay={setMainDisplay}
        aboutFade={aboutFade}
        setAboutFade={setAboutFade}
        aboutDisable={aboutDisable}
        setAboutDisable={setAboutDisable}
        aboutDisplay={aboutDisplay}
        setAboutDisplay={setAboutDisplay}
        seedText={seedText}
        setSeedText={setSeedText}
        lock={lock}
        setLock={setLock}
        capsSeedText={capsSeedText}
        setCapsSeedText={setCapsSeedText}
      
      />

    </div>
    
  );
}

export default App;
