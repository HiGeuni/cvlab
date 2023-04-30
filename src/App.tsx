import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from './pages/home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import FaceID from './pages/faceId';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faceId" element={<FaceID />} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
