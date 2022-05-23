import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom';
import { api } from '../api';
import { removeFav, selectFavorites , selectSavedId, saveFavs } from '../features/favorites/favoriteSlice';


const Favorites = ({FavViss}) => {
    const [title, setTitle]= useState('');
    const favorites = useSelector(selectFavorites);
    const savedId = useSelector(selectSavedId);
    const dispatch = useDispatch();

    const handleSave = async () => {
        const response = await api.saveFavs({title, movies:favorites});
        console.log(response);
        dispatch(saveFavs(response.id));     
    }
    console.log(savedId)
    
    return (
        <div className={FavViss?"favorites posAb":"favorites"}  >
            <input className='favorites_name' placeholder='Title' value={title} onChange={e=>setTitle(e.target.value)}/>
            {favorites.map(f => {

                return (
                    <div key={f.imdbID} className='fav-foot'>
                        <p>{f.Title}-{f.Year}</p>
                        <button className='remove-movie' disabled={savedId} onClick={e => dispatch(removeFav(f.imdbID))}>X</button>
                    </div>
                )
            }
            )}
            {!savedId ? <button className='favorites-save' disabled={!title} onClick={handleSave}>Save</button> : <Link to={`/favorite/${savedId}`}>Go to Saved</Link>}

        </div>
    );
}

export default Favorites;
