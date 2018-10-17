import React, { Component } from "react";
// import {filterClick ,filterClickReset} from "../../Container/ReceptList/ReceptList";

class FilterRending extends Component {
  constructor(props) {
    super(props);

    this.state ={
      receptName:'',
      receptCategories:'',
      receptIngridients:'',
      receptAuthor:'',
      pop: false

    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateValue = this.updateValue.bind(this);

    }

  render() {

    return (
      <section className="d-flex">
        <form onSubmit={this.handleSubmit}
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
                  onChange={event =>this.updateValue(event)}
                />
              </label>
            </div>

            <div className="w-25 mb-3 mt-3">
              <label htmlFor="receptCategories">
                Категория блюд:&nbsp;
                <select className="form-control" id="receptCategories"
                        value={this.state.receptCategories}
                        onChange={event =>this.updateValue(event)}>
                  <option value=""/>
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
                <select className="form-control" id="receptIngridients"
                        value={this.state.receptIngridients}
                        onChange={event =>this.updateValue(event)}>
                  <option value=""/>
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
                <select className="form-control" id="receptAuthor"
                        value={this.state.receptAuthor}
                        onChange={event =>this.updateValue(event)}>
                  <option value=""/>
                  <option value="Вася">Вася</option>
                  <option value="Петя">Петя</option>
                  <option value="Миша">Миша</option>
                </select>
              </label>
            </div>

            <div className="form-check w-25 justify-content-start pl-5 flex-grow-1">
              <input type="checkbox" className="form-check-input" id="pop"
                     value={this.state.pop}
                     onChange={event =>this.updateValue(event)}/>
              <label htmlFor="receptPoplular" className="form-check-label">
                &nbsp;по популярности
              </label>
            </div>

            <button
              className="btn btn-success ml-auto mr-3 mb-3"
              type="submit"
              onClick={this.props.funcFilter}
            >
              Показать
            </button>

            <button
              className="btn btn-success ml-auto mr-3 mb-3"
              type="button"
              onClick={this.props.funcResetFilter}
            >
              Сбросить фильтр
            </button>
          </div>
        </form>
      </section>
    );
  }

  updateValue(e) {
    console.log('ededed ',e.target.id);
    let targetId = e.target.id;
    let target = e.target.value;
    this.setState ({
      receptName:'',
      receptCategories:'',
      receptIngridients:'',
      receptAuthor:'',
      pop: false
    });

    console.log(' thtth', this.state)


    console.log('value ', target);
}
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.inputValue + 'A name was submitted: ' + this.state.inputValue);
    event.preventDefault();
  }


}
export default FilterRending;
