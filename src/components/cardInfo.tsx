import * as React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { MdRestoreFromTrash } from "react-icons/md";
import Card from "../model/Card";
import { useAppDispatch } from "../app/hooks";
import { removeCard } from "../app/cardSlice";

interface CardProps {
  card: Card;
  onCardUpdate: (id: string) => void;
}

const CardInfo: React.FC<CardProps> = (props) => {
  const dispatch = useAppDispatch();
  const card = props.card;

  const setUpdatePage = (id: string) => {
    props.onCardUpdate(id);
  };

  return (
    <div className="bg-white-500">
      <div className="flex flex-col pb-2 overflow-auto">
        <div
          className="relative flex flex-col items-start p-4 mt-3 bg-white cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
          draggable="true"
        >
          <button
            className="absolute top-0 right-0  items-center justify-center w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex"
            onClick={() => setUpdatePage(card.id)}
          >
            <MdOutlineEdit />
          </button>
          <button
            className="absolute top-7 right-0  items-center justify-center w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex"
            onClick={() => dispatch(removeCard({ id: card.id }))}
          >
            <MdRestoreFromTrash />
          </button>

          <div className="pl-6 text-sm font-semibold text-gray-800 text-2xl">
            <div className="flex items-center w-full mt-3 ">
              <div className="flex items-center">
                <span className="ml-1 leading-none">{card.word}</span>
              </div>
            </div>

            <div className=" flex items-center w-full mt-3 text-xs font-semibold text-gray-400 text-base">
              <div className="flex items-center">
                <span className="ml-1 leading-none">{card.trans}</span>
              </div>
            </div>

            <div className=" flex items-center w-full mt-3 text-xs font-semibold text-gray-400 text-base">
              <div className="flex items-center">
                <span className="ml-1 leading-none">{card.primer}</span>
              </div>
            </div>

            <button className="bg-green-500 text-white py-2 px-4 opacity-50 w-25 h-15 mt-3 mr-2">
              Перевернуть
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
