import React, {Component} from 'react'
import {receptId} from './App.js'
import getData from './GetData.js'
import ArticleList from "./ArticleList";
import Article from "./Article";
import App from "./App";


class Filter extends Component{
    constructor(props) {
        super(props);

         this.objData = getData(receptId);
         this.receptList = this.filter(this.objData);


    }

   filter(data) {

        // objData = getData(receptId);

        let receptFiltered = [];

        let name = this.props.name.toLowerCase();
        let categories = this.props.cat.toLowerCase();
        let ingridients = this.props.ingr.toLowerCase();
        let author = this.props.author.toLowerCase();
        let pop = this.props.pop;


        data.forEach(item => {

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
        }





            // <ArticleList receptId={this.receptList} />


}

export default Filter