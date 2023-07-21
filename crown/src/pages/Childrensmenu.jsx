import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import { Kids_Menu } from '../constants/kids_menu.js'

export default function childrensMenuPage() {
  return (
    <>
        <Navbar />
        <Menu menu={Kids_Menu}/>
        <Footer />
    </>
    )
}