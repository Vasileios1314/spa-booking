import ApartmentsList from "@/components/Apartments/ApartmentsList";
import Breadcrumb from "@/components/Common/Breadcrumb";

const ApartmentsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Apartments"
        description="Nestled in the heart of the breathtaking Vlorë coastline, Aleksandria Apartments presents a sanctuary of luxury and tranquility. Our exquisite apartments offer a unique blend of elegant comfort and modern amenities, designed to cater to every aspect of your well-being and relaxation."
      />
      <ApartmentsList />
    </>
  );
};

export default ApartmentsPage;
