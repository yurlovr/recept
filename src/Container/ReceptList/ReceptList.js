import React, { Component } from "react";
import Recept from "../Recept/Recept.js";
import Filter from "../../Components/Filter/Filter.js";
import FilterRending from "../../Components/FilterRending/FilterRending.js";

class ReceptList extends Component {
  constructor(props) {
    super(props);

    // console.log('props ReceptList ', props.user);

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
        <Recept
          data={recept}
          user={this.props.user}
          redactRecept={this.props.redactRecept}
        />
      </li>
    ));

    return (
      <main>
        <div>
          <button
            className="btn btn-success mb-3"
            style={{ marginLeft: 45 + "%" }}
            type="button"
            onClick={this.handleClick}
          >
            {this.state.openFilter ? "Закрыть фильтр" : "Открыть фильтр"}
          </button>
        </div>
        {this.state.openFilter && (
          <FilterRending
            funcFilter={this.filterClick}
            funcResetFilter={this.filterClickReset}
            allRecepts={this.props.recepts}
          />
        )}{" "}
        <ul className="list-unstyled mt-3">{elementList}</ul>
      </main>
    );
  }

  handleClick(event) {
    this.setState({
      openFilter: !this.state.openFilter
    });
  }

  filterClick(filterObjet) {
    this.filteredRecept = Filter(filterObjet);
    this.setState({
      filterRecept: this.filteredRecept
    });
  }

  filterClickReset() {
    this.filteredRecept = this.allRecept;

    this.setState({
      filterRecept: this.filteredRecept
    });
  }
}

export default ReceptList;
