import {receptId} from './App.js'

function setDataLocalStorage(props) { // принимает объект data-рецепт count значение keySting ключ у объета


    console.log({props});

    let data = JSON.parse(localStorage.getItem(receptId));
    // console.log(data);
    data.forEach(item => {
        if (item.id === props.data.id){
            item[props.keyString] = props.count;
        }
    });
    let stringData = JSON.stringify(data);
    localStorage.setItem(receptId, stringData);

}

export default setDataLocalStorage