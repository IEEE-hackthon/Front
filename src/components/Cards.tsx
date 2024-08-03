import Card from "./ui/Card";
import { CardList } from "@/src/data/data";
const Cards = () => {
  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-secondary">
        Meet our teem
      </h1>
      <div className="flex flex-wrap justify-center">
        {CardList.map((cardData) => (
          <Card key={cardData.id} {...cardData} />
        ))}
      </div>
    </div>
  );
};
export default Cards;
