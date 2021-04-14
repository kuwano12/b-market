import React from 'react';
import Item from '../item/item.component';
import './list-item.styles.scss';

const ListItem = props => (
    // componentDidMount(){
    //     const url = 'http://localhost/blissim/api.php';
    //     axios.get(url)
    //     .then(res => res.data)
    //     .then(
    //        (result) => {
    //         this.setState({products: JSON.parse(result)});
    //     }
    //    );
    // }
    // constructor(){
    //     super();
    //     this.state = {
    //         products: []
    //     }
    // }


    <div className="row">
        {
           props.products.map(({id, ...otherProps}) => (
                <Item key={id} {...otherProps} id={id} />
            ))
        }
    </div>


)
export default ListItem;