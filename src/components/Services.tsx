import dog from "@assets/dogserv.svg";
import planet from "@assets/plantserv.png";
import ServicesCard from "./ui/ServicesCard";

const Services = () => {
  return (
    <>
      <div className="bg-bgServ flex flex-col justify-center items-center min-h-screen bg-white">
        <div>
          <h1 className="text-3xl font-bold text-center mb-6 text-primary">
            Our Services
          </h1>
        </div>
        <div className="flex flex-col md:flex-row space-x-8">
          <ServicesCard
            img={dog}
            text="Before you bring home your pet, be sure you‘re ready to take care of it properly"
            title="Proper Care Of Pets"
            key="jjdhf"
            height="80"
            width="80"
          />
          <ServicesCard
            img={planet}
            title="Proper Care Of Plants"
            text="Caring for indoor plants is a pleasant activity that can turn into a real hobby."
            key="33hhd"
            height="200px"
            width="300px"
          />
        </div>
      </div>
    </>
  );
};
export default Services;
