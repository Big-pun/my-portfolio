import React from 'react';
import ParticlesBackground from './components/Particles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <div className=''>
        <ParticlesBackground />
          <Navbar />
          <main>

          </main>
          <Footer />
        </div>
    </>
  );
}

export default App;