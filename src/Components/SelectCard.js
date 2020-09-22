import PrepCards from "../Pages/Cards/PrepCards";
import InfoCards from "../Pages/Cards/InfoCards";

function SelectCard(page, arr, card) {
  let result;
  switch (page) {
    case "PrepCards":
      result = PrepCards;
      break;
    case "InfoCards":
      result = InfoCards;
      break;
    default:
      return "Something broke";
  }
  return result[arr][card];
}

export default SelectCard;
