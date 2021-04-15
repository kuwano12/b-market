import React from 'react';
import './commentary-list.styles.scss';
import Button from 'react-bootstrap/Button'

class CommentaryList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            commentValue: '',
        }
    }
    handleChange = event => {
        this.setState({ commentValue: event.target.value });
    }

    render() {
        return (
            <div className="commentary-section">
                <div className="">
                    <div>{this.props.date}</div>
                    {
                        this.props.flag ? (
                        <textarea 
                            defaultValue={this.props.comment}
                            onChange={this.handleChange}>
                        </textarea>
                        ) : (
                        <div>
                            {this.props.comment}
                        </div>
                        )
                    }
                </div>
                <Button variant="danger" onClick={() => this.props.deleteComment(this.props.commentID)}> X </Button>
                <Button variant="warning" onClick={() => this.props.editComment() }> Edit </Button>
                {
                    this.props.flag ? (
                        <Button variant="success" onClick={() => this.props.editCommentConf(this.state.commentValue, this.props.commentID)}> V </Button>
                    ) : (
                        null
                    )
                }
            </div>
        );  
    }
}
export default CommentaryList;