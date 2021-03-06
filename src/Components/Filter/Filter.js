import getData from "../StorageCompanents/GetData/GetData";
import { receptId } from "../../Container/App/App";

function Filter(data) {
  let receptFiltered = [];

  let name = data.receptName.toLowerCase();
  let categories = data.receptCategories.toLowerCase();
  let ingridients = data.receptIngridients.toLowerCase();
  let author = data.receptAuthor.toLowerCase();
  let pop = data.likes;

  let receptObject = getData(receptId);

  receptObject.forEach(item => {
    let lowerItemName = item.name.toLowerCase();

    if (!name) {
      receptFiltered.push(item);
    } else {
      if (lowerItemName.includes(name)) {
        receptFiltered.push(item);
      }
    }
  });

  if (author) {
    receptFiltered = receptFiltered.filter(item => {
      if (item.author.toLowerCase() === author) {
        return item;
      }
      return null;
    });
  }

  if (pop) {
    receptFiltered.sort((a, b) => {
      return +b.likes - +a.likes;
    });
  }

  if (categories) {
    receptFiltered = receptFiltered.filter(item => {
      if (
        item.categories.some(index => {
          return index.toLowerCase() === categories;
        })
      ) {
        return item;
      }
      return null;
    });
  }

  if (ingridients) {
    receptFiltered = receptFiltered.filter(item => {
      if (
        item.ingridients.some(index => {
          return index.toLowerCase() === ingridients;
        })
      ) {
        return item;
      }
      return null;
    });
  }

  if (receptFiltered.length === 0) {
    let stringUndefined =
      " Увы, но по Вашему запросу ничего не найдено. Попробуйте задать другие параметры фильтрации.";
    receptFiltered.push({
      name: stringUndefined,
      id: "none"
    });
  }

  return receptFiltered;
}

export default Filter;
