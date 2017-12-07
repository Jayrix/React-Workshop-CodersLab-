import React from 'react';

class CatForm extends React.Component{

    handleCheckboxChange = e => {
        this.props.toggleKidsFn(e);
    }

    handleSearchChange = e => {
         this.props.searchFilterFn(e);
    }


    render(){
        return(
            <form className='blue'>
                <input onChange={this.handleSearchChange} type="text" placeholder="Search..."/>
                <input onChange={this.handleCheckboxChange} type="checkbox" id="kidsFilter"></input>
                <label htmlFor="kidsFilter">Only show cats which like kids</label>
            </form>
        )
    }

}

module.exports = CatForm;