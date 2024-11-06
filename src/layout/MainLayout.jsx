import React from 'react';
import './MainLayout.scss'
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="layout">
        <Navbar />
        <div className="content">
          <Outlet/>
        </div>        
        <Footer />
    </div>
  )
}

export default MainLayout