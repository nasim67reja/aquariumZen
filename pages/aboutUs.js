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
import Link from "next/link";

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
        {[
          "Our Commitment to Nature",
          "Bringing Nature Aquariums to Seattle",
          "What People Are Saying",
        ].map((el, i) => (
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
          title="OUR COMMITMENT TO NATURE"
          heroImgUrl="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1422511107442-D3IXP7JJQID5G0FFAF9F/Aquarium+Zen+DSC03597.jpg?format=2500w"
        />

        <div className="max-w-[650px] mx-auto px-4 flex flex-col gap-4 justify-center items-center py-10 x-md:py-16">
          <h4 className="text-[17px] x-md:text-[20px] x-md:mb-6 mb-2 leading-[1.3] text-center x-md:text-start">
            Aquarium Zen is inspired by nature and hopes to share with our
            customers an appreciation for the wonders of life on earth.
          </h4>
          <div className="text-[14px] x-md:text-[16px] text-center x-md:text-start flex flex-col gap-2 x-md:gap-4">
            <p>
              A novel way of expressing that love for nature is through an
              artfully designed aquascape. Everything is connected in nature and
              we see our aquascaping business as an opportunity to affect people
              positively and to make the world a better place, even in a small
              way. If even a small portion of our clients leave Aquarium Zen
              with a better appreciation for the interrelationships of plants,
              fish, aquatic ecosystems and the stewardship of nature, we will
              have done our job.{" "}
            </p>
            <p>
              As part of our commitment to nature, we choose small, grassroots
              conservation organizations to support both monetarily and with our
              volunteered time. Our current focus is tropical montane cloud
              forest conservation.{" "}
            </p>
            <p>
              The cloud forest environments are magical places filled with
              moss-covered trees, exotic birds, rare amphibians, exuberant
              vegetation and cascading mountain streams – great inspiration for
              our aquarium designs. Through our efforts, we have helped a{" "}
              <Link
                className="text-[#6598b8]"
                href="http://www.reservalasgralarias.com/"
                target="_blank"
              >
                {" "}
                cloud forest reserve in Ecuador{" "}
              </Link>{" "}
              gain important publicity and raised funds for significant land
              purchases.
            </p>
          </div>
        </div>
      </section>
      {/* 2 */}
      <section
        ref={(ref) => (sections.current[1] = ref)}
        className={` ${activeSection === 1 ? "active" : ""}`}
      >
        <div ref={secondContainerRef}>
          <NatureAquarium
            imgUrl="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1448380441829-XWQM2M3DI2ENVCMXQC4T/orange-head-fish-1800.jpg?format=1500w"
            heading="BRINGING NATURE AQUARIUMS TO SEATTLE"
          />
        </div>

        <div className="max-w-[650px] mx-auto px-4 flex flex-col gap-4 justify-center items-center py-10 x-md:py-16">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1448380279090-08M3J2EVBIZPSQU12DKI/Aquarium-Zen-Seattle-Steve.JPG?format=750w"
            alt="nature"
          />

          <h4 className="text-[17px] x-md:text-[20px] my-3 x-md:my-6 leading-[1.3] text-center x-md:text-start">
            Aquarium Zen is inspired by nature and hopes to share with our
            customers an appreciation for the wonders of life on earth.
          </h4>
          <div className=" flex flex-col gap-4 text-[14px] x-md:text-[16px]">
            <p>
              Aquarium Zen is the result of decades of focused aquarium
              experience, passion, and dedication to the art of the Nature
              Aquarium. Our goal is to inspire every person who walks into
              Aquarium Zen.{" "}
            </p>
            <p>
              We realize our customers and community are the most important
              factor in our business' success. To keep high quality customer
              service standards, every customer interaction is handled by
              Aquarium Zen's owner and sole operator, Steve Waldron.{" "}
            </p>
            <p>
              Aquarium Zen is the product of Steve's vision to bring an aquarium
              shop focused on the Nature Aquarium style to Seattle. Steve has
              over 30 years of aquarium experience and has worked as a
              professional aquarist for nearly twenty years, including the
              management of aquaculture systems for university fish research
              laboratories as well as the retail and wholesale tropical fish
              trade. Steve has achieved the Master Fish Breeder and Master
              Aquatic Horticulturist status for the Greater Seattle Aquarium
              Society and is a contributing writer for the premiere
              English-language freshwater aquarium magazine, AMAZONAS. If you
              are looking for professional aquarium advice and experienced
              mentorship, Steve is looking forward to becoming your aquarium
              buddy.
            </p>
            <p>
              We are endlessly grateful for this opportunity to celebrate our
              love for naturalistic aquariums with the wonderful community of
              Seattle and all of the Pacific Northwest.
            </p>
          </div>
        </div>
      </section>
      {/* 3 */}
      <section
        ref={(ref) => (sections.current[2] = ref)}
        className={` ${activeSection === 2 ? "active" : ""}`}
      >
        <div ref={thirdContainerRef}>
          <NatureAquarium
            imgUrl="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1423773086272-F7Q5TG7OFADJAF2GP37J/angelfish-green-wall-edit.jpg?format=1500w"
            heading="WHAT PEOPLE ARE SAYING"
          />
        </div>

        <div className="max-w-[480px] mx-auto px-4  py-10 x-md:py-16">
          <h4 className="text-[17px] x-md:text-[20px] my-3 x-md:my-6 leading-[1.3]">
            Aquarium Zen is inspired by nature and hopes to share with our
            customers an appreciation for the wonders of life on earth.
          </h4>
          <div className="text-[14px] x-md:text-[16px]">
            <p className="py-6 x-md:py-9 border-b-[0.5px] border-[rgba(54,54,54,0.3)]">
              "The perfect blend of modern art masterpieces blended seamlessly
              with the allure of untamed nature. More of a living museum than
              the traditional pet store, this is one of the most impressive
              businesses I've ever had the privilege of visiting. Having
              traveled from the bayou with visiting this shop as the top of my
              itinerary (aside from work), it was a true pleasure. I am most
              jealous of any locals who are able to make regular visits to
              spruce up their aquaria. With absolutely certainty, I will be back
              and will be filling my bags with goodies to take home."
            </p>

            <p className="py-6 x-md:py-9 border-b-[0.5px] border-[rgba(54,54,54,0.3)]">
              "It's great to see a store like this. It's a fusion of the 'old
              school' dedication and expertise of the tropical fish hobby
              combined with a stylish new look. Beautiful natural setups with
              healthy fish & live plants. I haven't kept fish in decades but I
              am re-inspired!"
            </p>

            <p className="py-6 x-md:py-9 border-b-[0.5px] border-[rgba(54,54,54,0.3)]">
              "A different experience than any other fish store in Seattle.
              Aquarium Zen is more like a well kept public aquarium or an art
              gallery than a pet shop. Steve knows his stuff, and only keeps the
              most interesting fish and plants."
            </p>

            <p className="py-6 x-md:py-9 border-b-[0.5px] border-[rgba(54,54,54,0.3)]">
              "Best aquatic plant store I've been to."
            </p>

            <p className="py-6 x-md:py-9 border-b-[0.5px] border-[rgba(54,54,54,0.3)]">
              "Absolutely wonderful shop. The owner is skilled and knowledgeable
              and most of all willing to help a newbie like myself to the
              planted tank hobby. He spent a good amount of time giving me
              suggestions and ways that I could get results without going for
              the most expensive thing. His tanks look better than anything I've
              seen at an aquarium. A must see shop!"
            </p>

            <p className="py-6 x-md:py-9 border-b-[0.5px] border-[rgba(54,54,54,0.3)]">
              "Wonderful place. The aquariums are beautiful...all hand-created
              with natural plants. Steven is terrific, helped my children and me
              select everything, taught us how to set things up and gave us his
              card in case we had problems. I thought the pricing was very
              reasonable and the result is beautiful. I'm now going to buy
              another one for my office, too. I never expected to do that! Steve
              is an artist – you can tell he loves what he's doing, and he's
              doing it for the right reasons. You've got to support that!"
            </p>

            <p className="py-6 x-md:py-9 border-b-[0.5px] border-[rgba(54,54,54,0.3)]">
              "Steve was so patient and helpful. His shop is a wonderland. He
              was straightforward and encouraging. I'm telling everyone I know
              about this shop."
            </p>

            <p className="py-6 x-md:py-9 border-b-[0.5px] border-[rgba(54,54,54,0.3)]">
              “I had a ton of questions which Steve was happy to answer and he
              didn't make me feel rushed. The selection of fish, plants, and
              substrates are great! I was a loyal customer to [another Seattle
              area LFS] but I found a new wonderful place that I feel confident
              will provide me the best customer service and products. I will
              continue to take the hour-and-a-half drive here since its worth
              it.”
            </p>

            <p className="py-6 x-md:py-9 border-b-[0.5px] border-[rgba(54,54,54,0.3)]">
              "The owner is very helpful, knowledgeable and easy to talk to.
              Amazing to find such excellent customer service nowadays! So,
              appreciate his experience that is shared. No weird upsale tactics.
              Healthy quality fish and plants. Reasonable prices too. Great
              experience all around. Thanks! What more can you ask for?”
            </p>
            <p className="py-6 x-md:py-9 ">
              "So glad I found this place as I am new to planted tanks. The
              owner is skilled, knowledgable, friendly and extremely helpful. He
              didn't try to sell my anything that might have been out of my
              skill level and advised me on CO2 strategies I might use. It is a
              pleasure walking around the shop – it looks better than most zoo
              setups!"
            </p>
          </div>
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
