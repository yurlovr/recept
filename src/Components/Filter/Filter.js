function Filter(data, receptObject) {
  let receptFiltered = [];

  console.log('data', data,' recO ', receptObject);

  let name = data.name.toLowerCase();
  let categories = data.cat.toLowerCase();
  let ingridients = data.ingr.toLowerCase();
  let author = data.author.toLowerCase();
  let pop = data.pop;

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
