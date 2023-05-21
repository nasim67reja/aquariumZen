import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full border z-[10] bg-white">
      <div className="flex justify-between max-w-[1773px] mx-auto px-[35px] lg:px-[20px] py-[20px]">
        <div>
          <h4 className="text-[#1c1c1c] text-[18px] tracking-[3px]">
            AQUARIUM ZEN
          </h4>
        </div>
        <div>
          <nav>
            <ul className="flex items-center  uppercase justify-center gap-6 text-[14px] text-[#c4c4c4]">
              <li className="text-[#1c1c1c] hover:text-[rgba(196,196,196,0.8)]">
                <Link href="/">aquarium zen</Link>
              </li>
              <li className=" hover:text-[rgba(196,196,196,0.7)]">
                <Link href="/">products</Link>
              </li>
              <li>
                <Link href="/">services</Link>
              </li>
              <li>
                <Link href="/">about us</Link>
              </li>
              <li>
                <Link href="/">Hours & location</Link>
              </li>
              <li>
                <Link href="/">shop online</Link>
              </li>
              <li>
                <Link href="/">watch</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
