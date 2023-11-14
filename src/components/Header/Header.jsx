import './Header.css'
import React from 'react'
import logo from '../../../public/mercado-libre.png'
import Menu from '../Menu/Menu'
import SearchBar from '../SearchBar/SearchBar'




const Header = (props) => {

    const nombre = "Rodrigo"
    return (
        
        <>

            <header className='Header'>
                <img src={logo} alt="logo" />
                <SearchBar />
                <Menu />
            </header>
        </>
    )
}

export default Header