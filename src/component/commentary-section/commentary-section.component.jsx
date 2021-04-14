import React from 'react';
import './commentary-section.styles.scss';
import axios from 'axios';
import CommentaryList from '../commentary-list/commentary-list.component';
import CommentaryForm from '../commentary-form/commentary-form.component';



class CommentarySection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comment: props.comment,
            prodID: props.prodID,
            commentaries: [],

        };
    }
    componentDidMount(){
        const URL2 = 'http://localhost/blissim/api/?do=get_commentaries';
       axios.get(URL2, {
        params: {
            prodID: this.state.prodID
        }
       })
       .then(res => res.data)
       .then(
           (result) => {
               this.setState({commentaries: result});
           }
       )
    }
    handleSubmit = event => {
        event.preventDefault();
        
        const url = 'http://localhost/blissim/api/?do=add_commentary';

        axios.get(url, {
            params: {
                comment: this.state.comment,
                prodID: this.state.prodID
            }
        })
        .then(res => res.data)
        .then(
           (result) => {
            this.setState({comment: ''});
        }
       );
    }

    handleChange = event => {
        this.setState({comment: event.target.value});
    }
    render() {
        return (
            <div className="commentary-form ">
                <CommentaryForm 
                    handleSubmit={this.handleSubmit} 
                    handleChange={this.handleChange} 
                    comment={this.state.comment} /> 
                <div className="commentary-div ">
                <h1>Commentaires</h1>
                {
                    this.state.commentaries.map(({id, ...commentProps}) => (
                        <CommentaryList key={id} {...commentProps} />
                    ))
                }
                </div>          
            </div>
            
        )
    }
}
export default CommentarySection;