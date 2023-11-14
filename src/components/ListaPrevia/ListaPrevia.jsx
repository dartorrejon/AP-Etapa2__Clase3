import './ListaPrevia.css'
import React from 'react'

const ListaPrevia = () => {
    const ListaImagenes ={
        "previa1":"../../../public/preview/Preview1.webp",
        "previa2":"../../../public/preview/Preview2.webp",
        "previa3":"../../../public/preview/Preview3.webp",
        "previa4":"../../../public/preview/Preview4.webp",
        "previa5":"../../../public/preview/Preview5.webp",
        "previa6":"../../../public/preview/Preview6.webp"
        
    }

    return(
        <>
        <section className='listaPrevias'>
            {Object.keys(ListaImagenes).map((key) => 
            <a href='#'>
                <img src={ListaImagenes[key]} alt={key}/>
            </a>
            
            )}
        </section>
        </>
    )
}

export default ListaPrevia