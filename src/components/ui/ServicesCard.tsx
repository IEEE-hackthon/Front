import { Button } from "@components/ui/button";

interface Iprops {
  img: string;
  title: string;
  text: string;
  height: string;
  width: string;
}
const ServicesCard = ({ img, title, text, height, width }: Iprops) => {
  return (
    <div className="flex md:flex-row flex-col items-center p-6 gap-5 ">
      <div>
        <img
          src={img}
          className={`rounded-full mb-4 md:w-${width} md:h-${height} h-52 w-52`}
        />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <h3 className="text-lg font-semibold text-orange-500">Of Pets</h3>
        <p className="text-center text-gray-700 mt-2">{text}</p>
        <Button className="mt-4 px-4 py-2 rounded-lg">Explore more</Button>
      </div>
    </div>
  );
};
export default ServicesCard;
