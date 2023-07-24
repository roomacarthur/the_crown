import React from 'react';
import styles from "../styles";
import { menuImages } from "../constants"

const Menus = () => {
  return (
    <div className={`${styles.flexStart} bg-background`}>
      <div className={`${styles.boxWidth}`}>
        <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
          <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <h1 className={`${styles.heading2}`}>Our Menus</h1>
            <p className={`${styles.paragraph} md:max-w-[70%] my-[30px]`}>At The Crown, we take pride in offering an unforgettable dining experience. Our food menu features a delightful selection of dishes crafted with locally sourced ingredients. From hearty classics to innovative creations, each dish is cooked to perfection, reflecting the rich culinary heritage of the Yorkshire Dales. Explore our menus below and prepare your taste buds for a mouthwatering adventure.</p>
            <div className={`${styles.flexCenter} ${styles.section} justify-content flex-1 md:flex-row flex flex-col flex-wrap w-full`}>
              {menuImages.map((menu, index) => (
                <a key={menu.id} href={menu.id}>
                <div key={menu.id} className='h-[600px] max-w-sm rounded overflow-hidden shadow-lg m-[20px] hover:scale-105'>
                  <img src={menu.img} alt={menu.alt}></img>
                  <div className='p-3'>
                    <h2  className='text-brown text-[30px] front-roboto font-bold uppercase tracking-[1px] pb-[25px]'>
                      {menu.title}
                    </h2>
                    <p className={`${styles.paragraph}`}>
                      {menu.body}
                    </p>
                    <p className='font-bold text-[12px] py-2'>{menu.times}</p>
                  </div>
                </div>
                </a>
              ))}
            </div>
            <h2 className={`${styles.heading2}`}>More Info</h2>
            <p className={`${styles.paragraph}`}>For more information regarding our menus, please don't hesitate to get in touch!</p>
          </div>
      </section>
    </div>
  </div>
  )
}

export default Menus