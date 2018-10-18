export default function saveData(id, data) {
  try {
    if (localStorage.getItem(id) === null) {
      const stringData = JSON.stringify(data);
      localStorage.setItem(id, stringData);

      return true;
    } else {
      return true;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}
