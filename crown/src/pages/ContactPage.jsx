import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import { useEffect } from 'react';

export default function contactPage() {
  useEffect(() => {
    let title = "The Crown Hawes | Get in Touch"
    document.title = title;
  });
  return (
    <>
        <Navbar />
        <Contact />
        <Footer />
    </>
    )
}