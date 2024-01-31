import { useState } from "react";
import CardInfo from "./cardInfo";
import Card from "../model/Card";

interface CardProps {
  cards: Card[] | undefined;
}
const CardList: React.FC<CardProps> = ({ cards }) => {
  let [open, setOpen] = useState(false);
  let [id, setID] = useState("");

  const CardUpdate = (id: string) => {
    setID(id);
    setOpen(true);
  };

  return (
    <div className="flex flex-col ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {cards &&
          cards.map((card) => (
            <CardInfo
              key={card.id}
              card={card}
              onCardUpdate={CardUpdate}
            />
          ))}

      </div>
    </div>
  );
};

export default CardList;
