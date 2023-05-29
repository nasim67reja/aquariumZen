import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Wrapper from "@/components/Wrapper";
import React, { useEffect, useRef, useState } from "react";
import { Parallax, Background } from "react-parallax";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Dot from "@/components/Dot";
import Image from "next/image";
import Hero from "@/components/Hero";
import NatureAquarium from "@/components/NatureAquarium";

const index = () => {
  const sections = useRef([]);
  const containerRef = useRef(null);
  const secondContainerRef = useRef(null);
  const thirdContainerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  const [lightColor, setLightColor] = useState(true);

  const handleScroll = () => {
    // dot color changeing based on background
    const container = containerRef.current;

    const { top } = container.getBoundingClientRect();
    if (top + window.scrollY > window.innerHeight) setLightColor(false);
    if (top + window.scrollY < window.innerHeight) setLightColor(true);

    // for second container
    const container2 = secondContainerRef.current;
    const { top: top2, height } = container2.getBoundingClientRect();

    if (
      top + window.scrollY > top2 + window.scrollY &&
      top + window.scrollY < top2 + window.scrollY + height
    )
      setLightColor(true);

    // for third container

    const container3 = thirdContainerRef.current;
    const { top: top3, height: height3 } = container3.getBoundingClientRect();

    if (
      top + window.scrollY > top3 + window.scrollY &&
      top + window.scrollY < top3 + window.scrollY + height3
    )
      setLightColor(true);

    const currentScrollPos = window.pageYOffset;
    let activeIndex = 0;
    let minDistance = Math.abs(
      currentScrollPos - sections.current[0].offsetTop
    );
    sections.current.forEach((section, index) => {
      const distance = Math.abs(currentScrollPos - section.offsetTop);
      if (distance < minDistance) {
        minDistance = distance;
        activeIndex = index;
      }
    });

    setActiveSection(activeIndex);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToSection = (index) => {
    sections.current[index].scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div ref={containerRef} className="dots-container ">
        {["Design", "Installation", "Maintenance"].map((el, i) => (
          <Dot
            text={el}
            key={i}
            i={i}
            lightColor={lightColor}
            activeSection={activeSection}
            scrollToSection={scrollToSection}
          />
        ))}
      </div>

      {/* 1 */}
      <section
        ref={(ref) => (sections.current[0] = ref)}
        className={` ${activeSection === 0 ? "active" : ""}`}
      >
        <Hero
          title="DESIGN"
          heroImgUrl="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1420560251859-AXN03K42C6L5I2D1D8V9/DESIGN-window.jpg?format=1500w"
        />

        <Content
          title="Design"
          p1="Aquarium design can be a bewildering process."
          p2="Two primary challenges confront the aquarium designer:  keeping everything alive and healthy while simultaneously making the aquarium look attractive.  At Aquarium Zen, we have the experience to simplify this process for our customers and can mentor clients who are willing to learn.  We are also available for consultations to design an aquarium that will highlight and grace professional spaces."
          imgUrl="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1423773798938-LU23POUOBTJZUMFN0KMI/Aquarium-Zen-Seattle-Fish-Store-Aquarium-Design?format=750w"
        />
      </section>
      {/* 2 */}
      <section
        ref={(ref) => (sections.current[1] = ref)}
        className={` ${activeSection === 1 ? "active" : ""}`}
      >
        <div ref={secondContainerRef}>
          <NatureAquarium
            imgUrl="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1420591010728-0FPGELOSP3ONQMGJLQZ0/installation-header.jpg?format=1500w"
            heading="INSTALLATION"
          />
        </div>
        <Content
          title="Installation"
          p1="For select clients we can install one of our beautifully designed Nature Aquariums in the setting of your choosing.  We will collaborate with your architects, builders and consult on the right aquarium installation for your space. "
          p2="We also offer smaller scale, affordable aquarium installations for modest and intimate spaces such as waiting rooms, offices and therapeutic spaces.  Aquariums relax the soul, inspire the mind, and bring natural wonder indoors – an attractive aquarium can help increase the prosperity of any business."
          imgUrl="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1420590441095-HEPB0IFL0XF9M6AIDO99/image-asset.jpeg?format=750w"
        />
      </section>
      {/* 3 */}
      <section
        ref={(ref) => (sections.current[2] = ref)}
        className={` ${activeSection === 2 ? "active" : ""}`}
      >
        <div ref={thirdContainerRef}>
          <NatureAquarium
            imgUrl="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1423358130417-UQYLZV6X0SO8IRQP4TKP/ripple-vert-crop.jpg?format=1500w"
            heading="MAINTENANCE"
          />
        </div>
        <Content
          title="Maintenance"
          p1="Aquariums are not static entities: they are constantly growing, shifting and changing.  In order to keep the aquarium in top form, constant effort is required to manage these ever-changing ecosystems.  Consistent maintenance is the most critical aspect of a successful aquarium.  For clients who value our experience and artistry, we can develop a regular maintenance program for your aquarium project that will keep it looking amazing at all times.  "
          p2="Contact Aquarium Zen for more information about our professional design, installation and maintenance services. "
          imgUrl="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1423773552323-OKFRV8VJOSJ88BSDCTRZ/Aquarium-Zen-Seattle-Fish-Store-Aquarium-Maintenance?format=750w"
        />
      </section>
    </>
  );
};
export default index;

const Content = ({ title, p1, p2, imgUrl }) => {
  return (
    <div className="max-w-[650px] mx-auto px-4 flex flex-col gap-4 justify-center items-center py-10 x-md:py-16">
      <h4 className="text-[22px] x-md:text-[26px]">{title}</h4>
      <p className="text-[14px] x-md:text-[16px] text-center x-md:text-start">
        {p1}
      </p>
      <p className="mb-2 text-[14px] x-md:text-[16px] text-center x-md:text-start">
        {p2}
      </p>
      <img src={imgUrl} alt="nature" />
    </div>
  );
};
