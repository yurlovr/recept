import React, {Component} from 'react'
import {receptId} from './App.js'
import getData from './GetData.js'
import ArticleList from "./ArticleList";
import Article from "./Article";
import App from "./App";


// class Filter extends Component{
//     constructor(props) {
//         super(props);
//         console.log('props', props);
//
//          this.objData = getData(receptId);
//          this.receptList = this.filter(this.objData);
//
//
//     }

   function Filter(data,receptObject) {

        // console.log('obj', data);


        let receptFiltered = [];

        let name = data.name.toLowerCase();
        let categories = data.cat.toLowerCase();
        let ingridients = data.ingr.toLowerCase();
        let author = data.author.toLowerCase();
        let pop = data.pop;

        // console.log('name ', name,' categories ', categories, ' ing ',ingridients, ' aut ',author,' pop ',pop);


        receptObject.forEach(item => {

            let lowerItemName = item.name.toLowerCase();

             if (!name) { receptFiltered.push(item)}
              else {
                 if (lowerItemName.includes(name)) {
                     receptFiltered.push(item);
                 }
             }
        });
        console.log('отфильтрованный масств название',receptFiltered);

        if (author) {
            receptFiltered = receptFiltered.filter(item => {

                if (item.author.toLowerCase() === author) {
                    return item
                }
            });
        }

        console.log('отфильтрованный масств  автор',receptFiltered);

        if (pop) {
            receptFiltered.sort((a, b) => {
                return +b.likes - +a.likes
            });
        }
            console.log('отфильтрованный масств популярность ', receptFiltered);

        if (categories) {
            receptFiltered = receptFiltered.filter(item => {

                if (item.categories.some((index) => {
                    return index.toLowerCase() === categories;
                })
            ) {
                 return item;
                }
            });
        }

        console.log('отфильтрованный масств  категории', receptFiltered);

        if (ingridients) {

            receptFiltered = receptFiltered.filter(item => {



                if (item.ingridients.some((index) => {
                    return index.toLowerCase() === ingridients
                })
                ) {
                    return item;
                }
            });
        }

        console.log('отфильтрованный масств  ингридиенты', receptFiltered);



            console.log('отфильтрованный масств  конецный вариант', receptFiltered);

            return receptFiltered;






            // <ArticleList receptId={this.receptList} />


}

export default Filter