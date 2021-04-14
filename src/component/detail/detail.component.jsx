import React from 'react';
import './detail.styles.scss';

const Detail = ({id, title, description, price, image}) => (
    <div className="row" key={id}>
        <div className="col-md-6">
            <img className="product-detail" alt="" src={image} />
        </div>
        <div className="col-md-6 productInfo">
            <h1>{title}</h1>
            <div className="card-text">
                {price}€
            </div>
            <div className="">{description}</div>
        </div>
    </div>    
);
export default Detail;