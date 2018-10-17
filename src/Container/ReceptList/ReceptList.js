import React, { Component } from "react";
import Recept from "../Recept/Recept.js";
import Filter from "../../Components/Filter/Filter.js";
import FilterRending from "../../Components/FilterRending/FilterRending.js";

class ReceptList extends Component {
  constructor(props) {
    super(props);

    console.log("receptl ", props);

    this.allRecept = this.props.recepts;
    this.filteredRecept = [...this.allRecept];

    this.state = {
      openFilter: false,
      filterRecept: this.filteredRecept
    };

    this.filterClick = this.filterClick.bind(this);
    this.filterClickReset = this.filterClickReset.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  render() {
    let elementList = this.state.filterRecept.map(recept => (
      <li key={recept.id} className="mb-3">
        <Recept data={recept}/>
      </li>
    ));

    return (
      <main>
        <div>
          <button
            className="btn btn-success mb-3"
            style={{marginLeft: 45 + "%"}}
            type="button"
            onClick={this.handleClick}
          >
            {this.state.openFilter ? "Закрыть фильтр" : "Открыть фильтр"}
          </button>
        </div>
        {this.state.openFilter && <FilterRending funcFilter={this.filterClick} funcResetFilter={this.filterClickReset}/>}{" "}
        {/*// Передать сюда рецепты...*/}
        <ul className="list-unstyled mt-3">{elementList}</ul>
        {/* вернуть сюда новый массив после фильтра*/}
      </main>
    );
  }

  handleClick(event) {
    this.setState({
      openFilter: !this.state.openFilter
    });
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

    console.log('filterObject ',filterObjet);
    console.log('this.filteredRecept ',this.props);

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

export default ReceptList;
