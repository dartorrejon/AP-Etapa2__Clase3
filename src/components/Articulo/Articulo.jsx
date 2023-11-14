import './Articulo.css'
import React from 'react'

const Articulo = ({ nombre, descripcion, precio, SKU, cantidad }) => {
    // const {nombre, descripcion, precio, SKU, cantidad} = producto
    return <>
        <div className="Articulo">
            <p className='vendidos'>Nuevo | +1000 vendidos</p>
            <h1 className='nombreArticulo'>{nombre} <span><a href="#"><i class="fa-regular fa-heart"></i></a></span></h1>
            <p className='Descripcion'>{descripcion}</p>
            <p className='Puntuacion'>4 <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>(231)</p>
            <p className='PrecioViejo'>$699.999</p>
            <p className='Precio'>${precio} <span>6% OFF</span> </p>
            <p className='Sku'>SKU: {SKU}</p>
            <p className='Cantidad'>Cantidad: {cantidad}</p>
        </div>
    </>
}

export default Articulo