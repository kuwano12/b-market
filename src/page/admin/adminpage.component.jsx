import React from 'react';
import './adminpage.styles.scss';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Button from 'react-bootstrap/Button';


class AdminPage extends React.Component {
    constructor(){
        super();
        this.state = {
            clientList: [],
            productData: [],
            prodID: ''
        }
    }

    componentDidMount(){
        const URL = 'http://localhost/blissim/api/?do=get_product_sales';
        axios.get(URL)
        .then(res => res.data)
        .then(
            (result) => {
                this.setState({productData: result});
                console.log(this.state.productData);
            }
        )
    }

    getClientList = event => {
        const URL = 'http://localhost/blissim/api/?do=get_client_by_idproduct';
            axios.get(URL, {
                params: {
                    prodID: this.state.prodID
                }
            })
            .then(res => res.data)
            .then(
                (result) => {
                    this.setState({clientList: result});
                    console.log(this.state.clientList);
                }
            )
    }

    handleChange = (e) => {
        this.setState({prodID: e.target.value});
    }

    render() {
        return (
            <div className="row">
                 <div className="">
                    <label htmlFor="product_id">Entrer un ID de produit : </label>
                    <input 
                        type="search" 
                        id="product_id" 
                        onChange={this.handleChange}
                        placeholder="Recherche des clients par produit" />
                    <Button variant="secondary" onClick={this.getClientList}>Rechercher</Button>
                    {
                        this.state.clientList.length ? (
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Nom client</th>
                                        <th>Nom client</th>
                                        <th>Prénom client</th>
                                    </tr> 
                                </thead>
                                <tbody>
                                {
                                    this.state.clientList.map(({name, firstname}) => (
                                    <tr key={name}>
                                        <td>{name}</td>
                                        <td>{firstname}</td>
                                    </tr>
                                    ))
                                }
                                    
                                </tbody>
                            </Table>
                        ) : (
                            null
                        )
                    }
                </div>
                <div className="">
                    <h1>Listes de articles achetés sur les 7 derniers jours</h1>
                    <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nom produit</th>
                                <th>Quantité</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.productData.map(({ id, ...dataProps}) => (
                                    <tr key={dataProps.prodName}>
                                        <td>{dataProps.prodName}</td>
                                        <td>{dataProps.count}</td>
                                    </tr>
                                ))
                            }
                            
                        </tbody>
                    </Table>
                    </div>
                </div>
            </div>
        )
    }
}
export default AdminPage;