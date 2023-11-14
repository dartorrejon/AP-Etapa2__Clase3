import './ListaPrevia.css'
import React,{useState} from 'react'

const ListaPrevia = ({ listaPrevia, actualizarIndice }) => {
    
    const [indiceActual, setIndiceActual] = useState(0);

    const handleMouseOver = (index) => {
        setIndiceActual(index);
        actualizarIndice(index);
    }
   
    const valores = Object.values(listaPrevia);
    
    return (
        <>
            <section className='listaPrevias'>
                {
                    valores.map((previa, index) => {
                        {console.log(previa)}
                        return (
                            
                            <a href="#" className='previa' key={index} onMouseOver={() => handleMouseOver(index)}>
                                <img src={previa} alt="previa" />
                            </a>
                        )
                    })
                }
              
            </section>
        </>
    )
}

export default ListaPrevia