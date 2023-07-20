import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import { navLinks } from "../constants";
import { crown_gold, menu, close } from '../assets';
import styles from '../styles';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img 
        src={crown_gold} 
        alt="The Crown"
        className='w-[100px] h-[100px]'></img>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
      {navLinks.map((nav, index) => (
        <li
          key={nav.id}
          className={`font-roboto font-bold tracking-[1.5px] cursor-pointer text-[16px] text-white hover:text-accent ${index === navLinks.length -1 ? "mr-o" : "mr-10"}`}>
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
      ))}
    </ul>
    <div className="sm:hidden flex flex-1 justify-end items=center">
      <img 
      src={toggle ? close : menu} 
      alt="menu"
      className="w-[28px] h-[28px] object-contain cursor-pointer"
      onClick={() => setToggle((prev) => !prev)}
      />
      <div
        className={`${toggle ? "flex" : "hidden"} bg-accent text-background p-6 absolute top-20 right-0 mx-4 min-w-[140px] rounded-xl sidebar`}
      >
        <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-roboto font-bold tracking-[1.5px]cursor-pointer text-[16px] text-background hover:text-white ${index === navLinks.length -1 ? "mb-o" : "mb-4"}`}>
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
          ))}
        </ul>
      </div>
    </div>
    </nav>
    </div>
    </div>
  )
}

export default Navbar