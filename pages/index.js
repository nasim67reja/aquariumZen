import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Wrapper from "@/components/Wrapper";
import React from "react";

const index = () => {
  return (
    <>
      <Layout>
        <img
          src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1420309152156-8I8POGHO6EUI6E0QX7MP/angelfish-slide-cropped.jpg?format=2500w"
          alt="fish in water"
          className="w-full object-cover h-screen"
        />
        <Wrapper />
        <img
          src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1419037725474-M827IIUP14I4QC3EMI6H/DSC_5394.JPG?format=1500w"
          alt="nature"
          className="w-full object-cover h-screen"
        />

        <section>
          <div className="max-w-[693px] mx-auto px-4 flex flex-col gap-10 justify-center items-center py-20">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1420068222099-KDBCYHQDCIAETIL6Y6XU/Takashi-Amano-ADA?format=750w"
              alt="man seeing nature"
            />
            <div className="w-[75%] h-[1px] bg-gray-400"></div>
            <div className=" flex flex-col items-center">
              <h4 className="text-center text-[22px] mb-[10px]">
                "If there is magic on this planet,
                <br /> it is contained in water."
              </h4>
              <span
                className="uppercase opacity-70
            "
              >
                LOREN EISLEY
              </span>
            </div>
            <div className="w-[40%] h-[1px] bg-gray-400"></div>
            <div className="text-[#363636]">
              <p className="mb-4">
                The Nature Aquarium style originated in Japan and was pioneered
                by aquarist and landscape photographer, Takashi Amano. Mr. Amano
                combined his many years of nature study and cultural background
                of refined Japanese aesthetics to create an aquarium design that
                resonates with natural energy and artistic expression. A Nature
                Aquarium is an art form and a living ecosystem. Nature Aquariums
                combine stylish aquarium equipment with layouts of wood, stone,
                living plants and fish to create an enchantment that is not soon
                forgotten.
              </p>
              <p>
                Aquarium Zen is one of the few tropical fish stores in the world
                focused on the Nature Aquarium style. Our showroom in Seattle
                has all the supplies, equipment and knowledge necessary to help
                you create and maintain one of these living pieces of art in
                your own home or office.
              </p>
            </div>
          </div>
        </section>
        <img
          src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1419038597778-TQM1NVVEE87CUSWTCB9F/DSC_3505.JPG?format=2500w"
          alt="nature"
          className="w-full object-cover h-screen"
        />
        <Section4 />
        <ImageGallery />
        <img
          src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1419643749782-0E1Y19USZ1KW7D4GSASJ/DSC_3365.JPG?format=2500w"
          alt="nature"
          className="w-full object-cover h-screen"
        />
        <img
          src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1419643749782-0E1Y19USZ1KW7D4GSASJ/DSC_3365.JPG?format=2500w"
          alt="nature"
          className="w-full object-cover h-screen"
        />
      </Layout>
    </>
  );
};

export default index;

const ImageGallery = () => {
  return (
    <>
      <div className="max-w-[1013px] mx-auto px-4 mb-16">
        <div className="flex  justify-center gap-12 h-[700px]  ">
          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1419043217647-BXMEVS1F1BR40UY95VGW/Aquiarm-Zen-Seattle-Fish-Store-Angelfish?format=500w"
              alt=""
              className="h-[100%]"
            />
          </div>
          <div className="flex flex-col justify-between gap-10">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1419043272884-WYGHVVLZR2HM7DKBRLWR/Aquarium-Zen-Seattle-Fish-Store-Nature-Aquarium-Display?format=500w"
              alt=""
              className="h-[47%]"
            />
            <img
              src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1419043383850-2419R5IZX2I5S4CTUIGL/Aquarium-Zen-Seattle-Fish-Store-Hardscaping-Station?format=500w"
              alt=""
              className="h-[47%]"
            />
          </div>
        </div>
        <div className="my-10">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1419043531253-J31O82CQDSZHV6NIH5S2/Aquarium-Zen-Seattle-Fish-Store?format=1000w"
            alt=""
            className="w-full  h-[450px] object-cover"
          />
        </div>

        <div className="flex gap-10 justify-between my-10 ">
          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1419043575460-NUKMSBYFUP9Y31FP6DFM/Aquarium-Zen-Seattle-Fish-Store-Rainbowfish-Aru+II?format=300w"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1419043669657-F4SB231SUPJYWN6ZB6CI/Aquarium-Zen-Seattle-Fish-Store-Tetras?format=300w"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1419043954743-XTJ5GCC1GGXJ08MBZFL6/Aquarium-Zen-Seattle-Fish-Store-Nature-Aquarium?format=300w"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex justify-between gap-10 h-[700px]">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1419044503411-N1Y16JH3FZOKPBRU2Q14/Aquarium-Zen-Seattle-Fish-Store-Large-Display-Aquarium?format=500w"
            alt=""
            className="w-[48%] h-full object-cover"
          />
          <img
            src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1419044528220-Z829F0MI2T6681YCQYAX/Aquarium-Zen-Seattle-Fish-Store-ADA-Stone-Hardscaping?format=500w"
            alt=""
            className="w-[48%] h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

const Section4 = () => {
  return (
    <section>
      <div className="max-w-[693px] mx-auto px-4 flex flex-col gap-10 justify-center items-center py-20">
        <h4 className="text-[26px] leading-[1.2rem]">
          Redefining the tropical fish store experience.
        </h4>
        <div className="flex flex-col gap-4">
          <p className="break-words text-[#363636] ">
            When you enter Aquarium Zen, you will be greeted by a variety of
            display aquariums in our Nature Aquarium gallery to provide
            inspiration and examples for your own aquarium design. As you make
            your way through the store, you will see clean aquariums filled with
            healthy freshwater fish and growing, living aquatic plants for sale.
            We have a "hardscape dojo" where you can work out your hardscape
            design of wood and stone in a relaxed and fun manner, before you
            purchase it. We have a diverse and varied selection of rimless glass
            aquariums, the ideal vessel for artistic aquarium creations. Our
            shelves are stocked with unique equipment and supplies selected for
            their durability and ability to provide the right conditions to keep
            your planted freshwater aquarium alive and healthy. Aquarium Zen is
            an official retailer of Aqua Design Amano (ADA) products, the
            premier Japanese supplier of Nature Aquarium supplies. If you
            appreciate aquariums, a trip to Aquarium Zen will be a memorable
            experience.
          </p>
          <p className="break-words">
            Many of our customers have described Aquarium Zen as a tropical
            oasis filled with life in a space graced with natural light, old
            Seattle charm, warmth and beauty.
          </p>
        </div>
      </div>
    </section>
  );
};
