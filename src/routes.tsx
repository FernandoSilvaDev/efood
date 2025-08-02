import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Perfis from './pages/Perfil'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil" element={<Perfis />} />
  </Routes>
)

export default Rotas
