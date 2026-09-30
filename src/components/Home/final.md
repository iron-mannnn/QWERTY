import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-screen w-auto font-anton flex justify-center select-none">
      {/* Name Starts */}
      <div className="absolute top-[20%] mx-5 text-center xl:top-[19%]">
        <div className="font-inter text-[0.60rem] tracking-[0.40rem] mb-1 sm:text-[0.70rem] md:text-[0.72rem] lg:text-[0.78rem] xl:text-[0.78rem] md:mb-0 sm:tracking-[0.50rem] md:tracking-[0.60rem] lg:tracking-[0.65rem] xl:tracking-[0.70rem]">
          FULL STACK DEVELOPER
        </div>
        <div className="text-[7rem] leading-28 tracking-tight sm:leading-none sm:text-[14rem] md:text-[18rem] lg:text-[22rem] xl:text-[29rem]">
          <div>NAZISH</div>
          <div className="sm:hidden">PARVEZ</div>
        </div>
      </div>
      {/* Name Ends */}

      {/* Main Image Starts */}
      <Image
        src="/final.png"
        alt="Nazish Parvez"
        width={1080}
        height={1080}
        priority
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-auto h-[50%] object-cover sm:h-[60%] md:h-[65%] lg:h-[68%] xl:h-[70%]"
      />
      {/* Main Image Ends */}

      {/* Left Side FE BE & Everything Starts */}
      <div className="absolute bottom-[25%] left-[5%] font-anton text-white text-left text-lg leading-5 lg:text-xl xl:text-2xl xl:leading-6 md:bottom-[20%] lg:bottom-[16%] lg:left-[4%] xl:bottom-[32%]">
        FRONTEND <br /> BACKEND <br />{" "}
        <span className="text-orange">EVERYTHING</span>
      </div>
      {/* Left Side FE BE & Everything Ends */}

      {/* Star Starts */}
      <div className="absolute top-[11%] left-[5%] font-anton text-orange text-6xl sm:top-[12.5%] lg:left-[4%] xl:top-[14%] md:text-7xl xl:text-[5.8rem]">
        *
      </div>
      {/* Star Ends */}

      {/* Right Side OTW Starts */}
      <div className="absolute top-[10%] right-[5%] font-anton text-white leading-5 text-right text-lg lg:text-xl xl:text-2xl xl:leading-6 sm:top-[12%] lg:right-[4%] lg:top-[14%] xl:top-[34%]">
        OPEN <br /> TO <br /> <span className="text-orange">WORK</span>
      </div>
      {/* Right Side OTW Ends */}

      {/* Left Side Bottom Location Starts */}
      <div className="absolute z-10 bottom-[2%] left-[5%] font-inter text-white text-[0.55rem] lg:text-[0.7rem] lg:left-[4%]">
        Based in <br />{" "}
        <span className="underline md:decoration-2 md:decoration-orange">
          Hyderabad
        </span>
        , India
      </div>
      {/* Left Side Bottom Location Ends */}

      {/* Right Side Scroll Starts */}
      <div className="absolute z-10 bottom-[2%] right-[4%] font-inter text-white text-right text-[0.55rem] lg:text-[0.7rem] lg:right-[4%]">
        <span className="underline md:decoration-orange md:decoration-2">
          SCROLL
        </span>
        ↓ <br />
        The Story Continues
      </div>
      {/* Right Side Scroll Ends */}
    </section>
  );
};

export default Hero;