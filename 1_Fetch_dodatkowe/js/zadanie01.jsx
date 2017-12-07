import React from 'react';
import ReactDOM from 'react-dom';

class CarsDbManager extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            cars : 'test'
        }
    }

    getCars = (url) =>{
        fetch(url)
            .then(result => {
                if (result.ok){
                    return result.json();
                }else{
                    throw new Exception('nie otrzymano obiektu');
                }
            })
            .then(result => this.setState({cars : result}, ()=> console.log(this.state.cars) ))
            .catch(e=> console.log(e))
    }


    sellCar = e => {
        console.log(parseInt(e.target.getAttribute('id')));
        fetch('http://localhost:3000/cars/' + parseInt(e.target.getAttribute('id')), {method : 'DELETE'})
            .then(res => {
                console.log(res);
                this.getCars('http://localhost:3000/cars');
            })
            .catch(e=> console.log(e));




    }

    render(){
        if (this.state.cars === null) return null;
        //let carList = ''
        let carList = [...this.state.cars].map((el,index) => {
            return <li key={el.id}>{el.brand}  {el.name} <button id={el.id} onClick={this.sellCar}>Sprzedany</button></li>;
        });
        return (
            <ul>
                {carList}
            </ul>
        )
    }

    componentDidMount(){

        this.getCars('http://localhost:3000/cars');

    }
}



document.addEventListener('DOMContentLoaded', function(){


    ReactDOM.render(
        <CarsDbManager/>,
        document.getElementById('app')
    );
});