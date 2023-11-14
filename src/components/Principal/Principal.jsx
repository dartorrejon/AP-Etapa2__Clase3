import './Principal.css'
import React, {useState} from 'react'
import pcGamer from '../../../public/full/full1.webp'
import ListaPrevia from '../ListaPrevia/ListaPrevia'

const Principal = (props) => {
    const listaFull = Object.values(props.fullImages)

    const [source, setSource] = useState(pcGamer)
    
    const actualizarIndice = (indice) => {
        setSource(listaFull[indice])
    }

    return (
        <>
            <section className="Principal">
                <ListaPrevia listaPrevia ={props.listaPrevia} actualizarIndice={actualizarIndice}/>
                <div className='img-container'>
                    <img src={source} alt="Computadora Gamer" />
                </div>
            </section>
        </>

    )
}

export default Principal