import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import { Lunch_Menu } from '../constants/lunch_menu.js'
import { useEffect } from 'react';

export default function lunchMenuPage() {
    useEffect(() => {
    let title = "The Crown Hawes | Lunch Menu"
    document.title = title;
  });
  return (
    <>
        <Navbar />
        <Menu menu={Lunch_Menu}/>
        {/* <Footer /> */}
    </>
    )
}