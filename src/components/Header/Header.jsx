import './Header.css'
import React from 'react'

const Header = () => {

    const nombre = "Rodrigo"
    return (
        //jsx -> js vanilla && xml
        <>
            <header>
                <h2>Bienvenido {nombre}</h2>
                <nav>
                    <a href="">Inicio</a>
                    <a href="">About</a>
                    <a href="">Contacto</a>
                </nav>
            </header>
        </>
    )
}

export default Header