import React from 'react';
import styles from "./styles";
import { Navbar, Footer, Hero, About, Menus, Bookings, Contact } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

const App = () => {
  return (
    <div className='w-full overflow-hidden bg-blue2'>
        {/* <Navbar />
        <Hero />
        <About />
        <Footer /> */}
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />}/>
            <Route index path="/home" element={<HomePage />}/>
            <Route index path="/about" element={<AboutPage />}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App