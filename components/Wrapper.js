import Link from "next/link";
import React from "react";
import { ImFacebook2 } from "react-icons/im";

const Wrapper = ({ Children }) => {
  return (
    <div className="max-w-[693px] mx-auto px-6 x-md:px-4 flex flex-col gap-10 justify-center items-center py-20 text-center x-md:text-start">
      <img
        src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1419045665589-MB9WYUX3F2VFFNRL6TI6/Aquarium-Zen-Seattle?format=300w"
        alt="fish"
        className="x-md:w-[45%] w-[80%]"
      />
      <h4 className="text-[22px] x-md:text-[26px] leading-[1.2] x-md:leading-[1.2rem]">
        Seattle's source for aquascaping inspiration.
      </h4>
      <div className="flex flex-col gap-4 text-[14px] x-md:text-[16px]">
        <p className="break-words text-[#363636] ">
          Aquarium Zen is a natural aquarium store filled with vibrant aquatic
          plants, a unique selection of healthy tropical fish, quality supplies
          and the inspiration to get you excited about keeping aquariums again.
        </p>
        <p className="break-words">
          Our focus is on the
          <Link
            className="text-[#6598b8]"
            href="http://www.adana.co.jp/en/contents/nature_aquarium/index.html"
          >
            {" "}
            Nature Aquarium{" "}
          </Link>
          style of freshwater aquarium design. Nature Aquariums combine aquatic
          plants with artistically designed layouts of wood and stone to create
          a beautiful ecosystem in miniature. We take pride in giving our
          customers{" "}
          <Link
            className="text-[#6598b8]"
            href="https://www.yelp.com/biz/aquarium-zen-seattle"
          >
            {" "}
            excellent customer service{" "}
          </Link>{" "}
          and have over 30 years of experience to draw from.
        </p>
        <p className="break-words">
          At its heart, Aquarium Zen is an independent, small business, tropical
          fish store and we can serve the basic needs of most freshwater
          aquarium owners, even if the Nature Aquarium is not your style. Our
          goal is to mentor our clients in creating the aquarium of their
          dreams.
        </p>
        <p className="break-words">
          We invite you to visit our beautiful showroom and Nature Aquarium
          gallery,{" "}
          <Link
            className="text-[#6598b8]"
            href="https://www.yelp.com/biz/aquarium-zen-seattle"
          >
            {" "}
            now open to the public.{" "}
          </Link>{" "}
          Of course, you can also connect with us on Facebook:
        </p>
        <div className="flex items-center justify-center x-md:mt-8 mt-4">
          <Link href="https://www.facebook.com/AquariumZen" target="_blank">
            <ImFacebook2 className="x-md:w-[30px] w-[22px] h-[22px] x-md:h-[30px]" />
          </Link>
        </div>
      </div>
      {Children}
    </div>
  );
};

export default Wrapper;
