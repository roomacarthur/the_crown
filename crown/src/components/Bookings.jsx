import React from 'react';
import styles from '../styles';

const Bookings = () => {
  const scr = document.createElement("script");
  scr.src ="https://the-crown-hawes.resos.com/embed/booking/widget.js?ts="+new Date().getTime();
  document.getElementById("booking-script-2").appendChild(scr);
  return (
    <>
    <div className={`${styles.flexCenter} bg-background`}>
      <div className={`${styles.boxWidth}`}>
        <section className={`flex flex-col ${styles.paddingY} ${styles.flexCenter} w-full`}>
          <h1 className={`${styles.heading2} w-full`}>Make A Booking </h1>
          <a id="booking-widget-2" href="https://the-crown-hawes.resos.com/booking" data-lang="en" data-restaurant-id="fgABrNh5yWMkLxCbN" data-domain="the-crown-hawes.resos.com">Book a table
          </a>
          <div className=''>
          <div id="booking-script-2" 
          className='opacity-60 text-[70%] mt-[10px] text-center'>
          </div></div>
        </section>
      </div>
    </div>
    </>
    )
}

export default Bookings