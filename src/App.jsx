import NavBar from "./components/layout/Navbar/NavBar"
import Slide from "./components/layout/Slide/Slide"
import Footer from "./components/layout/Footer/Footer"
import PreguntasFrecuentes from "./components/pages/PreguntasFrecuentes/PreguntasFrecuentes"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nosotros from "./components/pages/Contacto/Nosotros"
import { BolichesContainer } from "./components/pages/Boliches/BolichesContainer"
import BaresList from "./components/pages/Bares/BaresList"
import BarDetail from './components/pages/BarDetail/BarDetail';

function App() {
  

  return (

    <BrowserRouter>

    <NavBar /> 

    {/* <BolichesContainer/> */}
    
      <Routes>
        <Route path="/" element={<Slide />} />
        <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
        <Route path="/nosotros" element={<Nosotros />} />

        <Route path="/bareslist" element={<BaresList />} />

        <Route path="/bares/:id" element={<BarDetail />} />

        <Route path="*" element={ <h2>404 NOT FOUND</h2> } />
      </Routes>

      <Footer/>

    </BrowserRouter>

 
  
  )
}

export default App
