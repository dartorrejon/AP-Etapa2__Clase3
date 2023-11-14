import './Menu.css'
import React from 'react'

const Menu = () => {
    return (
        <>
            <nav className='Menu'>
                <a href="/">Inicio</a>
                <a href="/">About</a>
                <a href="/">Contacto</a>

                <div className='Icons'>
                <a href="/"><i className="fa-regular fa-bell"></i></a>
                <a href='/'><i className="fa-solid fa-cart-shopping"></i></a>
                </div>
            </nav>
        </>
    )
}

export default Menu