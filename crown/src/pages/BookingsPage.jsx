import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Bookings from '../components/Bookings';
import { useEffect } from 'react';

export default function BookingsPage() {
  useEffect(() => {
    let title = "The Crown Hawes | Make a Booking"
    document.title = title;
  });
  return (
    <>
        <Navbar />
        <Bookings />
        <Footer />
    </>
    )
}