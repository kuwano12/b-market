import React from 'react';
import axios from 'axios';
import Item from '../item/item.component';
import './list-item.styles.scss';

class ListItem extends React.Component {
    componentDidMount(){
        const url = 'http://localhost/blissim/api.php';
        axios.get(url)
        .then(res => res.data)
        .then(
           (result) => {
            this.setState({products: JSON.parse(result)});
        }
       );
    }
    constructor(){
        super();
        this.state = {
            products: []
        }
    }
    render() {
        return(
            <div className="row">
                {
                    this.state.products.map(({id, ...otherProps}) => (
                        <Item key={id} {...otherProps} id={id} />
                    ))
                }
            </div>
        );
    }
}
export default ListItem;