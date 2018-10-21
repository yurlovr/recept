import React, { Component } from "react";
import IngridientsList from "../../Components/IngridientsList/IngridientsList.js";
import StepOfCooking from "../../Components/StepOfCooking/StepOfCooking.js";
import "bootstrap/dist/css/bootstrap.css";
import getData from "../StorageCompanents/GetData/GetData";
import { receptId } from "../../Container/App/App";

class RedactRecept extends Component {
  constructor(props) {
    super(props);

    console.log("props redactRecept", props);
    let recepts = getData(receptId);
    this.data = {};

    recepts.forEach(recept => {
      if (recept.id === this.props.data) {
        this.data = { ...recept };
      }
    });

    this.state = {
      name: this.data.name,
      imageUrl: this.data.imageUrl,
      ingridientsCooking: this.data.ingridientsCooking,
      cookingStage: this.data.cookingStage,
      persons: this.data.persons,
      timeCooking: this.data.timeCooking,
      complexity: this.data.complexity,
      categories: this.data.categories,
      description: this.data.description,
      ingridients: this.data.ingridients
    };

    this.updateValue = this.updateValue.bind(this);

    console.log("data redactRecept", this.data);
  }

  render() {
    return (
      <div className="card container pl-5">
        <div>
          <h2 className="card-title   text-center pt-2 pb-2">
            {this.state.name}
          </h2>
          <label htmlFor="name">
            Название рецепта:&nbsp;
            <input
              className="mr-3 form-control"
              style={{ width: 375 + "px" }}
              id="name"
              type="text"
              value={this.state.name}
              onChange={this.updateValue}
            />
          </label>
        </div>

        <div>
          <p className="mb-3">
            <img
              className="rounded mx-auto d-block"
              alt={this.data.name}
              src={this.data.imageUrl}
              width="80%"
            />
          </p>

          <label htmlFor="imageUrl">
            Изображение:&nbsp;
            <input
              className="mr-3 form-control"
              style={{ width: 375 + "px" }}
              id="imageUrl"
              type="file"
              onChange={this.updateValue}
            />
          </label>
        </div>

        <h3 className="text-center">{this.state.name}</h3>

        <label htmlFor="description">
          <textarea
            className="mr-3 form-control"
            style={{ width: 290 + "px", height: 200 + "px" }}
            id="description"
            onChange={this.updateValue}
            value={this.state.description}
          >
            {this.state.description}
          </textarea>
        </label>

        <section>
          <h4>Ингридиенты</h4>

          <IngridientsList
            data={this.state.ingridientsCooking}
            redactRecept={true}
            updateValue={this.updateValue}
          />

          <h4>Пошаговый рецепт приготовления</h4>

          <StepOfCooking
            data={this.state.cookingStage}
            redactRecept={true}
            updateValue={this.updateValue}
          />

          <p className="d-flex justify-content-around">
            <label htmlFor="timeCooking">
              Время приготовления:&nbsp;
              <input
                className="mr-3 form-control font-weight-bold"
                style={{ width: 125 + "px" }}
                id="timeCooking"
                type="text"
                value={this.state.timeCooking}
                onChange={this.updateValue}
              />
            </label>

            <label htmlFor="persons">
              Количество персон:&nbsp;
              <input
                className="mr-3 form-control font-weight-bold"
                style={{ width: 125 + "px" }}
                id="persons"
                type="text"
                value={this.state.persons}
                onChange={this.updateValue}
              />
            </label>

            <label htmlFor="complexity" style={{ paddingTop: 25 + "px" }}>
              Сложность:&nbsp;
              <br />
              <select
                className="mr-3 form-control font-weight-bold"
                style={{ paddingLeft: 5 + "px" }}
                id="complexity"
                value={this.state.complexity}
                onChange={this.updateValue}
              >
                <option value="легко">легко</option>
                <option value="средне">средне</option>
                <option value="трудно">трудно</option>
              </select>
            </label>
          </p>
          <p style={{ width: 300 + "px" }}>
            <label htmlFor="categories">
              Категория блюда:
              <br />
              (Первые блюда, Вторые блюда, Пицца, Десерт и т.п.)
              <input
                className="mr-3 form-control font-weight-bold"
                style={{ width: 275 + "px" }}
                id="categories"
                type="text"
                value={this.state.categories}
                onChange={this.updateValue}
              />
            </label>
          </p>
          <p>
            <label htmlFor="ingridients">
              Ингридиенты для поиска:&nbsp;
              <input
                className="mr-3 form-control"
                style={{ width: 375 + "px" }}
                id="ingridients"
                type="text"
                value={this.state.ingridients}
                onChange={this.updateValue}
              />
            </label>
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

  updateValue(e) {
    let targetId = e.target.id;
    let target = e.target.value;
    console.log("targetId ", targetId, " taregt ", target);

    this.setState(
      {
        ...this.state,
        [targetId]: target
      },
      () => {
        console.log('this.state REDACT___FORM',{ ...this.state });
      }
    );
  }
}
export default RedactRecept;
