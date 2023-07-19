import React from 'react';
import styles from "../styles";


const Contact = () => {
  return (
    <div className={`${styles.flexStart} bg-background`}>
      <div className={`${styles.boxWidth}`}>
        <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
          <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <h1 className={`${styles.heading2}`}>Contact Us</h1>
        </div>
        </section>
      </div>
    </div>
  )
}

export default Contact