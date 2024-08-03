import { Idata } from "@/src/data/data";
const Card = ({ name, title, description, image, hash }: Idata) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white my-10 mx-8">
      <img className="w-full h-48 object-cover" src={image} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{title}</p>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      {hash && (
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2">
            {hash}
          </span>
        </div>
      )}
    </div>
  );
};
export default Card;
