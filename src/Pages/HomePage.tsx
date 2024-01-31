import { useState, useEffect } from "react";
import { useAppSelector } from "../app/hooks";
import Card from "../model/Card";
import CardList from "../components/cardList";

const HomePage: React.FC = (props) => {
  let [open, setOpen] = useState(false);
  const getCardList = useAppSelector((state) => state.card.cardList);

  const [searchTerm, setSearchTerm] = useState("");
  const [cardListData, setCardListData] = useState<Card[]>();

  useEffect(() => {
    setCardListData(getCardList);
    const filteredData = getCardList.filter((item) =>
      item.trans.toLowerCase().includes(searchTerm)
    );
    setCardListData(filteredData);
  }, [getCardList, searchTerm]);
  const NewWord = () => {
    setOpen((current) => !current);
  };
  const Profile = () => {
    setOpen((current) => !current);
  };
  const ReProfile = () => {
    setOpen((current) => !current);
  };
  return (
    <div className="flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gray-200">
      <div className="flex items-center flex-shrink-0 w-full h-16 px-10 bg-white bg-opacity-75 h-24 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">

        <input
          className="font-extrabold flex items-center h-10 px-4 ml-10 text-sm w-1/3 bg-gray-200 focus:outline-none focus:ring"
          type="search"
          placeholder="Поиск слов …"
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />
        <button
          type="submit"
          className="font-extrabold flex items-center p-2 rounded text-sm w-auto"
          onClick={() => NewWord}
        >
          <span>&nbsp;Добавить новые слова</span>
        </button>
        
        <button
          className="font-extrabold flex items-center overflow-hidden p-2 rounded text-sm w-auto ml-auto"
          onClick={() => ReProfile}
        >
          <span>&nbsp;Редактировать профиль</span>
        </button>
        <button
          className="font-extrabold flex items-center overflow-hidden p-2 rounded text-sm w-auto ml-auto"
          onClick={() => Profile}
        >
          <span>&nbsp;Профиль</span>
        </button>
        
      </div>
      <CardList cards={cardListData} />
      <div className="font-extrabold sticky bottom-0 bg-indigo-500 text-indigo-50 p-2 w-full z-50">
        Словарик
      </div>
    </div>
  );
};

export default HomePage;
