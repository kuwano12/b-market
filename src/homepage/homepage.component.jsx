import React, { Component } from 'react';
import './homepage.styles.scss';
import ListItem from '../component/list-item/list-item.component';
import {SearchBox} from '../component/search-box/search-box.component';
import axios from 'axios';


class Homepage extends Component {

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
            products: [],
            searchField: ''
        }
    }
    handleChange = (e) => { 
        this.setState({ searchField: e.target.value });
    }
    render() {
        const { products, searchField } = this.state;
        const filteredList = products.filter(item => 
            item.title.toLowerCase().includes(searchField.toLowerCase()));
            return(
            <div>
                <SearchBox 
                placeholder="Rechercher un produit" 
                handleChange = {this.handleChange}/>
                <ListItem products = {filteredList}/>
            </div>
            )
        
    }
    
};

export default Homepage;