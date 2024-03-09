import Link from "next/link";
import menuData from "../Header/menuData";
import Image from "next/image";

const Hero = () => (
  <>
    <section
      id="home"
      className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[800px] text-center"
              data-wow-delay=".2s"
            >
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Experience the Ultimate Comfort at Aleksandria Apartmens Vlorë
              </h1>
              <br />
              <br />
              <p className="font-large mb-12 text-base !leading-relaxed text-body-color dark:text-white dark:opacity-100 sm:text-lg md:text-xl">
                Luxurious amenities, spacious rooms, and breathtaking views
                await you in this prime location. Discover the epitome of
                comfort and relaxation in Vlorë, Albania.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute top-40 right-0 left-0 z-[-1] h-full w-full object-cover object-center opacity-100 lg:opacity-100"
        style={{ maxWidth: "500px", marginTop: "10em", margin: "auto" }}
      ></div>
    </section>
  </>
);

export default Hero;
