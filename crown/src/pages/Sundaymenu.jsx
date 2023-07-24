import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import { Sunday_Menu } from '../constants/sunday_menu.js'
import { useEffect } from 'react';

export default function sundayMenuPage() {
  useEffect(() => {
    let title = "The Crown Hawes | Sunday Menu"
    document.title = title;
  });
  return (
    <>
        <Navbar />
        <Menu menu={Sunday_Menu}/>
        <Footer />
    </>
    )
}