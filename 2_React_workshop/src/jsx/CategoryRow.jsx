import React from 'react';

class CategoryRow extends React.Component{

    render(){

        return(
            <tr>
                <th className='turquoise' colSpan='2'>
                    {this.props.gender}
                </th>
            </tr>
        )
    }
}

module.exports = CategoryRow;