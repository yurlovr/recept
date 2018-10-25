import React, { Component } from "react";

class IngridientsForSearch extends Component {
  constructor(props) {
    super(props);

    // console.log("props IngridientsForSearch ", props.data);
    this.string = props.data.join(", ");
    this.state = {
      ingridients: this.string
    };
    this.updateValue = this.updateValue.bind(this);
  }

  render() {
    return (
      <input
        className="mr-3 form-control"
        style={{ width: 375 + "px" }}
        id="ingridients"
        type="text"
        value={this.state.ingridients}
        onChange={this.updateValue}
      />
    );
  }

  updateValue(e) {
    let target = e.target.value;

    this.setState(
      {
        ingridients: target
      },
      () => {
        let arrayIngridientsForSearch = this.state.ingridients
          .split(",")
          .map(index => index.trim());

        this.props.updateSomeState("ingridients", arrayIngridientsForSearch);
      }
    );
  }
}

export default IngridientsForSearch;
