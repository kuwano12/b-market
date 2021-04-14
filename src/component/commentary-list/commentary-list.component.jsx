import React from 'react';
import './commentary-list.styles.scss';

const CommentaryList = (props) => (
    <div className="commentary-section">
        <div className="">
            <div>{props.date}</div>
                <div>
                    {props.comment}
                </div>
                
        </div>
    </div>
    
);
export default CommentaryList;