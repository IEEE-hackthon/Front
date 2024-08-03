export interface Idata {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  hash?: string;
}
import raghb from "@assets/raghb.jpeg";
import salmahus from "@assets/salmahus.jpg";
import mohmaedels from "@assets/mohmaedels.jpeg";
import ayaalashry from "@assets/ayaalashry.jpg";
import ranimTamer from "@assets/ranimTamer.jpg";
import Huda from "@assets/Huda.jpg";
import nabil from "@assets/nabil.jpg";
export const CardList: Idata[] = [
  {
    id: 1,
    name: "Nabil Mohamed",
    title: "Front-end Developer",
    description: "Develop our site",
    image: nabil,
    hash: "leader",
  },
  {
    id: 2,
    name: "Mohamed Rageb",
    title: "Flutter Developer",
    description: "Make our mobile app",
    image: raghb,
    hash: "creative",
  },
  {
    id: 3,
    name: "Salma Hussin",
    title: "Ui/Ux",
    description: "Develop our app and site",
    image: salmahus,
    hash: "hard worker",
  },
  {
    id: 4,
    name: "Mohamed Elsayed",
    title: "Flutter Developer",
    description: "Make our mobile app",
    image: mohmaedels,
    hash: "gineus",
  },
  {
    id: 5,
    name: "Aya Elashry",
    title: "Ui/Ux",
    description: "Develop our app and site",
    image: ayaalashry,
    hash: "Passionate",
  },
  {
    id: 6,
    name: "Ranim Tamer",
    title: "Ui/Ux",
    description: "Develop our app and site",
    image: ranimTamer,
    hash: "work under pressure",
  },
  {
    id: 7,
    name: "Huda Hany",
    title: "Ui/Ux",
    description: "Develop our app and site",
    image: Huda,
    hash: "creative",
  },
];
