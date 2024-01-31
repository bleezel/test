//Класс слов
class Card {
  id: string;
  word: string;
  trans: string;
  primer: string;
  constructor(word: string, trans: string, primer:string, id: string) {
    this.word = word;
    this.trans = trans;
    this.primer = primer;
    this.id = id;
  }
}

export default Card;
