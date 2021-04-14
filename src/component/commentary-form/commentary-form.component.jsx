import React from 'react';
import Button from 'react-bootstrap/Button';
import './commentary-form.styles.scss';

const CommentaryForm = ({handleSubmit, handleChange, comment}) => (

    <div className="commentary-form ">
        <form onSubmit={handleSubmit}>
            <textarea 
                value={comment}
                onChange={handleChange}
                className="comm-area col-md-12" 
                placeholder="Ajouter un commentaire">
            </textarea>
            <Button type="submit" variant="primary">Publier</Button>
        </form>  
    </div>
            

)
export default CommentaryForm;