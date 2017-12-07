import React from 'react';
import ReactDOM from 'react-dom';

class BookInfo extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            book: null
        }
    }

    componentDidMount(){
        fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:'+this.props.isbn)
            .then( resp => resp.json() )
            .then( book => this.setState({ book }) ) //jeżeli nazwa zmiennej jest taka sama jak nazwa atrybutu można skorzystać ze skróconego zapisu
            .catch( e => console.log(e) );
    }



    render(){
        if(this.state.book === null) return null;

        return  <div>
            {this.state.book.items.map( book => <h1>{book.volumeInfo.title}</h1>  )}
        </div>;
    }

}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <BookInfo isbn="0747532699"/>,
        document.getElementById('app')
    );
});