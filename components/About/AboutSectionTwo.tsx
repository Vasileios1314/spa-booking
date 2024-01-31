import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image2.jpg"
                alt="about image"
                fill
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Diverse Neighborhoods
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Experience the charm of Albanian living in varied
                  neighborhoods, each with its unique culture, architecture, and
                  ambiance, ready to welcome you.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Albanias Natural and Historical Beauty: A Harmonious Blend
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Albania is a country blessed with both breathtaking natural
                  scenery and rich historical monuments. From the snow-capped
                  peaks of the Albanian Alps to the pristine beaches along the
                  Adriatic and Ionian coasts, Albanias diverse landscapes offer
                  endless opportunities for adventure and exploration. But the
                  countrys beauty extends beyond its natural wonders, as it is
                  also home to a wealth of historical and cultural landmarks.
                  From ancient Illyrian ruins and Ottoman-era castles, to the
                  stunning mosaics of the Byzantine churches, Albanias monuments
                  bear witness to the countrys rich and varied history. Whether
                  one is seeking natural beauty or cultural richness, Albania
                  provides a harmonious blend of both, making it a truly unique
                  and captivating destination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
