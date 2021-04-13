import React from 'react';
import './item.styles.scss';

const Item = ({title, price, description, image}) => (
    <div className="column">
        <div className="card content">
            <div className="overflow">
                <img className="productImage" src={image} />
            </div>
            <div className="card-body">
                <div className="card-text">{title}</div>
                
            </div>
            <div className="card-footer">
                <div className="card-text">
                    {price}€
                </div>
            </div>
            
            
        </div>
    </div>
    
);
export default Item;