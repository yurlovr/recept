import React, {Component} from  'react';
import IngridientsList from './IngridientsList.js'
import StepOfCooking from './StepOfCooking.js'
import 'bootstrap/dist/css/bootstrap.css'
import setChangeLikes from './ChangeLikes.js'


class Article extends Component {
    constructor (props){
        super(props);

        this.state ={
            isOpen: false,
            countLike: props.data.likes
        };

        this.handleClick = handleClick.bind(this);
        this.onCountLikes = this.onCountLikes.bind(this);
        // console.log ('article', props);
    }
    render() {
        return (
            <div className="card container pl-5">
                <h2 className="card-title   text-center pt-2 pb-2">{this.props.data.name}</h2>

                <a className="mb-3" href="#">
                    <img className="rounded mx-auto d-block" alt={this.props.data.name} src={this.props.data.imageUrl} width="80%" />
                </a>


                <h3 className="text-center">
                    <a href="#" onClick={this.handleClick} style={{textDecoration: 'none'}}>{this.props.data.name}</a>
                </h3>

                <p>{this.props.data.description}</p>

                {this.state.isOpen && <section>
                    <h4>Ингридиенты</h4>
                    <IngridientsList data={this.props.data.ingridientsCooking}/>
                    <h4>Пошаговый рецепт приготовления</h4>

                    <StepOfCooking data={this.props.data.cookingStage}/>

                    <p className="d-flex justify-content-around">
                        <span><small>Время приготовления:</small>&nbsp;
                            <span className="font-weight-bold"> {this.props.data.timeCooking}</span>
                        </span>
                        <span><small>Количесто персон:</small>&nbsp;
                            <span className="font-weight-bold">{this.props.data.persons}</span>
                        </span>
                        <span><small>Сложность:</small>&nbsp;
                            <span className="font-weight-bold">{this.props.data.complexity}</span>
                        </span>
                    </p>

                </section>
                }

                <div className="">

                        <button className="btn btn-outline-success mr-3 mb-3" onClick={this.onCountLikes}>
                            Like : {this.state.countLike}
                        </button>
                        <p className="d-inline-block align-middle">
                            Популярность рецепта:&nbsp;
                            <span className="font-italic font-weight-bold">{this.state.countLike}</span>
                        </p>
                </div>

                <p className="font-italic">
                    Автор рецепта:&nbsp;
                    <span className="font-weight-bold font">{this.props.data.author}</span>
                </p>

                <ul className="list-unstyled d-flex justify-content-start mb-3 font-italic">
                    <li className="mr-3"><small>Дата добавления рецепта: &nbsp;{this.props.data.bornDate}</small></li>
                    <li><small>Последнее редактирование: &nbsp;{this.props.data.redactDate}</small></li>
                </ul>
            </div>

        )
    }

    onCountLikes = () => {
        let count = this.state.countLike;
        let data = this.props.data;

        this.setState({ countLike: +count + 1 });
        // this.props.data.likes = +count + 1;
        let currentCount = +count +1;
        console.log('likes', this.props.data.likes);
        setChangeLikes({currentCount, data});
    };

}

function handleClick(event) {
     event.preventDefault();
    this.setState({
        isOpen: !this.state.isOpen
    });
}


export default Article;