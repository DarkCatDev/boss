import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Start from './pages/Start';
import BirthCert from './pages/BirthCert';
import ValID from './pages/Id';
import CertFTJS from './pages/CertFTJS';
import NBI from './pages/Nbi';
import SSS from './pages/Sss';
import PagIbig from './pages/PagIbig';
import PhilHealth from './pages/PhilHealth';
import Resume from './pages/Resume';
import Outside from './pages/OutsideProvince';

function App() {
  return (
    <Router basename='/'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/bc" element={<BirthCert />} />
        <Route path="/vid" element={<ValID />} />
        <Route path="/cftjs" element={<CertFTJS />} />
        <Route path="/nbi" element={<NBI />} />
        <Route path="/sss" element={<SSS />} />
        <Route path="/pagibig" element={<PagIbig />} />
        <Route path="/ph" element={<PhilHealth />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/outside" element={<Outside />} />
      </Routes>
    </Router>
  );
}

export default App;
