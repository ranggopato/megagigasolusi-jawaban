import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineCopyrightCircle } from "react-icons/ai";

import { SiLibrarything } from "react-icons/si";
import { TbDotsVertical } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { GrCatalog } from "react-icons/Gr";
import { BsBook } from "react-icons/bs";

const Navbar = ({ token }) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const signOut = () => {
    localStorage.removeItem("Token");
  };
  return (
    <div className="fixed left-0 top-0 w-full shadow-md h-16 bg-white z-[100] ease-in-out duration-300">
      <div className="flex justify-between items-center w-full h-full  ">
        <div className=" flex items-center space-x-2 px-[1.2rem] ">
          <AiOutlineMenu onClick={handleNav} className="text-base" />
          <Link href="/" className="flex items-center">
            <SiLibrarything className="text-xl text-red-500" />
            <div className="font-bold font-oswald text-base">LOGO</div>
          </Link>
        </div>

        <div className="flex items-center px-8">
          <div>
            <TbDotsVertical className="text-base" />
          </div>
          {token ? (
            <Link
              href="/login"
              onClick={signOut}
              className="border flex space-x-1 items-center border-gray-300 rounded-full px-2.5 py-1.5 text-center text-blue-800"
            >
              <CgProfile className="text-base text-blue-600 font-light " />
              <p className="text-sm">Sign Out</p>
            </Link>
          ) : (
            <Link
              href="/login"
              className="border flex space-x-1 items-center border-gray-300 rounded-full px-2.5 py-1.5 text-center text-blue-800"
            >
              <CgProfile className="text-base text-blue-600 font-light " />
              <p className="text-sm">Sign In</p>
            </Link>
          )}
        </div>
      </div>

      {/* thesidebar */}
      <div
        className={
          nav
            ? "flex md:hidden fixed left-0 top-0 w-full h-screen bg-black/80"
            : "hidden"
        }
      >
        <div className="fixed  left-0 top-0 w-[12rem] h-screen bg-white p-5 ease-in duration-500">
          <div className=" flex items-center left-0 top-0 space-x-4 px-[1.2rem] fixed bg-white">
            <AiOutlineMenu onClick={handleNav} className="text-base mt-4" />
            <div className="flex items-center mt-4">
              <SiLibrarything className="text-xl text-red-500" />
              <div className="font-bold font-oswald text-base">LOGO</div>
            </div>
          </div>
          <div className="flex-col divide-y-2  ">
            <div className="flex-col space-y-4 pt-8 pb-4">
              <div className="flex space-x-4">
                <GrCatalog className="text-base" />
                <p className="text-sm">Katalog Buku</p>
              </div>
              <div className="flex space-x-4">
                <BsBook className="text-base" />
                <p className="text-sm">Peminjaman</p>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="  text-slate-400 text-[8px]"></p>

              <div className="flex items-center justify-center text-slate-400 ">
                <AiOutlineCopyrightCircle className="text-[8px] " />
                <p className="text-[8px]">2022 Ranggo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
