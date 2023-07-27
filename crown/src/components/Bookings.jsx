import React, { useEffect } from 'react';
import styles from '../styles';

const Bookings = () => {
  useEffect(() => {
    const scr=document.createElement("script");
    scr.src="https://the-crown-1637256869.resos.com/embed/booking/widget.js?ts="+new Date().getTime();
    document.getElementById("booking-script-2").appendChild(scr);
  })
  return (
    <>
    <div className={`${styles.flexCenter} bg-background`}>
      <div className={`${styles.boxWidth}`}>
        <section className={`flex flex-col ${styles.paddingY} ${styles.flexCenter} w-full`}>
          <h1 className={`${styles.heading2} w-full h-full`}>Make A Booking </h1>
          <a
            className='border-blue2 font-bold tracking-[1.2px] p-3 my-[60px] rounded-lg bg-blue2 text-white hover:text-accent uppercase'
            href="https://the-crown-hawes.resos.com/booking" target="_blank"
          >
            Click Here To Book
          </a>
          <a id="booking-widget-2" href="https://the-crown-1637256869.resos.com/booking" data-lang="en" data-restaurant-id="fgABrNh5yWMkLxCbN" data-domain="the-crown-1637256869.resos.com">Book a table</a><div id="booking-script-2" className='mt-[10px] text-center text-[70%] opacity-60'>
              <a target="_blank" href="https://resos.com">Restaurant table management</a></div>
        </section>
      </div>
    </div>
    </>
    )
}

export default Bookings