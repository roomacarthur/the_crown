import React from 'react';
import styles from '../styles';

const Bookings = () => {
  return (
    <div className={`${styles.flexStart} bg-background`}>
      <div className={`${styles.boxWidth}`}>
        <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
          <h1>Make A Booking </h1>
        </section>
      </div>
    </div>
  )
}

export default Bookings