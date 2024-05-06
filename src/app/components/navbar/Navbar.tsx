"use client"
import Image from 'next/image'
import React, { useState,useEffect } from 'react';
import navbarLinks from '../../../utils/navbarLinks';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

interface NavlinkDataType {
   name:string;
   href:string;
}

const Navbar = () => {
  const pathname = usePathname()
  const [navbarShadow, setNavbarShadow] = useState(false);
  const [showSidebar,setShowSidebar] = useState(false) 

  useEffect(() => {
    const toggleNavbarShadow = () => {
      if (window.scrollY >= 90) {
        setNavbarShadow(true);
      } else {
        setNavbarShadow(false);
      }
    };
    window.addEventListener("scroll", toggleNavbarShadow);
  }, []);

  const closeSidebar = () => {
  setShowSidebar(false);
  };

  return (
    <>

      {/* Desktop Mobile */}
      <header className={`font-serif bg-black h-[80px] w-full z-10 ease-in-out duration-300  ${navbarShadow ? "shadow-xl" : "shadow-none"} fixed top-0`  } >
        <nav className="flex items-center justify-between h-full container max-w-7xl mx-auto" >
          {/* Logo */}
            <div>
            <Image src="/logo/logo.jpeg" width={180}height={23} alt="Logo" />

            </div>
            <div>
              <ul className="hidden md:flex gap-5">
                {navbarLinks.map((navLink:NavlinkDataType,index:number)=>(
                  <Link href={navLink.href} key={index}>
                    <li className={` text-base capitalize hover:text-lemon font-semibold ${pathname === navLink.href ? 'active-link' : ' text-white'} `}>{navLink.name}</li>
                  </Link>
                ))}
              </ul>
              <div onClick={() => setShowSidebar(!showSidebar)} className="md:hidden">
                {showSidebar ? <AiOutlineClose className="text-white" size={25} /> : <AiOutlineMenu className="text-white" size={25} />}
              </div>
            </div>
        </nav>

        {/* mobile screen */}
        {/* black overlay */}
        <div className={showSidebar ? "fixed left-0 top-0 w-full h-screen bg-black/70" : "hidden"} onClick={closeSidebar}></div>
        <nav className={showSidebar? "md:hidden border-right fixed left-0 top-0 w-[85%] sm:w-[60%] md:w-[45%] h-screen bg-black p-10 ease-in duration-500": "hidden"}
      >
          {/* <nav className="flex items-center justify-between h-full container max-w-7xl mx-auto" > */}
          {/* Logo */}
            <div  className="flex items-center justify-between" >
              {/* <img src={navbarLogo} className="h-[50px] object-contain"  /> */}
              <h3 className="text-white font-bold uppercase font-script text-3xl">
                {/* <span className="text-green-600">Executive</span>{" "} */}
                <span className="text-green-600">Executive</span>{" "}
                <span className="text-white">Zen</span>
              </h3>
              <div onClick={closeSidebar} className="md:hidden">
                 <AiOutlineClose className="text-white" size={25} /> 
              </div>
            </div>
            <div className="py-4 flex flex-col">
          <ul>
          {navbarLinks.map((navLink:NavlinkDataType,index:number)=>(
            <Link href={navLink.href} key={index}>
              <li className={` text-base capitalize hover:text-lemon font-semibold ${pathname === navLink.href ? 'active-link' : ' text-white'} `}>{navLink.name}</li>
            </Link>
            ))}
          </ul>
          </div>
          </nav>
        
        {/* </nav> */}
      </header>


      
    </>
  );
};

export default Navbar;
