import React from 'react';
import styles from '../styles';
import { crown_gold } from '../assets';
import { footerLinks, socialMedia } from '../constants';


const Footer = () => {
  const getCurrentYear = () => { return new Date().getFullYear();};
  return (
    <div className={`${styles.paddingX} ${styles.flexStart} bg-blue2`}>
        <div className={`${styles.boxWidth}`}>
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-9 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img src={crown_gold} alt="The Crown" className="w-[266px] h-[72px] object-contain" />
          <p className={`${styles.paragraph2} mt-4 max-w-[310px]`}>The Crown, Market Place, Hawes, North Yorkshire, DL8 3RD</p>
          <p className={`${styles.paragraph2} mt-4 max-w-[310px]`}>01969 667017 hello@thecrownhawes.com</p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
              <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                <h4 className="font-roboto font-medium text-[18px] leading-[27px] text-white">{footerLink.title}</h4>
                <ul key={footerLink.name} className="list-none mt-4">
                  {footerLink.links.map((link, index) => (
                  <a href={link.link} target={link.target}>
                  <li className={`font-roboto font-normal text-[16px] leading-[24px] text-dimWhite hover:text-accent cursor-pointer ${ index !== footerLink.links.length -1 ? "mb-4": "mb-0"} `}>
                    {link.name}
                  </li>
                  </a>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[14px] leading-[27px] text-white">{getCurrentYear()} The Crown Pub Hawes Ltd. All Rights Reserved.</p>
        <div className="flex flex-rwo md:mt-0 mt-6">
          <p className='text-violet-400 text-[12px]'>Site by <a href="https://www.roomacarthur.dev" className='font-bold hover:text-yellow-300' target="_blank">Roo</a></p>
        </div>
      </div>
    </section>
    </div>
    </div>
  )
}

export default Footer