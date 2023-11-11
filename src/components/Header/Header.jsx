import './Header.css'
import React from 'react'
import logo from '../../../public/mercado-libre.png'
import Menu from '../Menu/Menu'




const Header = () => {

    
    const nombre = "Rodrigo"
    return (
        //jsx -> js vanilla && xml
        <>
            <header className='Header'>
                <img src={logo} alt="logo" />
                <Menu />
            </header>
        </>
    )
}

export default Header