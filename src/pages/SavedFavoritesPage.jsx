import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { api } from '../api';

const SavedFavoritesPage = () => {
    const params = useParams();
    const [favs, setFavs] = useState({ title: 'smth', movies: [] });

    useEffect(() => {
        const fetchData = async () => {
            const id = params.id;
            const response = await api.getFavs(id);
            console.log(response);
            setFavs(response);
        }
        fetchData();
    }, []);
    return (
        <>
            <h1>{favs.title}</h1>
            {favs.movies.map(f => (

                <div key={f.imdbID}>
                    <a href={`https://www.imdb.com/title/${f.imdbID}`} rel="noreferrer" target='_blank'>
                        <p>{f.Title}- {f.Year}</p>
                    </a>
                </div>
            ))}
        </>
    );
}

export default SavedFavoritesPage;


