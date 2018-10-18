function Filter(data, receptObject) {
  let receptFiltered = [];

  let name = data.receptName.toLowerCase();
  let categories = data.receptCategories.toLowerCase();
  let ingridients = data.receptIngridients.toLowerCase();
  let author = data.receptAuthor.toLowerCase();
  let pop = data.likes;

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

  console.log(receptFiltered);
  return receptFiltered;
}

export default Filter;
