import React, { useState } from 'react';

// class Categories extends React.Component {
    
//     state = {
//         activeItem: 0,
//     }

//     onSelectItem = index => {
//         this.setState({
//             activeItem: index,
//         })
//     }

//     render(){
//         const {items} = this.props;
//         return (
//             <div className='categories'>
//                 <ul>
//                     {items.map((name, index) => (<li className={this.state.activeItem === index ? 'active' : ''}
//                     onClick={() => this.onSelectItem(index)}
//                     key = {name}>{name}</li>))}
//                 </ul>
//             </div>
//       )
//     }
// }

const Categories = React.memo(function Categories({ activeCategory, items, onClickItem}) {

    const onSelectItem = (index) => {
        onClickItem(index)
    }

    return (
        <div className='categories'>
            <ul>
                <li
                    className={activeCategory === null ? 'active' : ''}
                    onClick={() => onSelectItem(null)}>
                    Все
                </li>
                {items.map((name, index) => (<li className={activeCategory === index ? 'active' : ''}
                onClick={() => onSelectItem(index)}
                key = {name}>{name}</li>))}
            </ul>
        </div>
  )
}
)
export default Categories;