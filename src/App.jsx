import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PanelLayout from './layouts/PanelLayout'
import Comunicacion from './pages/Comunicacion'
import Encuestas from './pages/Encuestas'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Login from './pages/Login'
import MercadoKonecta from './pages/MercadoKonecta'
import MiBienestar from './pages/MiBienestar'
import MiDesarrollo from './pages/MiDesarrollo'
import MiGestion from './pages/MiGestion'
import Noticias from './pages/Noticias'
import NotFound from './pages/NotFound'
import Recursos from './pages/Recursos'
import VidaKonecta from './pages/VidaKonecta'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />

        <Route element={<PanelLayout />}>
          <Route path="/inicio" element={<Home />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/mercado-konecta" element={<MercadoKonecta />} />
          <Route path="/encuestas" element={<Encuestas />} />
          <Route path="/mi-desarrollo" element={<MiDesarrollo />} />
          <Route path="/mi-bienestar" element={<MiBienestar />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/vida-konecta" element={<VidaKonecta />} />
          <Route path="/comunicacion" element={<Comunicacion />} />
          <Route path="/mi-gestion" element={<MiGestion />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
