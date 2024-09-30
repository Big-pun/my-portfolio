import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';


import './App.css';


function App() {
  return (
    <div className='bg-slate-900 text-white'>

      <Navbar />
      <main className='content'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;