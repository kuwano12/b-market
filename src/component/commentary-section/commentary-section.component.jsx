import React from 'react';
import './commentary-section.styles.scss';
import axios from 'axios';
import CommentaryList from '../commentary-list/commentary-list.component';
import CommentaryForm from '../commentary-form/commentary-form.component';


class CommentarySection extends React.Component {
    _isMounted = false;
    constructor(props){
        super(props);
        this.state = {
            comment: props.comment,
            prodID: props.prodID,
            commentaries: [],
            flag: false

        };
    }
    componentDidMount(){
        this._isMounted = true;
        this.get_comments();
    }

    get_comments(){
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

    componentWillUnmount() {
        this.setState = (state,callback)=>{
            return;
        };
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
            this.get_comments()
            this._isMounted = true;
        }
       );
    }

    handleChange = event => {
        this.setState({comment: event.target.value});
    }

    deleteComment = (id) => {
        const URL = 'http://localhost/blissim/api/?do=delete_commentaries';
        axios.get(URL, {
            params: {
                commentID: id,
            }
        })
        .then(res => res.data)
        .then(
           (result) => {
            const com = this.state.commentaries.filter((comment) => comment.commentID !== id);
            this.setState({commentaries: com});     
        }
       );
    }

    editComment = () => {
        this.setState({flag: !this.state.flag})
    } 

    editCommentConf = (value, id) => {
        const URL = 'http://localhost/blissim/api/?do=edit_commentaries';
        axios.get(URL,{
            params: {
                commentID: id,
                comment: value
            }
            })
            .then(res => res.data)
            .then(
               (result) => {
                this.get_comments();
                this.setState({flag: false});
            }
           );
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
                    this.state.commentaries.map(({commentID, ...commentProps}) => (
                        <CommentaryList 
                            key={commentID} 
                            {...commentProps} 
                            commentID={commentID}
                            flag={this.state.flag}
                            editComment={this.editComment}
                            deleteComment={this.deleteComment}
                            editCommentConf={this.editCommentConf}
                         />
                    ))
                }
                </div>          
            </div>
        );
    }
}
export default CommentarySection;