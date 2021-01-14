import React, { useState } from 'react';
import  './post-add-form.scss';

const PostAddForm = (props) => {
    const [text, setText] = useState('');

    const onValueChange = (event) => {
        setText(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        props.onAdd(text);
        setText('');
    }

    return(
        <form
            className="bottom-panel d-flex"
            onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="О чем вы думаете сейчас?"
                className="form-control new-post-label"
                onChange={onValueChange}
                value = {text}
            />
            <button
                type="submit"
                className="btn btn-outline-secondary"
            >
                Добавить
            </button>
        </form>
    )
}

export default PostAddForm;
