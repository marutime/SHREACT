import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
        <Navbar />
        <div>
            <Outlet/>
        </div>
        <Footer />
    </>
  )
}

export default MainLayout