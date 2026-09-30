  import Image from "next/image";
  import React from "react";

  const Hero = () => {
    return (
      <section className="h-screen bg-red-60 px-5">
        <div className="flex justify-center items-center h-full bg-green-60">
          <div className="absolute top-[11%] left-[5%] font-anton text-orange  text-7xl">
            *
          </div>
          {/* <div className="absolute bottom-[12%] right-[5%] font-anton text-white  text-6xl">
            *
          </div> */}
          <div className="absolute top-[10%] right-[5%] font-anton text-white leading-5 text-right text-xl">
            Open <br /> to <br />
            <span className="text-orange">Work</span>
          </div>
          <div className="absolute z-10 bottom-[2%] left-[5%] font-inter text-white  text-[0.6rem]">
            Based in <br /> <span className="underline">Hyderabad</span>, India
          </div>
          <div className="absolute z-10 bottom-[2%] right-[5%] font-inter text-white text-right text-[0.6rem]">
            Scroll <br /> to know more <br /> about me
          </div>
          <div className="absolute bottom-[23%] left-[5%] font-anton text-white  text-xl leading-5">
            FRONTEND <br /> BACKEND <br />{" "}
            <span className="text-orange">EVERYTHING</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="absolute top-[20%] font-inter text-[12px] tracking-[6px]">
              Full Stack Developer
            </div>
            <div className=" absolute top-[24%] flex flex-col justify-center items-center leading-26 tracking-tighter">
              <div className=" font-anton text-[7rem] bg-yellow-60">NAZISH</div>
              <div className=" font-anton text-[7rem] bg-yellow-60">PARVEZ</div>
            </div>
          </div>
          <div className="absolute bottom-0 bg-gray-60 h-[55%] w-auto object-cover">
            <Image
              src="/final.png"
              alt="Nazish Parvez"
              width={1200}
              height={1200}
              priority
              className="h-full w-auto object-cover"
            />
          </div>
        </div>
      </section>
    );
  };

  export default Hero;
