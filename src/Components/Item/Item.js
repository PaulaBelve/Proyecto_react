import './Item.css'
import {Link} from 'react-router-dom'

const Item = ({prod}) => {

    return (
<div className='contenedorCard'>
        <section className='cardBudines'>
        <div className="divBudines">

          <picture>
         <img className='imgBudines' src={prod.Imagen} alt='' />
          </picture>

          <div className="infoBudines"> 
        <h1 className='tituloBudines'>{prod.Budin}</h1>
        <h2 className='subtituloBudines'>{prod.Sabor}</h2>
        <p  className='precioBudines'>${prod.Precio}</p>
        <Link className="botonDetalle" to={`/detalle/${prod.id}`}>Ver detalle</Link>
        </div>
         </div>
         </section>
         </div>
    )
}

export default Item