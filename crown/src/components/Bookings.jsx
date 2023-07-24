import React from 'react';
import styles from '../styles';

const Bookings = () => {
  return (
    <>
    <div className={`${styles.flexCenter} bg-background`}>
      <div className={`${styles.boxWidth}`}>
        <section className={`flex flex-col ${styles.paddingY} ${styles.flexCenter} w-full`}>
          <h1 className={`${styles.heading2} w-full`}>Make A Booking </h1>
          <a
            className='border-blue2 font-bold tracking-[1.2px] p-3 my-[60px] rounded-lg bg-blue2 text-white uppercase'
            href="https://the-crown-hawes.resos.com/booking" target="_blank"
          >
            Click Here To Book
          </a>
        </section>
      </div>
    </div>
    </>
    )
}

export default Bookings