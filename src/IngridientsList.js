import React, {Component} from 'react'


class IngridientsList extends Component{

    // constructor (props) { //Почему тут не надо конструктор
    //     super(props)
    //
    // }
    render() {
        // console.log(this.props.data);
        const elementList = this.props.data.map((ingridients, index) =>
            <li key={index.toString()}>
                {ingridients}
            </li>
        );

        return (
            <ul className="mb-3">
                {elementList}
            </ul>
        )
    }
}

export default IngridientsList