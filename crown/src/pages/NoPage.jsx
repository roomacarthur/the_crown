import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import styles from '../styles';

export default function noPage() {
  useEffect(() => {
    let title = "The Crown Hawes | Page could not be found"
    document.title = title;
  });
  return (
    <>
        <Navbar />
        <div className={`${styles.flexStart} bg-background`}>
          <div className={`${styles.boxWidth}`}>
            <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
              <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
              <h1 className={`mt-10 text-[50px] font-bold font-roboto uppercase`}>Error: 404</h1>
              <p className={`${styles.paragraph} mt-10 mb-10`}>This page could not be found.</p>
              </div>
            </section>
          </div>
        </div>
        <Footer />
    </>
    )
}