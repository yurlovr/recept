import React, {Component} from 'react'


class StepOfCooking extends Component{

    // constructor (props) { //Почему тут не надо конструктор
    //     super(props)
    //
    // }
    render() {
        // console.log(this.props.data);
        const elementList = this.props.data.map((cookingStage, index) =>

            <li key={index.toString()} className="mb-3">
                <p className="mb-3 text-uppercase font-weight-bold"> Шаг {index +1}</p>
                {cookingStage}
            </li>

        );

        return (
            <ul>
                {elementList}
            </ul>
        )
    }
}

export default StepOfCooking