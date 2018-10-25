import React, { Component } from "react";
import OptionsForFilter from "../../Components/OptionsForFilter/OptionsForFilter";

class FilterRending extends Component {
  constructor(props) {
    super(props);

    // console.log("FILTERRENDING", props.allRecepts);
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
                  <OptionsForFilter
                    allRecepts={this.props.allRecepts}
                    str={"categories"}
                  />
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
                  <OptionsForFilter
                    allRecepts={this.props.allRecepts}
                    str={"ingridients"}
                  />
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
                  <OptionsForFilter
                    allRecepts={this.props.allRecepts}
                    str={"author"}
                  />
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
