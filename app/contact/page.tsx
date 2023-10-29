import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Reach Out & Connect"
        description="Navigating the path to a new life in the Netherlands? We're here to help every step of the way. Our Contact page is your direct gateway to the HRS Hub team, offering a quick and efficient way to address all your queries. Whether you have questions about our services, need guidance on a specific aspect of relocation, or simply wish to share your thoughts and feedback, we're just a message away. Comprehensive support, expert insights, and personalized responses await. Let's start the conversation and make your Dutch journey seamless. Visit our Contact page now."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
