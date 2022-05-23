import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFav } from '../features/favorites/favoriteSlice';
import { selectSavedId } from '../features/favorites/favoriteSlice';
import './global.scss'
const MoviesListItems = ({ movie }) => {
    const dispatch = useDispatch();
    const savedId = useSelector(selectSavedId);
    const handleClick=()=>{
        dispatch(addFav(movie));
    }
    return (
        <div className='listitem' >
            <img src={movie.Poster} alt={movie.title} height='200'/>
             <div className='iteminfo'> 
             <p> {movie.Title} - ({movie.Year})</p>
             <button onClick={handleClick} disabled={savedId}>Add to favorites. ⭐</button>
             </div>
        </div>
    );
}

export default MoviesListItems;
