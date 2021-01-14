import React from 'react';
import './post-list-item.scss';

const PostListItem = (props) => {
    let classNames = 'app-list-item d-flex justify-content-between';

    if(props.important) {
        classNames += ' important';
    }
    if(props.like) {
        classNames += ' like';
    }

    return(
        <div className={classNames}>
            <span
            className="app-list-item-label"
            onClick={props.onToggleLike}>
                {props.label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button
                type='button'
                className="btn-star btn-sm"
                onClick={props.onToggleimportant}>
                    <i className="fa fa-star"></i>
                </button>
                <button
                className="btn-trash btn-sm"
                onClick={props.onDelete}>
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </div>
    )
}

export default PostListItem;
