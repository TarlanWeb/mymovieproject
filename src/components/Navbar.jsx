import React from 'react'

const Navbar = ({FavVis,setFavVis}) => {
  const xCLick = (e) => {
      setFavVis((k)=>!k)
      
      console.log(FavVis)

  }
  return (
    <>
    
    <div className={"navbar"}>
      <p>Films</p>
      <p onClick={xCLick} >X</p>
    </div>
    </>
  )
  
}

export default Navbar;
