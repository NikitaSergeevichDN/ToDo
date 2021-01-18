import  React from 'react';
import './post-status-filter.scss';


const PostStatusFilter = (props) => {
    const buttons = [
        {name: 'all', label: 'Все'},
        {name: 'like', label: 'Понравилось'}
    ];

    return (
        <div className="btn-group">
            {buttons.map(({name, label}) => {
                const {filter, onFilterSelect} = props;
                const active = filter === name;
                const className = active ? 'btn-info' : 'btn-outline-secondary';

                return (
                    <button
                        type='button'
                        className={`btn ${className}`}
                        key={name}
                        onClick={() => onFilterSelect(name)}
                    >
                        {label}
                    </button>
                )
            })}
        </div>
    )
}

export default PostStatusFilter;
