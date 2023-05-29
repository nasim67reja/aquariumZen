import React from "react";
import { FiChevronUp } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] relative">
      <div
        className="absolute top-[-6%] border-4 border-white bg-[rgba(255,255,255,1)] text-black z-10 rounded-[50%]  flex flex-col justify-center items-center px-[10px] py-[4px] cursor-pointer left-[50%] translate-x-[-50%]"
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
          });
        }}
      >
        <FiChevronUp />
        <span className="text-[12px]">TOP</span>
      </div>

      <div className="max-w-[693px] mx-auto px-4 py-20 ">
        <div>
          <div>
            <div className="flex justify-center items-center mb-4 x-md:mb-8">
              <Link href="https://www.facebook.com/AquariumZen" target="_blank">
                <FaFacebook className="x-md:w-[30px] w-[22px] h-[22px] x-md:h-[30px]" />
              </Link>
            </div>

            <h1 className="text-center whitespace-pre-wrap text-[22px] font-semibold mb-4">
              Aquarium&nbsp;Zen
            </h1>
            <h3 className="text-center whitespace-pre-wrap uppercase">
              920 NE 64th ST
              <br />
              Seattle, WA
              <br />
              206.499.1372
            </h3>
            <h3 className="text-center whitespace-pre-wrap uppercase">
              <br />
              aquariumzen@gmail.com
              <br />
              <br />
              copyright © 2023 AQUARIUM ZEN
            </h3>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
