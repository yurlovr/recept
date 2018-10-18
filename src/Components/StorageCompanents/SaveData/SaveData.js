export default function saveData(id, data) {

  console.log('local', localStorage.getItem(id));
  try {

      const stringData = JSON.stringify(data);
      localStorage.setItem(id, stringData);

      return true;

  } catch (error) {
    console.log(error);
    return false;
  }
}
