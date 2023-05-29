import { useState } from "react";

const Dot = ({
  text,
  width,
  i,
  lightColor,
  activeSection,
  scrollToSection,
}) => {
  const [hoverActive, setHoverActive] = useState(false);

  return (
    <div
      key={i}
      className={`relative  dot ${lightColor ? "dot-light" : "dot-dark"} ${
        activeSection === i ? "active" : ""
      }`}
      onClick={() => scrollToSection(i)}
      onMouseEnter={() => {
        setHoverActive(true);
      }}
      onMouseLeave={() => {
        setHoverActive(false);
      }}
    >
      {hoverActive && (
        <div
          className={`cus-ani absolute right-7 translate-y-[-3px] w-[300px]  uppercase text-[13px] text-end  ${
            !lightColor ? "text-black" : "text-white"
          }`}
        >
          {text}
        </div>
      )}
    </div>
  );
};
export default Dot;
