import React from 'react';
import './item.styles.scss';
import { withRouter } from 'react-router';

const Item = ({id, title, price, image, history, match}) => (
    <div className="column" onClick={() => history.push(`${match.url}${id}`)}>
        <div className="card content">    
            <div className="overflow">
                <img className="productImage" alt="" src={image} />
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
export default withRouter(Item);