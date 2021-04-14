import React from 'react';
import Item from '../item/item.component';
import './list-item.styles.scss';

const ListItem = props => (
    <div className="row">
        {
           props.products.map(({id, ...otherProps}) => (
                <Item key={id} {...otherProps} id={id} />
            ))
        }
    </div>
);
export default ListItem;