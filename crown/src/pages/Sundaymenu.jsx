import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import { Sunday_Menu } from '../constants/sunday_menu.js'

export default function sundayMenuPage() {
  return (
    <>
        <Navbar />
        <Menu menu={Sunday_Menu}/>
        <Footer />
    </>
    )
}