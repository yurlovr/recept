import React, {Component} from  'react';
import saveData from './SaveData.js';
import recepts from './data/recepts.json';
import users from './data/users.json';
import ArticleList from './ArticleList.js'
import getData from './GetData.js'


export const receptId = 'my-recept';
export const usersId = 'my-users';

export default class App extends Component {
    constructor(props) {
        super(props);

        this._initSave();
    }


    render () {

        return (

                 <ArticleList receptId={this._initGet()}/>

        )
    }

    _initSave () {
       saveData(receptId, recepts); // сохраняем рецепы в localStorage
       saveData(usersId, users); // сохраняем пользователей в localStorega
    }

    _initGet () {
        const dataRecept = getData(receptId);
        // console.log(dataRecept);
        return dataRecept;
    }

}



