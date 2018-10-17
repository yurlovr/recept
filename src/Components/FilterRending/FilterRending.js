import React, { Component } from "react";
import Filter from "../../Components/Filter/Filter.js";

class FilterRending extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterRecept: this.filteredRecept
    };



    this.filterClick = this.filterClick.bind(this);
    this.filterClickReset = this.filterClickReset.bind(this);
  }

  render() {
    return (
      <section className="d-flex">
        <fieldset
          className="w-100 fieldset"
          style={{
            borderWidth: 1 + "px",
            borderColor: "lightgreen",
            borderRadius: 10 + "px",
            borderStyle: "solid"
          }}
        >
          <div className="d-flex form-inline flex-wrap">
            <div className="w-25 mb-3 mt-3">
              <label htmlFor="receptName">
                Название рецепта:&nbsp;
                <input
                  type="text"
                  className="form-control"
                  id="receptName"
                  placeholder="Название рецепта"
                />
              </label>
            </div>

            <div className="w-25 mb-3 mt-3">
              <label htmlFor="receptCategories">
                Категория блюд:&nbsp;
                <select className="form-control" id="receptCategories">
                  <option value="" />
                  <option value="Первые блюда">Первые блюда</option>
                  <option value="Вторые блюда">Вторые блюда</option>
                  <option value="Пицца">Пицца</option>
                  <option value="Десерты">Десерты</option>
                </select>
              </label>
            </div>

            <div className="w-25 mb-3 mt-3">
              <label htmlFor="receptIngridients">
                Тип ингридиента:&nbsp;
                <select className="form-control" id="receptIngridients">
                  <option value="" />
                  <option value="Мясо">Мясо</option>
                  <option value="Свинина">Свинина</option>
                  <option value="Говядина">Говядина</option>
                  <option value="Курица">Курица</option>
                  <option value="Рыба">Рыба</option>
                  <option value="Картофель">Картофель</option>
                </select>
              </label>
            </div>

            <div className="w-25 mb-3 mt-3">
              <label htmlFor="receptAuthor">
                Автор рецепта:&nbsp;
                <select className="form-control" id="receptAuthor">
                  <option value="" />
                  <option value="Вася">Вася</option>
                  <option value="Петя">Петя</option>
                  <option value="Миша">Миша</option>
                </select>
              </label>
            </div>

            <div className="form-check w-25 justify-content-start pl-5 flex-grow-1">
              <input type="checkbox" className="form-check-input" id="pop" />
              <label htmlFor="receptPoplular" className="form-check-label">
                &nbsp;по популярности
              </label>
            </div>

            <button
              className="btn btn-success ml-auto mr-3 mb-3"
              type="submit"
              onClick={this.filterClick}
            >
              Показать
            </button>

            <button
              className="btn btn-success ml-auto mr-3 mb-3"
              type="submit"
              onClick={this.filterClickReset}
            >
              Сбросить фильтр
            </button>
          </div>
        </fieldset>
      </section>
    );
  }

  filterClick() {
    let filterObjet = {};
    let fieldFilter = document.querySelector(".fieldset");

    filterObjet.name = fieldFilter.querySelector("#receptName").value;
    filterObjet.cat = fieldFilter.querySelector("#receptCategories").value;
    filterObjet.ingr = fieldFilter.querySelector("#receptIngridients").value;
    filterObjet.author = fieldFilter.querySelector("#receptAuthor").value;

    fieldFilter.querySelector("#pop").checked === true
      ? (filterObjet.pop = true)
      : (filterObjet.pop = false);

    this.filteredRecept = Filter(filterObjet, this.filteredRecept);

    this.setState({
      filterRecept: this.filteredRecept
    });
  }

  filterClickReset() {
    this.filteredRecept = this.allRecept;

    this.setState({
      filterRecept: this.filteredRecept
    });
    let fieldFilter = document.querySelector(".fieldset");
    fieldFilter.querySelector("#receptName").value = "";
    fieldFilter.querySelector("#receptCategories").value = "";
    fieldFilter.querySelector("#receptIngridients").value = "";
    fieldFilter.querySelector("#receptAuthor").value = "";
    fieldFilter.querySelector("#pop").checked = false;
  }
}

export default FilterRending;
