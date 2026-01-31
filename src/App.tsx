import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import StrategicSalesGuide from './pages/resources/StrategicSalesGuide';
import AlignMethodology from './pages/resources/AlignMethodology';
import PreCallPlanning from './pages/resources/PreCallPlanning';
import UniqueBusinessValue from './pages/resources/UniqueBusinessValue';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/resource/strategic-sales-guide" element={<StrategicSalesGuide />} />
        <Route path="/resource/align-methodology" element={<AlignMethodology />} />
        <Route path="/resource/pre-call-planning" element={<PreCallPlanning />} />
        <Route path="/resource/unique-business-value" element={<UniqueBusinessValue />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
