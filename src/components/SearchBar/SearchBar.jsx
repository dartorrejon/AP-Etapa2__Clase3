import './SearchBar.css'
import React from 'react'

const SearchBar = () => {
    return(
        <>
            <div className="Search-container">
                <input type="text" placeholder='Buscar productos, marcas y mas...'/>
                <span><a href="#"><i className="fa-solid fa-magnifying-glass"></i></a></span>
            </div>
            
        </>
    )
}

export default SearchBar