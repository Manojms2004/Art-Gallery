import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeadSection from './Components/HeadSection';
import LocationComp from './Components/LocationComp';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HeadSection/>} />
          <Route path='/location' element={<LocationComp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
