import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';


import './App.css';


function App() {
  return (
    <div className='bg-gradient-to-b from-green-950 via-slate-950 to-slate-950 text-white'>

      <Navbar />
      <main className='content'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;