import React, { useState }  from 'react';
import Movies from '../components/Movies'
import Favorites from '../components/Favorites';
import Navbar from '../components/Navbar';
const MainPages = () => {
    const [Fav, setFav] = useState(false);

    return (
        <div className='container'>
            <Navbar FavVis={Fav} setFavVis={setFav} />
            <div className="footer"><Movies />
            <Favorites FavViss={Fav}/></div>
        </div>
    );
}

export default MainPages;
