import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import { Evening_Menu } from '../constants/evening_menu.js'
import { useEffect } from 'react';

export default function eveningMenuPage() {
  useEffect(() => {
    let title = "The Crown Hawes | Evening Menu"
    document.title = title;
  });
  return (
    <>
        <Navbar />
        <Menu menu={Evening_Menu}/>
        <Footer />
    </>
    )
}