import { Outlet } from "react-router-dom";
import "./App.css";
import NavbarSection from "./components/NavbarSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavbarSection />
      <div className="min-vh-100">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
