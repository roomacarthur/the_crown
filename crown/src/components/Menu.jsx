import React from 'react';
import styles from "../styles";


const Menu = (props) => {
  const menu = props.menu[0]

  return (
    <div className={`${styles.flexStart} bg-background`}>
      <div className={`${styles.boxWidth}`}>
        <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
          <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <h1 className={`${styles.heading2} mb-[20px]`}>{menu.name}</h1>
            <img src={menu.img} alt={menu.name} className='w-[100%] h-[400px] object-cover rounded-lg shadow-lg'></img>
            <p className={`${styles.paragraph} pt-[35px] mb-[30px]`}>{menu.info}</p>
            {menu.menu_products.map((section) => (
              <div key={section.title}>
                <h3 className='font-bold text-[30px] uppercase tracking-[1.2px] text-blue2 mt-[25px]'>{section.title}</h3>
                <p className={`${styles.paragraph}`}>{section.info}</p>
                <hr className='mw-[400px] mb-[15px]'></hr>
                <ul className='ml-[25px] pr-[10px]w-full'>
                  {section.menuItems && section.menuItems.map((menuItem, index) => (
                      <li className='w-full' 
                      key={index}>
                        <h4 className='text-[20px] font-bold text-brown mt-3 pt-[25px]'>{menuItem.name}<span className="text-[12px] font-bold pl-2 italic text-accent">{menuItem.tags}</span></h4>
                        <p className={`${styles.paragraph} mw-[300px]`}>{menuItem.body}</p>
                        <p className={`font-bold`}>{menuItem.price}</p>
                      </li>
                    ))}
                </ul>
              </div>
              
            ))}
            <h5 className={`${styles.heading2} pt-[50px] pb-[30px]`}>More Info</h5>
                <p className={`${styles.paragraph}`}>{menu.footer}</p>
          </div>
      </section>
    </div>
  </div>
  )
}

export default Menu