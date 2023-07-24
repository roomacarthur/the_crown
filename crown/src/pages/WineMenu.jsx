import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import { Wine_Menu } from '../constants/wine_menu.js'
import styles from '../styles'

const WineMenu = () => {
  return (
    <>
    <Navbar />
    <Menu menu={Wine_Menu}/> 
    <Footer />
</>
  )
}

export default WineMenu