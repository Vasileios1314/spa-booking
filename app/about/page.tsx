import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="At HRS Hub, our roots are deeply intertwined with the essence of the Netherlands. Born out of passion and years of experience with providing usefull guidelines, we've witnessed firsthand the challenges and triumphs of starting anew in this beautiful nation. We understand that every individual's journey is unique and filled with aspirations. That's why our dedicated team is committed to making your transition as smooth and enriching as possible. From the bustling canals of Amsterdam to the tranquil tulip fields of the countryside, we're here to guide, support, and inspire. With HRS Hub, you're not just relocating; you're rediscovering life in a land of endless possibilities. Join us, and let's craft your Dutch story together."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
