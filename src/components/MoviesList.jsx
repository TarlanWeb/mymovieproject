import React from 'react';
import MoviesListItems from './MoviesListItem';
import './global.scss'
const MoviesList = ({ movies }) => {
    return (
        <div className='movies' >
            {movies?.length
                ? movies.map(m => <MoviesListItems movie={m} key={m.imdbID} />)
                : <h1>No movies.</h1>
            }
        </div>
    );
}

export default MoviesList;
