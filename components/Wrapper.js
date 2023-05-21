import React from "react";

const Wrapper = ({ Children }) => {
  return (
    <div className="max-w-[693px] mx-auto px-4 flex flex-col gap-10 justify-center items-center py-20">
      <img
        src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1419045665589-MB9WYUX3F2VFFNRL6TI6/Aquarium-Zen-Seattle?format=300w"
        alt="fish"
        className="w-[45%]"
      />
      <h4 className="text-[26px] leading-[1.2rem]">
        Seattle's source for aquascaping inspiration.
      </h4>
      <div className="flex flex-col gap-4">
        <p className="break-words text-[#363636] ">
          Aquarium Zen is a natural aquarium store filled with vibrant aquatic
          plants, a unique selection of healthy tropical fish, quality supplies
          and the inspiration to get you excited about keeping aquariums again.
        </p>
        <p className="break-words">
          Our focus is on the Nature Aquarium style of freshwater aquarium
          design. Nature Aquariums combine aquatic plants with artistically
          designed layouts of wood and stone to create a beautiful ecosystem in
          miniature. We take pride in giving our customers excellent customer
          service and have over 30 years of experience to draw from.
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
          gallery, now open to the public. Of course, you can also connect with
          us on Facebook:
        </p>
      </div>
      {Children}
    </div>
  );
};

export default Wrapper;
