import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-screen font-anton text-white">
      {/* Main Name Starts */}
      <div className="absolute top-[20%] text-center w-full px-5">
        <div className="font-inter text-xs tracking-[0.375rem] mb-1">
          Full Stack Developer
        </div>
        <div className="text-[7rem] leading-28 tracking-tight">
          <div>NAZISH</div>
          <div>PARVEZ</div>
        </div>
      </div>
      {/* Main Name Ends */}

      {/* Image Starts */}
      <div className="absolute bottom-0 bg-red-60 w-full h-[50%]">
        <Image
          src="/final.png"
          alt="Nazish Parvez"
          width={1200}
          height={1200}
          priority
          className="h-full object-cover"
        />
      </div>
      {/* Image Ends */}

      {/* Top Left Star Starts */}
      <div className="absolute top-[11%] left-[5%] font-anton text-orange text-6xl">
        *
      </div>
      {/* Top Left Star Ends */}

      {/* Top Right CTA Starts */}
      <div className="absolute top-[10%] right-[5%] font-anton text-white leading-5 text-right text-lg">
        Open <br /> to <br /> <span className="text-orange">Work</span>
      </div>
      {/* Top Right CTA Ends */}

      {/* Middle Matter Starts */}
      <div className="absolute bottom-[25%] left-[5%] font-anton text-white text-left text-lg leading-5">
        FRONTEND <br /> BACKEND <br />{" "}
        <span className="text-orange">EVERYTHING</span>
      </div>
      {/* Middle Matter Ends */}

      {/* Bottom Left Location Starts */}
      <div className="absolute z-10 bottom-[2%] left-[5%] font-inter text-white text-[0.6rem]">
        Based in <br /> <span className="underline">Hyderabad</span>, India
      </div>
      {/* Bottom Left Location Ends */}

      {/* Bottom Right Scroll Starts */}
      <div className="absolute z-10 bottom-[2%] right-[5%] font-inter text-white text-right text-[0.6rem]">
        Scroll <br /> to know more <br /> about me
      </div>
      {/* Bottom Right Scroll Ends */}
    </section>
  );
};

export default Hero;
