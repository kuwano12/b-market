import React from 'react';
import './item-detail.styles.scss';
import axios from 'axios';
import Detail from '../detail/detail.component';
import CommentarySection from '../commentary-section/commentary-section.component';

class ItemDetail extends React.Component {
    componentDidMount(){
        const URL = 'http://localhost/backend/api/?do=get_fake_data';
        axios.get(URL)
        .then(res => res.data)
        .then(
           (result) => {
            this.setState({items: JSON.parse(result)});
        }
       )
    }

    constructor() {
        super();
        const test = window.location.pathname;
        const itemId = test.split("/");
        this.state = {
            items: [],
            prodID: parseInt(itemId[1]),
        }
    }

    render() {
        return(
            <div>
                {
                    this.state.items.filter((item) => item.id === this.state.prodID)
                    .map(({id, ...otherProps }) => (
                        <Detail key={id} {...otherProps} />                 
                    ))             
                }
                <CommentarySection prodID={this.state.prodID} />   
            </div>
        );  
    }  
}
export default ItemDetail;

