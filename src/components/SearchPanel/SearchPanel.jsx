import { useState } from 'react';
import './search-panel.scss'

const SearchPanel = (props) => {
    const [term, setTerm] = useState('');

    const onUpdateSearch = (event) => {
        const term = event.target.value;
        setTerm(term);
        props.onUpdateSearch(term);
    }

    return (
        <input
            className="form-control search-input"
            type="text"
            placeholder="Поиск по записям"
            onChange={onUpdateSearch}
            value = {term}
        />
    )
}

export default  SearchPanel;
