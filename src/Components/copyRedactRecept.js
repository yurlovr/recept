import React, { Component } from "react";
import IngridientsList from "../../Components/IngridientsList/IngridientsList.js";
import StepOfCooking from "../../Components/StepOfCooking/StepOfCooking.js";
import "bootstrap/dist/css/bootstrap.css";
import getData from "../StorageCompanents/GetData/GetData";
import {receptId} from '../../Container/App/App'



class RedactRecept extends Component {
  constructor(props) {
    super(props);

    console.log('props redactRecept', props);
    let recepts = getData(receptId);
    this.data={};

    recepts.forEach(recept => {
      if(recept.id === this.props.data) {
        this.data ={...recept}
      }
    });

    console.log('data redactRecept', this.data);
  }

  render() {

    return (
      <div className="card container pl-5">
        <h2 className="card-title   text-center pt-2 pb-2">
          {this.data.name}
        </h2>

        <p className="mb-3">
          <img
            className="rounded mx-auto d-block"
            alt={this.data.name}
            src={this.data.imageUrl}
            width="80%"
          />
        </p>

        <h3 className="text-center">
          {this.data.name}
        </h3>

        <p>{this.data.description}</p>


        <section>
          <h4>Ингридиенты</h4>
          <IngridientsList data={this.data.ingridientsCooking} />
          <h4>Пошаговый рецепт приготовления</h4>

          <StepOfCooking data={this.data.cookingStage} />

          <p className="d-flex justify-content-around">
                <span>
                  <small>Время приготовления:</small>
                  &nbsp;
                  <span className="font-weight-bold">
                    {" "}
                    {this.data.timeCooking}
                  </span>
                </span>
            <span>
                  <small>Количесто персон:</small>
              &nbsp;
              <span className="font-weight-bold">
                    {this.data.persons}
                  </span>
                </span>
            <span>
                  <small>Сложность:</small>
              &nbsp;
              <span className="font-weight-bold">
                    {this.data.complexity}
                  </span>
                </span>
          </p>
        </section>


        {/*<div>*/}
        {/*<button*/}
        {/*className="btn btn-outline-success mr-3 mb-3"*/}
        {/*onClick={this.onCountLikes}*/}
        {/*>*/}
        {/*Like : {this.state.countLike}*/}
        {/*</button>*/}
        {/*<p className="d-inline-block align-middle">*/}
        {/*Популярность рецепта:&nbsp;*/}
        {/*<span className="font-italic font-weight-bold">*/}
        {/*{this.state.countLike}*/}
        {/*</span>*/}
        {/*</p>*/}

        {/*{ (this.state.user()) &&(*/}

        {/*<button*/}
        {/*className="btn btn-outline-success mr-3 mb-3 float-right"*/}
        {/*style={{marginTop:10+"px"}}*/}
        {/*onClick={this.setRecept}*/}
        {/*>*/}
        {/*Редактировать*/}
        {/*</button>*/}
        {/*)}*/}

        {/*</div>*/}

        {/*<p className="font-italic">*/}
        {/*Автор рецепта:&nbsp;*/}
        {/*<span className="font-weight-bold font">*/}
        {/*{this.props.data.author}*/}
        {/*</span>*/}


        {/*{this.props.data.redactAuthor && (*/}
        {/*<span className="ml-5">Отредактировал:&nbsp;*/}
        {/*<span className="font-weight-bold font">*/}
        {/*{this.props.data.redactAuthor}*/}
        {/*</span>*/}
        {/*</span>*/}
        {/*)}*/}
        {/*</p>*/}



      </div>
    );
  }


}
export default RedactRecept;
