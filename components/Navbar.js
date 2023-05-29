import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
const Navbar = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
    if (!isOpen) document.documentElement.style.overflow = "hidden";
    else document.documentElement.style.overflow = "auto";
  };
  return (
    <>
      {/* <button className="text-black" onClick={toggleDrawer}>
        Show
      </button> */}
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
        size={`80vw`}
      >
        <MobileNav handler={toggleDrawer} />
      </Drawer>

      <header className="fixed top-0 left-0 w-full border z-[10] bg-white">
        <div className="flex justify-between max-w-[1773px] mx-auto px-[35px] lg:px-[20px] py-[20px] items-center">
          <div>
            <h4 className="text-[#1c1c1c] x-md:text-[16px] xl:text-[18px] tracking-[3px] font-[300]">
              AQUARIUM ZEN
            </h4>
          </div>
          <div>
            <nav>
              <span
                className=" x-md:hidden inline-block  cursor-pointer"
                onClick={toggleDrawer}
              >
                <GiHamburgerMenu className="md:w-[25px] md:h-[25px] text-gray-400" />
              </span>
              <ul className="hidden x-md:flex items-center  uppercase justify-center xl:gap-6 xl:text-[13px] text-[#c4c4c4] x-md:gap-4 x-md:text-[11px]">
                <li
                  className={`${
                    router.pathname === "/" &&
                    "text-[#1c1c1c] hover:text-[rgba(196,196,196,0.4)]"
                  }`}
                >
                  <Link href="/">aquarium zen</Link>
                </li>
                <li
                  className={`${
                    router.pathname.startsWith("/products") &&
                    "text-[#1c1c1c] hover:text-[rgba(196,196,196,0.5)]"
                  }`}
                >
                  <Link href="/products">products</Link>
                </li>
                <li
                  className={`${
                    router.pathname.startsWith("/services") &&
                    "text-[#1c1c1c] hover:text-[rgba(196,196,196,0.5)]"
                  }`}
                >
                  <Link href="/services">services</Link>
                </li>
                <li
                  className={`${
                    router.pathname.startsWith("/aboutUs") &&
                    "text-[#1c1c1c] hover:text-[rgba(196,196,196,0.5)]"
                  }`}
                >
                  <Link href="/aboutUs">about us</Link>
                </li>
                <li
                  className={`${
                    router.pathname.startsWith("/hours-location") &&
                    "text-[#1c1c1c] hover:text-[rgba(196,196,196,0.5)]"
                  }`}
                >
                  <Link href="/hours-location">Hours & location</Link>
                </li>
                <li>
                  <Link href="https://shop.aquariumzen.net/">shop online</Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com/@aquariumzen">watch</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

const MobileNav = ({ handler }) => {
  const router = useRouter();

  return (
    <nav className=" w-[75vw] min-h-screen bg-white ">
      <ul className="uppercase text-[12px] md:text-[13px] text-[#c4c4c4] relative">
        <li className="mt-4 ml-4 mb-6">
          <span onClick={handler}>
            <RxCross1 className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]" />
          </span>
        </li>
        <li
          className={`${
            router.pathname === "/" &&
            "text-[#1c1c1c] hover:text-[rgba(196,196,196,0.4)]"
          }`}
        >
          <Link
            className="py-[14px] md:py-[20px] border-b text-center border-b-gray-200 w-full block"
            href="/"
            onClick={handler}
          >
            aquarium zen
          </Link>
        </li>
        <li
          className={`${
            router.pathname.startsWith("/products") &&
            "text-[#1c1c1c] hover:text-[rgba(196,196,196,0.5)]"
          }`}
        >
          <Link
            className="py-[14px] md:py-[20px] border-b text-center border-b-gray-200 w-full block"
            href="/products"
            onClick={handler}
          >
            products
          </Link>
        </li>
        <li
          className={`${
            router.pathname.startsWith("/services") &&
            "text-[#1c1c1c] hover:text-[rgba(196,196,196,0.5)]"
          }`}
        >
          <Link
            className="py-[14px] md:py-[20px] border-b text-center border-b-gray-200 w-full block"
            href="/services"
            onClick={handler}
          >
            services
          </Link>
        </li>
        <li
          className={`${
            router.pathname.startsWith("/aboutUs") &&
            "text-[#1c1c1c] hover:text-[rgba(196,196,196,0.5)]"
          }`}
        >
          <Link
            className="py-[14px] md:py-[20px] border-b text-center border-b-gray-200 w-full block"
            href="/aboutUs"
            onClick={handler}
          >
            about us
          </Link>
        </li>
        <li
          className={`${
            router.pathname.startsWith("/hours-location") &&
            "text-[#1c1c1c] hover:text-[rgba(196,196,196,0.5)]"
          }`}
        >
          <Link
            className="py-[14px] md:py-[20px] border-b text-center border-b-gray-200 w-full block"
            href="/hours-location"
            onClick={handler}
          >
            Hours & location
          </Link>
        </li>
        <li>
          <Link
            className="py-[14px] md:py-[20px] border-b text-center border-b-gray-200 w-full block"
            href="https://shop.aquariumzen.net/"
            onClick={handler}
          >
            shop online
          </Link>
        </li>
        <li>
          <Link
            className="py-[14px] md:py-[20px] border-b text-center border-b-gray-200 w-full block"
            href="https://www.youtube.com/@aquariumzen"
          >
            watch
          </Link>
        </li>
      </ul>
    </nav>
  );
};
