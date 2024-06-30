import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Reach Out & Connect"
        description="Our apartments are located in the heart of Vlore. We
        are open 24/7 and offer a warm and welcoming atmosphere for all of our
        guests. Check In: 14:00 Check Out: 11:00"
      />
      <div
        className="map-container"
        style={{
          position: "relative",
          overflow: "hidden",
          paddingTop: "56.25%",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d769.8345896695715!2d19.492126269602533!3d40.456323018662474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI3JzIyLjgiTiAxOcKwMjknMzQuMCJF!5e1!3m2!1sen!2snl!4v1719749813218!5m2!1sen!2snl"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            border: "0",
          }}
          loading="lazy"
        ></iframe>
      </div>
      <Contact />
    </>
  );
};

export default ContactPage;
