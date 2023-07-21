import React from 'react';
import styles from "../styles";


const Menu = (props) => {
  const menu = props.menu[0]

  return (
    <div className={`${styles.flexStart} bg-background`}>
      <div className={`${styles.boxWidth}`}>
        <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
          <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <img src={menu.img} className='w-[100%] h-[400px] object-cover rounded-lg shadow-lg'></img>
            <h1 className={`${styles.heading2}`}>{menu.name}</h1>
            {menu.menu_products.map((section) => (
              <div key={section.title}>
                <h3 className='font-bold text-[30px] uppercase tracking-[1.2px] text-blue2 mt-[25px]'>{section.title}</h3>
                <p className={`font-roboto my-2`}>{section.info}</p>
                <hr className='w-[400px] mb-[15px]'></hr>
                <ul>
                  {section.menuItems && section.menuItems.map((menuItem, index) => (
                      <li key={index}>
                        <h4 className='text-[20px] font-bold text-brown mt-3'>{menuItem.name}<span className="text-[12px] font-bold pl-2 italic text-accent">{menuItem.tags}</span></h4>
                        <p className={`${styles.paragraph}`}>{menuItem.body}</p>
                        <p className={`font-bold`}>{menuItem.price}</p>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          <h5 className="text-[20px] font-bold text-brown mt-[50px] mb-[10px] uppercase">More Info</h5>
          <p>* = Option available.</p>
          </div>
      </section>
    </div>
  </div>
  )
}

export default Menu