import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import FaceID from './pages/faceId';
import Register from './pages/register';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faceId" element={<FaceID />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
