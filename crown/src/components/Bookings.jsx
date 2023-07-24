import React from 'react';
import styles from '../styles';

const Bookings = () => {
  return (
    <>
    <div className={`${styles.flexCenter} bg-background`}>
      <div className={`${styles.boxWidth}`}>
        <section className={`flex flex-col ${styles.paddingY} ${styles.flexCenter} w-full`}>
          <h1 className={`${styles.heading2} w-full`}>Make A Booking </h1>

        </section>
      </div>
    </div>
    </>
    )
}

export default Bookings