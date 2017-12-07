import React from 'react';
import ReactDOM from 'react-dom';
import CatForm from './CatForm.jsx';
import CatTable from './Table.jsx';

class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            cats : [],
        }
    }

    getCats = (url) =>{
        fetch(url)
            .then(result => {
                if (result.ok){
                    return result.json();
                }else{
                    throw new Exception('nie otrzymano obiektu');
                }
            })
            .then(result => this.setState({cats : result}, ()=> console.log(this.state.cats) ))
            .catch(e=> console.log(e))
    }


    toggleKidFilter = (e) => {
        if (e.target.checked){
            let filteredCats = this.state.cats.filter(el=>el.likesKids===true);
            this.setState({cats : filteredCats});
        } else {
            this.getCats('http://localhost:3000/cats');
        }


    }

    searchFilter = e => {
        this.getCats('http://localhost:3000/cats/?q=' + e.target.value );
    }

    render() {

        if (this.state.cats === null || this.state.cats.length === 0 ){
            return (
                <div className='yellow'>
                    <CatForm toggleKidsFn={this.toggleKidFilter} searchFilterFn={this.searchFilter}/>
                    <h1>Error: nie ma takich kotów</h1>
                </div>
            )
        }

        return (
            <div className='yellow'>
                <CatForm toggleKidsFn={this.toggleKidFilter} searchFilterFn={this.searchFilter}/>
                <CatTable cats={this.state.cats}/>
            </div>
        )
    }

    componentDidMount(){
        this.getCats('http://localhost:3000/cats');
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});