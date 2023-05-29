import React from "react";

const location = () => {
  return (
    <>
      <div className="min-h-[50vh] flex justify-center items-center bg-[#1c1c1c] text-white">
        <h1 className="text-[34px] md:text-[44px] x-md:[58] lg:text-[70px] xl:text-[90px] ">
          HOURS & LOCATION
        </h1>
      </div>

      <div className="max-w-[950px] mx-auto px-4  py-10 x-md:py-[16]">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1420223497330-083QTO7KQP34Q0WIYIW5/Aquarium-Zen-Seattle-Fish-Store-Nature-Aquarium?format=1000w"
          alt="office"
        />
        <div className="flex justify-center items-center">
          <h3 className="my-[30px] ">
            920 NE 64th St
            <br />
            Seattle, WA 98115
          </h3>
        </div>
        <div className="flex flex-col x-md:flex-row gap-6 x-md:gap-0">
          <div className="flex-1">
            <h2 className="text-center text-[18px] x-md:text-[30px] border-y-[1px] p-[30px_0px_25px_0px] border-[rgba(28,28,28,0.5)]">
              HOURS
            </h2>
            <div className="uppercase">
              <div className="my-[40px] flex flex-col items-center gap-4 ">
                <h3 className="text-center text-[17px] x-md:text-[22px]">
                  <strong>Mon - Tue &nbsp;</strong>
                  <br />
                  Closed
                </h3>
                <h3 className="text-center">
                  <strong>Wed - Fri</strong>
                  <br />
                  1pm - 7pm
                </h3>
                <h3 className="text-center">
                  <strong>Sat - Sun</strong>
                  <br />
                  Noon- 6PM
                </h3>
              </div>
              <h3 data-rte-preserve-empty="true"></h3>
              <p data-rte-preserve-empty="true"></p>
              <h3 className="text-center my-[50px]">
                <strong>Store PHONE</strong>
                <br />
                206.499.1372
              </h3>
              <h3>&nbsp;</h3>
              <h3 className="text-center">
                <strong>e-mail</strong>
                <br />
                aquariumzen@gmail.com
              </h3>
            </div>
          </div>
          <div className="flex-1">
            <iframe
              className="filter grayscale"
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=920%20NE%2064th%20St%20Seattle,%20WA,%2098115,%20United%20States+(My%20Business%20Name)&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/distance-area-calculator.html">
                measure area map
              </a>
            </iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default location;
