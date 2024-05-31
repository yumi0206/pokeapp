"use client";
import React, { useState } from "react";
import Link from "next/link";
import { mplus_bold } from "./layout";

const Header = () => {
  return (
    <header className="h-16 flex items-center top-0 container">
      <div className="flex justify-between w-full">
        <Link href="/">
          <div className={mplus_bold.className}>
            <h1 className="text-2xl">バッジチェッカー</h1>
          </div>
        </Link>
        <nav className="">
          <ul className="flex space-x-8">
            <li>
              <Link href="/About">
                <div>About</div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
