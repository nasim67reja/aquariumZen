import { FiChevronDown } from "react-icons/fi";

const { useState } = require("react");
const { Parallax, Background } = require("react-parallax");

const Hero = ({ heroImgUrl, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
    });
  };
  return (
    <Parallax strength={500}>
      <Background className="custom-bg">
        <div
          style={{
            height: "100vh",
            width: "100vw",
            backgroundImage: `url(${heroImgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Background>
      <div className="text-white h-screen flex justify-center items-center relative">
        <div
          className="absolute bottom-[2%] left-[50%]  cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          {isHovered ? (
            <div className="-translate-x-6 -translate-y-4">Scroll Down</div>
          ) : (
            <FiChevronDown className="h-[30px] w-[30px] animate-bounce" />
          )}
        </div>
        <div>
          <h1 className="max-w-[780px]    text-center text-[34px] md:text-[44px] x-md:[58] lg:text-[70px] xl:text-[90px]  tracking-[2px] lg:tracking-[6px] leading-[1.1] uppercase px-[10px]">
            {title}
          </h1>
        </div>
      </div>
    </Parallax>
  );
};

export default Hero;
