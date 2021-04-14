import React from 'react';
import './item-detail.styles.scss';
import axios from 'axios';
import Detail from '../detail/detail.component';
import CommentaryList from '../commentary-list/commentary-list.component';


class ItemDetail extends React.Component {
    componentDidMount(){
        const url = 'http://localhost/blissim/api.php';
        axios.get(url)
        .then(res => res.data)
        .then(
           (result) => {
            this.setState({items: JSON.parse(result)});
        }
       );
    }
    constructor() {
        super();
        this.state = {
            items: []
        }
    }
    render() {
        const test = window.location.pathname;
        const itemId = test.split("/");
        return(
            <div>
                {
                    this.state.items.filter((item) => item.id === parseInt(itemId[1]))
                    .map(({id, ...otherProps }) => (
                        <Detail key={id} {...otherProps} /> 
                        
                    )) 
                    
                }
                <CommentaryList />

            </div>
        );  
    }  
}
export default ItemDetail;