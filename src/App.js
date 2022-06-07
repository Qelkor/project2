import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Films from './pages/Films';
import FilmDetails from './pages/FilmDetails';
import Locations from "./pages/Locations";
import People from "./pages/People";

function App() {
  return (
    <div className='App'>
          <BrowserRouter>
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Films/" element={<Films />} />
              <Route path="/FilmDetails/:key" element={<FilmDetails />} /> 
              <Route path="/Locations/" element={<Locations />} />
              <Route path="/People/" element={<People />} />
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
