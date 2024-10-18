
import { Outlet } from 'react-router-dom'
import './App.css'
import NavbarSection from './components/NavbarSection'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <NavbarSection />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
