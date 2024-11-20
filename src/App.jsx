import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import StarsParticles from "./components/StarsParticles";

import "./App.css";

function App() {
  return (
    <>
      <div className="relative bg-gradient-to-b from-green-950 via-slate-950 to-slate-950">
        <StarsParticles />
        <div className="relative z-10 text-white dark:text-gray-200">
          <Navbar />
          <main className="content">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
