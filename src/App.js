import Art from './Art';
import InfoText from './InfoText';
import MainPage from './MainPage';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { createContext, useState } from 'react';

export const ArtContext = createContext();

function App() {
  const [artData, setArtData] = useState({
    seedText: '',
    displayText: ''
  });

  return (
    <ArtContext.Provider value={{ artData, setArtData }}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<InfoText />} />
            <Route path="/input" element={<MainPage />} />
            <Route path="/art" element={<Art />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </ArtContext.Provider>
  );
}

export default App;