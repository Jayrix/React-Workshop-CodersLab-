import React from 'react';

class CatRow extends React.Component{

    render(){
        return(
            <tr>
                <td className='red-left'>{this.props.catName}</td>
                <td className='red-right'>{this.props.catAge}</td>
            </tr>
        )
    }
}

module.exports = CatRow;