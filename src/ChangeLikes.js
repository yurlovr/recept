// import React from  'react'
import setDataLocalStorage from './setDataLocalStorage.js'


function setChangeLikes(props) {

    let objectData ={
        data: props.data,
        count: props.currentCount,
        keyString: "likes"
    };
        // let data = props.data;
    //         // let count = props.currentCount;
    //         // let keyString = "likes";

     // if(props.data.likes !== objectData.count) {
         // props.data.likes = objectData.count;

         setDataLocalStorage(objectData);

         // let data = JSON.parse(localStorage.getItem(receptId));
         // // console.log(data);
         // data.forEach(item => {
         //    if (item.id === props.data.id){
         //        item.likes = props.currentCount;
         //    }
         // });
         // let stringData = JSON.stringify(data);
         // localStorage.setItem(receptId, stringData);
     // }

    // console.log (props.data.likes);
}

export default setChangeLikes