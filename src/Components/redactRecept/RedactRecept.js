import React, { Component } from "react";
import IngridientsList from "../../Components/IngridientsList/IngridientsList.js";
import StepOfCooking from "../../Components/StepOfCooking/StepOfCooking.js";
import "bootstrap/dist/css/bootstrap.css";
import getData from "../StorageCompanents/GetData/GetData";
import { receptId } from "../../Container/App/App";
import IngridientsForSearch from "../IngridientsForSeach/IngridientsForSearch";

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

    console.log('THIS', this.data);

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
      ingridients: this.data.ingridients,
      redactAuthor: this.props.user,
      redactDate: (new Date().toLocaleDateString()),
      id: this.data.id,
      author:this.data.author,
      bornDate: this.data.bornDate,
      likes: this.data.likes,
    };

    this.updateRecept = {...this.state};
    console.log('ITOGO', this.updateRecept);

    this.updateValue = this.updateValue.bind(this);
    this.updateSomeState = this.updateSomeState.bind(this);

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
            updateSomeState={this.updateSomeState}
          />

          <h4>Пошаговый рецепт приготовления</h4>

          <StepOfCooking
            data={this.state.cookingStage}
            redactRecept={true}
            updateSomeState={this.updateSomeState}

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
              Ингридиенты для поиска:&nbsp;(через ",")
              <IngridientsForSearch
                data={this.state.ingridients}
                updateSomeState={this.updateSomeState}/>
            </label>
          </p>
        </section>
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
        this.updateRecept = {...this.state};
        return (
          this.props.updateRecept(this.updateRecept)
        )
      }
    );
  }

  updateSomeState (state, value) {

    this.setState ({
      [state]:value
    },
      () => {
        this.updateRecept = {...this.state};
        return (
          this.props.updateRecept(this.updateRecept)
        )
      }
    );
  }


}
export default RedactRecept;
