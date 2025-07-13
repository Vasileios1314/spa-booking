import Link from "next/link";
import menuData from "../Header/menuData";
import Image from "next/image";

const Hero = () => (
  <>
    <section
      id="home"
      className="relative z-10 mt-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
    >
      {/* Fancy SVG Background */}
      <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="hero-bg-gradient1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#f0abfc" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="hero-bg-gradient2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f9fafb" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path fill="url(#hero-bg-gradient1)" d="M0,224L60,208C120,192,240,160,360,154.7C480,149,600,171,720,186.7C840,203,960,213,1080,197.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        <path fill="url(#hero-bg-gradient2)" d="M0,288L80,272C160,256,320,224,480,197.3C640,171,800,149,960,154.7C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
      </svg>
      <div className="container relative z-10">
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
