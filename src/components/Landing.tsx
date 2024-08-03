import dog from "@assets/dog.png";
import { Button } from "./ui/button";
const Landing = () => {
  return (
    <div className="bg-landing h-screen">
      <section className="container flex md:flex-row flex-col-reverse items-center md:justify-between justify-center gap-5 md:gap-0 h-full ">
        <div className="flex flex-col  items-center md:items-start text-center md:text-left max-w-[500px]">
          <div className="">
            <h1 className="text-4xl font-bold text-gray-800 mb-14">
              Care Your Pets Plants
            </h1>
            <p className="text-gray-800 text-lg font-medium mb-10 hidden md:block">
              We offer you an exceptional experience in caring for pets and
              plants. We will provide you with another dimension and aspects
              that you have not discovered. Download the application now and
              join an exciting journey.
            </p>
          </div>
          <div className="flex space-x-12">
            <Button
              variant="secondary"
              className=" py-6 px-10 rounded-md shadow-md hover:bg-yellow-600 text-lg"
            >
              Read more
            </Button>
            <Button className=" py-6 px-10 rounded-md shadow-md text-lg">
              Care Guide
            </Button>
          </div>
        </div>
        <div>
          <img src={dog} alt="" className="md:h-[600px] h-[350px]" />
        </div>
      </section>
    </div>
  );
};
export default Landing;
