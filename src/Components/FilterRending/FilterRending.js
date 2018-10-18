import React, { Component } from "react";

class FilterRending extends Component {
  constructor(props) {
    super(props);

    this.state = {
      receptName: "",
      receptCategories: "",
      receptIngridients: "",
      receptAuthor: "",
      likes: ""
    };

    this.defaultState = this.state;

    this.updateValue = this.updateValue.bind(this);
    this.resetValue = this.resetValue.bind(this);
  }

  render() {
    return (
      <section className="d-flex">
        <form
          onSubmit={this.handleSubmit}
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
                  value={this.state.receptName}
                  onChange={event => this.updateValue(event)}
                />
              </label>
            </div>

            <div className="w-25 mb-3 mt-3">
              <label htmlFor="receptCategories">
                Категория блюд:&nbsp;
                <select
                  className="form-control"
                  id="receptCategories"
                  value={this.state.receptCategories}
                  onChange={event => this.updateValue(event)}
                >
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
                <select
                  className="form-control"
                  id="receptIngridients"
                  value={this.state.receptIngridients}
                  onChange={event => this.updateValue(event)}
                >
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
                <select
                  className="form-control"
                  id="receptAuthor"
                  value={this.state.receptAuthor}
                  onChange={event => this.updateValue(event)}
                >
                  <option value="" />
                  <option value="Вася">Вася</option>
                  <option value="Петя">Петя</option>
                  <option value="Миша">Миша</option>
                </select>
              </label>
            </div>

            <div className="form-check w-25  ml-5 justify-content-between flex-grow-1">
              <label className="ml-3" htmlFor="receptPoplular">
                Сортировать:&nbsp;
                <select
                  className="form-control ml-3"
                  id="likes"
                  value={this.state.likes}
                  onChange={event => this.updateValue(event)}
                >
                  <option value="" />
                  <option value="по популярности">по популярности</option>
                </select>
              </label>
            </div>

            {/*<button*/}
            {/*className="btn btn-success ml-auto mr-3 mb-3"*/}
            {/*type="button"*/}
            {/*onClick={()=>{this.props.funcFilter(this.state)}}*/}
            {/*>*/}
            {/*Показать*/}
            {/*</button>*/}

            <button
              className="btn btn-success mr-5 mb-3 mt-3"
              type="button"
              onClick={this.resetValue}
            >
              Сбросить фильтр
            </button>
          </div>
        </form>
      </section>
    );
  }

  updateValue(e) {
    let targetId = e.target.id;
    let target = e.target.value;

    this.setState(
      {
        ...this.state,
        [targetId]: target
      },

      () => {
        this.props.funcFilter({ ...this.state });
      }
    );
  }

  resetValue() {
    this.setState({
      ...this.defaultState
    });

    this.props.funcResetFilter();
  }
}
export default FilterRending;
