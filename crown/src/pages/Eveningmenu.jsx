import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import { Evening_Menu } from '../constants/evening_menu.js'

export default function eveningMenuPage() {
  return (
    <>
        <Navbar />
        <Menu menu={Evening_Menu}/>
        <Footer />
    </>
    )
}