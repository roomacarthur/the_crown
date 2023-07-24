import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer'
import { useEffect } from 'react';

export default function AboutPage() {
  useEffect(() => {
    let title = "The Crown Hawes"
    document.title = title;
  });
  return (
    <>
        <Navbar />
        <About />
        <Footer />
    </>
    )
}