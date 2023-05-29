const { Parallax, Background } = require("react-parallax");

const NatureAquarium = ({ imgUrl, heading }) => {
  return (
    <Parallax strength={500}>
      <Background className="custom-bg">
        <div
          style={{
            height: "100vh",
            width: "100vw",
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Background>

      <div className="text-white h-[60vh] flex justify-center items-center relative">
        <h2 className="max-w-[780px] px-[1rem] text-[34px] md:text-[44px] x-md:[58] lg:text-[70px] xl:text-[90px] text-center leading-[1]">
          {heading}
        </h2>
      </div>
    </Parallax>
  );
};

export default NatureAquarium;
