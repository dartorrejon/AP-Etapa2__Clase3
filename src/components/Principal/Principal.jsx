import './Principal.css'
import React from 'react'
import pcGamer from '../../../public/full/pcGamer.webp'
import ListaPrevia from '../ListaPrevia/ListaPrevia'
const Principal = () => {
    return (
        <>
            <section className="Principal">
                <ListaPrevia />
                <div className='img-container'>
                    <img src={pcGamer} alt="Computadora Gamer" />
                </div>
            </section>
        </>

    )
}

export default Principal