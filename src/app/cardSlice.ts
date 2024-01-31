import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import Card from "../model/Card";
import { v4 as uuidv4 } from "uuid"; //Для создания уникальных идентификаторов

type initialStateType = { //Объявляет тип объектов массива
  cardList: Card[];
};

const cardList: Card[] = [ //Список слов (массив)
  {
    id: uuidv4(),
    word: "Аccessory",
    trans: "Аксессуар",
    primer: "Шапка"
  },
  {
    id: uuidv4(),
    word: "Additional",
    trans: "Дополнительный",
    primer: "Тест"
  },
  {
    id: uuidv4(),
    word: "Balloon",
    trans: "Шарик",
    primer: "Воздушный шар"
  },
  {
    id: uuidv4(),
    word: "Cat",
    trans: "Кот",
    primer: "Кот или кошка"
  },
  {
    id: uuidv4(),
    word: "City",
    trans: "Город",
    primer: "Большой город"
  },
  {
    id: uuidv4(),
    word: "Cup",
    trans: "Чашка",
    primer: "Для чая или кофе"
  },
  {
    id: uuidv4(),
    word: "Door",
    trans: "Дверь",
    primer: "Дверь с ручкой"
  },
  {
    id: uuidv4(),
    word: "Spoon",
    trans: "Ложка",
    primer: "Для еды"
  },
  {
    id: uuidv4(),
    word: "Window",
    trans: "Окно",
    primer: "Бывают разные"
  },
];

const initialState: initialStateType = { //Инициализация новой переменной со значением массива
  cardList,
};

export const cardSlice = createSlice({ //Сборщик действий с карточками
  name: "card",
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Card>) => {
      state.cardList.push(action.payload);
    },
    updateCard: (state, action: PayloadAction<Card>) => {
      const {
        payload: { id, word, trans },
      } = action;

      state.cardList = state.cardList.map((card) =>
        card.id === id ? { ...card, word, trans } : card
      );
    },
    removeCard: (state, action: PayloadAction<{ id: string }>) => {
      state.cardList = state.cardList.filter(
        (card) => card.id !== action.payload.id
      );
    },
  },
});

export const { addCard, updateCard, removeCard } =
cardSlice.actions;
export const getCardList = (state: RootState) => state.card.cardList;

export default cardSlice.reducer;
