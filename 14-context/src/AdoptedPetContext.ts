import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

const AdoptedPetContext = createContext<
  [Pet | null, (adoptedPet: Pet) => void]
>([
  {
    id: 1337,
    name: "Pandi",
    animal: "dog",
    description: "Lorem Ipsum",
    breed: "Pitbul",
    images: [],
    city: "Albuquerque",
    state: "New Mexico",
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {},
]);

export default AdoptedPetContext;
