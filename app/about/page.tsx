import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Our hotel's hosts are truly dedicated to making your stay as enjoyable
        as possible. Their warm and friendly hospitality will make you feel at
        home, and their attention to detail will ensure that your visit to
        Albania is truly unforgettable. Come and experience the best in
        hospitality at our hotel!"
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
