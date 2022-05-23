import React from 'react';
import './global.scss'

const SearchBar = ({ onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const searchString = formData.get('search');
        // form.reset();
        onSubmit(searchString);

    }
    return (
        <div className="searchDiv">
            <form onSubmit={handleSubmit}>
                <p>Search movie by title:</p>
                <div>
                    <input name="search" type="search" placeholder="Harry Potter, Godfather.." required />
                    <button type='submit'>Search</button>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;
