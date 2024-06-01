
import { Outlet } from 'react-router-dom'
import './App.css'
import NavbarSection from './components/NavbarSection'

function App() {
  

  return (
    <>
      <NavbarSection />
      <Outlet />
    </>
  )
}

export default App
