import React from "react";

export default function OptionsForFilter(data) {
  // console.log(data);
  let str = data.str;
  // console.log(data.str);
  let optionsSet = new Set();

  data.allRecepts.forEach(recept => {
    if (Array.isArray(recept[str])) {
      recept[str].forEach(item => optionsSet.add(item));
    } else {
      optionsSet.add(recept[str]);
    }
  });
  let arrayOptions = Array.from(optionsSet);
  arrayOptions.unshift("");

  return arrayOptions.map(index => (
    <option value={index} key={index}>
      {index}
    </option>
  ));
}
