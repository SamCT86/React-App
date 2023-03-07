import { useState } from 'react';
import { useHistory } from 'react-router-dom';

// Style
import './SearchBar.css';

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        // redirect to search page and add a query string
        history.push(`/search?q=${searchTerm}`);
    }

    return (
        <div className='searchbar'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search:</label>
                <input
                    type="text"
                    id="search"
                    onChange={(e) => { setSearchTerm(e.target.value) }}
                    required />
            </form>
        </div>
    )
}
