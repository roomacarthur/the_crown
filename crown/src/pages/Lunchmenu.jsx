import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import { Lunch_Menu } from '../constants/lunch_menu.js'

export default function lunchMenuPage() {
  return (
    <>
        <Navbar />
        <Menu menu={Lunch_Menu}/>
        {/* <Footer /> */}
    </>
    )
}