import React from 'react';
import CategoryRow from './CategoryRow.jsx';
import CatRow from './CatRow.jsx';

class Table extends React.Component{



    render(){


        let maleCatRows = this.props.cats.filter(el=>el.category === 'male').map((el, index) => {
            return <CatRow key={index} catName={el.name} catAge={el.age} />
        });

        let femaleCatRows = this.props.cats.filter(el=>el.category === 'female').map((el, index) => {
            return <CatRow key={index} catName={el.name} catAge={el.age} />
        });

        return(
            <table className='green'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <CategoryRow gender="male"/>
                    {maleCatRows}
                    <CategoryRow gender="female"/>
                    {femaleCatRows}
                </tbody>
            </table>
        )
    }


}

module.exports = Table;