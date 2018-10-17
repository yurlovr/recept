import setDataLocalStorage from "../StorageCompanents/setDataLocalStorage/setDataLocalStorage.js";

function setChangeLikes(props) {
  let objectData = {
    data: props.data,
    count: props.currentCount,
    keyString: "likes"
  };
  setDataLocalStorage(objectData);
}

export default setChangeLikes;
