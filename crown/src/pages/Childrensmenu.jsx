import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import { Kids_Menu } from '../constants/kids_menu.js'
import { useEffect } from 'react';

export default function childrensMenuPage() {
  useEffect(() => {
    let title = "The Crown Hawes | Children's Menu"
    document.title = title;
  });
  return (
    <>
        <Navbar />
        <Menu menu={Kids_Menu}/>
        <Footer />
    </>
    )
}