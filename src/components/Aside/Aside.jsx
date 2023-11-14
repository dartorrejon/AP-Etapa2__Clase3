import './Aside.css'
import React from 'react'
import Articulo from '../Articulo/Articulo'
import BotonCompra from '../BotonCompra/BotonCompra'
import BotonACarrito from '../BotonACarrito/BotonACarrito'

const Aside = ({ producto }) => {
    return (
        <>
            <aside className="Aside">

                <Articulo nombre={producto.nombre} descripcion={producto.descripcion} precio={producto.precio} SKU={producto.SKU} cantidad={producto.cantidad} />
                <div className='botones-container'>
                    <BotonCompra />
                    <BotonACarrito />
                </div>

            </aside>
        </>
    )

}
export default Aside
