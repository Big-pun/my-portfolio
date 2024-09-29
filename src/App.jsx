import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Particle from './components/Particle';

import './App.css';


function App() {
  return (
    <div className='app-container'>
        <Particle />
        <Navbar />
        <main className='content'>

        </main>
        <Footer />
    </div>
  );
}

export default App;