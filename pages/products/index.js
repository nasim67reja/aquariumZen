import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Wrapper from "@/components/Wrapper";
import React, { useEffect, useRef, useState } from "react";
import { Parallax, Background } from "react-parallax";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Dot from "@/components/Dot";
import Image from "next/image";
import Hero from "@/components/Hero";
import Link from "next/link";
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
        {["NATURE AQUARIUM SUPPLIES", "Tropical Fish", "Aquatic Plants"].map(
          (el, i) => (
            <Dot
              text={el}
              key={i}
              i={i}
              lightColor={lightColor}
              activeSection={activeSection}
              scrollToSection={scrollToSection}
            />
          )
        )}
      </div>

      {/* 1 */}
      <section
        ref={(ref) => (sections.current[0] = ref)}
        className={` ${activeSection === 0 ? "active" : ""}`}
      >
        <Hero
          title="NATURE AQUARIUM SUPPLIES"
          heroImgUrl="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1420566563461-FL8QBVH5CPXF1HJUQUES/box-rocks-red.jpg?format=2500w"
        />

        <div className="max-w-[650px] mx-auto px-4 flex flex-col gap-4 justify-center items-center py-20">
          <h4 className="text-[28px]">
            Our goal is to help you create the aquarium of your dreams.
          </h4>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1420578621838-MNR98MX3SQU3CH8KCV4O/ADA-rocks-angle.jpg?format=750w"
            alt="nature"
          />
          <h5>
            Aquariums are living art and Aquarium Zen carries the fish, plants
            and equipment necessary to help you realize your creative
            inspirations.{" "}
          </h5>
          <p>
            We carry ADA (Aqua Design Amano) products, UNS (Ultum Nature
            Systems) items, Twinstar lighting, Seachem, Oase filters and many
            other unique and quality aquascaping materials such as rare wood and
            stone imported from Asia. We also carry nutritious prepared and
            frozen foods.{" "}
          </p>
          <p>
            We only sell what we know works and works well for creating artistic
            aquariums. Though we strive for high quality, we do our best to make
            our products affordable and available to our customers. We also
            stock quality tropical fish and plants, many of which we have bred
            or cultivated ourselves.{" "}
          </p>
          <button className="uppercase text-white bg-black pt-[21px] pb-[16px] px-[34px] text-[15px] hover:opacity-80 my-[2rem]">
            <Link href="https://shop.aquariumzen.net/">shop now</Link>
          </button>
        </div>
      </section>
      {/* 2 */}
      <section
        ref={(ref) => (sections.current[1] = ref)}
        className={` ${activeSection === 1 ? "active" : ""}`}
      >
        <div ref={secondContainerRef}>
          <NatureAquarium
            imgUrl="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1420577924998-QBJO4F1TYCIRX0DCSBHJ/penguin-tetra-school.jpg?format=2500w"
            heading="TROPICAL FISH"
          />
        </div>

        <div className="max-w-[650px] mx-auto px-4 flex flex-col gap-4 justify-center items-center py-20">
          <h5>
            Aquarium Zen's selection of tropical fish is varied and unique,
            focused on species that do well in freshwater planted aquariums.
          </h5>
          <p>
            Our interest is in small, peaceful species that will grace the
            aquarium with gentle, colorful energy. Most of the fish in our store
            have been selected so that they can be freely combined in planted
            community aquariums. The owner of Aquarium Zen, Steve Waldron, has
            over 30 years of aquarium experience and can tell you everything you
            need to know about the fish of your interest.
          </p>
          <p>
            We source many of our fish from local sources and even breed some of
            our own such as rare varieties of livebearers and dwarf shrimp. We
            can also special order just about any type of freshwater fish and
            have the connections to track down rare species.
          </p>
        </div>
      </section>
      {/* 3 */}
      <section
        ref={(ref) => (sections.current[2] = ref)}
        className={` ${activeSection === 2 ? "active" : ""}`}
      >
        <div ref={thirdContainerRef}>
          <NatureAquarium
            imgUrl="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1421557066223-4FBNFCFQMKIVN9WOMKUK/DSC_5490.JPG?format=2500w"
            heading="AQUATIC PLANTS"
          />
        </div>
        <div className="max-w-[650px] mx-auto px-4 flex flex-col gap-4 justify-center items-center py-20">
          <h4 className="text-[28px]">
            Aquatic plants provide the structure and biological support to keep
            our aquarium ecosystems thriving.{" "}
          </h4>
          <p>
            Aquarium plants are diverse and beautiful in their own right and we
            see our Nature Aquariums as a style of underwater gardening. There
            are aquatic plants for every type of aquarium and we specialize in
            helping our customers discover the right plant for their aquarium
            conditions and experience level.{" "}
          </p>
          <p>
            Every aquarium benefits from the addition of living plants and your
            fish will feel more at ease, healthy and contented in a planted
            aquarium. Even if you don't have a green thumb, we can find the
            right plant for you and your aquarium.{" "}
          </p>
          <p>
            Aquarium Zen carries a wide selection of nursery grown plants and
            also a diverse collection of rarities that we cultivate in the
            store.
          </p>
          <button className="uppercase text-white bg-black pt-[21px] pb-[16px] px-[34px] text-[15px] hover:opacity-80 my-[2rem]">
            <Link href="https://shop.aquariumzen.net/">shop now</Link>
          </button>
        </div>
      </section>
    </>
  );
};
export default index;

const Content = ({ title, p1, p2, imgUrl }) => {
  return (
    <div className="max-w-[650px] mx-auto px-4 flex flex-col gap-4 justify-center items-center py-20">
      <h4 className="text-[28px]">{title}</h4>
      <p>{p1}</p>
      <p>{p2}</p>
      <img src={imgUrl} alt="nature" />
    </div>
  );
};
