"use client";
import { useState } from "react";

interface PropsHeader {
  news?: string;
  img?: string;
  text: string[];
  img_header: {
    img: string;
    href: string;
  }[];
}


const Header: React.FC<PropsHeader> = ({ news, img, text, img_header }) => {
  const  [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }
  const NavLinks = () => {
    return(
      <>
        {text.map((item) => (
          <a href="#" className="px-2 pt-1">{item}</a>
        ))}
      </>
    )
  }
  return (
    <div className="static">
      <div className="flex-center text-center px-2 bg-blue-500 text-white text-[16px] min-h-[54px]">
        <label>{news}</label>
      </div>
      <nav className="flex justify-between min-h-[56px] text-[14px] font-['Arial'] text-[#3C4043]">
        <div className="flex items-center justify-start">
          <div className="hidden laptop:flex items-center justify-start">
            <img className="h-[24px] w-[24px] ml-[8px]" src={img} />
            <NavLinks />
          </div>
          <div className="laptop:hidden flex items-center justify-start">
            <div className="mr-3">
              <img className="h-[24px] w-[24px] ml-[8px]" src={img} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          {img_header.map((items) => (
            <div className="mr-[20px]">
              <a href={items?.href}>
                <img className="h-[24px] w-[24px] p-0.5" src={items?.img} />
              </a>
            </div>
          ))}
          <div className="laptop:hidden flex mr-[20px]">
            <button onClick={toggleNavbar}>
              <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="absolute bg-white flex flex-col w-full items-end pr-[12px]">
          <NavLinks />
        </div>
      )}
    </div>
  );
};

export default Header;
