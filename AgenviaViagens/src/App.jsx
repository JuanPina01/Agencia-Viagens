import './App.css'
import Header from './assets/Componentes/Header.jsx'
import Escocia from './assets/Componentes/Escocia.jsx'
import GrandCanyon from './assets/Componentes/GrandCanyon.jsx'
import MuralhaChina from './assets/Componentes/MuralhaChina.jsx'
import Aruba from './assets/Componentes/Aruba.jsx'
import Katimandu from './assets/Componentes/Katimandu.jsx'
import Home from './assets/Componentes/Home.jsx'
import Footer from './assets/Componentes/Footer.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (

      <Router>

         <Header/>
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/Escocia" element={<Escocia/>} />
                  <Route path="/GrandCanyon" element={<GrandCanyon />} />
                  <Route path="/MuralhaChina" element={<MuralhaChina/>} />
                  <Route path="/Aruba" element={<Aruba/>} />
                  <Route path="/Katimandu" element={<Katimandu/>} />
              </Routes>
          <Footer/>

      </Router>
  )
}

export default App