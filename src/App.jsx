import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/shared/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Footer from './components/shared/Footer/Footer'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
