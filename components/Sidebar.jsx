import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

import { GrCatalog } from "react-icons/Gr";
import { BsBook } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div>
      <div className="hidden lg:flex fixed left-0 top-16 w-[12rem] h-screen bg-white shadow-md p-5 ease-in duration-500">
        <div className="flex-col divide-y-2  ">
          <div className="flex-col space-y-4  pb-4">
            <div className="flex space-x-4">
              <GrCatalog className="text-base" />
              <p className="text-sm">Katalog Buku</p>
            </div>
            <div className="flex space-x-4">
              <BsBook className="text-base" />
              <p className="text-sm">Peminjaman</p>
            </div>
          </div>

          <div className="pb-16">
            <div className="flex items-center justify-center text-slate-400 text-sm">
              <AiOutlineCopyrightCircle className="text-sm " />
              <p className="text-sm">2022 Ranggo</p>
            </div>
          </div>
        </div>
      </div>
      {/* sidebar when its md to lg */}
      <div className="hidden sm:flex lg:hidden fixed left-0 top-16 w-[5rem] shadow-md h-screen bg-white pt-4 p-2 ease-in duration-500">
        <div className="flex flex-col items-center space-y-4  ">
          <div className="flex flex-col items-center space-y-1 text-center ">
            <GrCatalog className="text-base " />
            <p className="text-xs">Katalog Buku</p>
          </div>
          <div className="flex flex-col items-center space-y-1 text-center ">
            <BsBook className="text-base" />
            <p className="text-xs">Peminjaman</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
