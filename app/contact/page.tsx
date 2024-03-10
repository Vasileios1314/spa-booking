import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Reach Out & Connect"
        description="Our apartments are located in the heart of Vlore. We
        are open 24/7 and offer a warm and welcoming atmosphere for all of our
        guests. Check In: 14:00 Check Out: 10:00"
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
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d192.45840265338606!2d19.492809825235316!3d40.456408467063966!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2snl!4v1706731115700!5m2!1sen!2snl"
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
