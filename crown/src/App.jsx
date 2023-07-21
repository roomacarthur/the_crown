import React from 'react';
import styles from "./styles";
import { Navbar, Footer, Hero, About, Menus, Bookings, Contact } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MenusPage from './pages/MenusPage';
import BookingsPage from './pages/BookingsPage';
import ContactPage from './pages/ContactPage';
import LunchMenu from './pages/Lunchmenu';
import EveningMenu from './pages/Eveningmenu';
import SundayMenu from './pages/Sundaymenu';
import ChildrensMenu from './pages/Childrensmenu';

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
            <Route path="/home" element={<HomePage />}/>
            <Route path="/menus" element={<MenusPage />}/>
            <Route path="/bookings" element={<BookingsPage />}/>
            <Route path="/contact" element={<ContactPage />}/>
            <Route path="/lunch_menu" element={<LunchMenu />}/>
            <Route path="/evening_menu" element={<EveningMenu />}/>
            <Route path="/sunday_menu" element={<SundayMenu />}/>
            <Route path="/childrens_menu" element={<ChildrensMenu />}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App