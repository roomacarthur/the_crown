import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Menus from '../components/Menus';
import { useEffect } from 'react';

export default function MenusPage() {
  useEffect(() => {
    let title = "The Crown Hawes | Our Menus"
    document.title = title;
  });
  return (
    <>
        <Navbar />
        <Menus />
        <Footer />
    </>
    )
}