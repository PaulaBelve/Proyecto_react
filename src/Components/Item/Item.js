import './Item.css'



import {Link} from 'react-router-dom'

const Item = ({prod}) => {

    return (

        <section className='cardBudines'>
    
        <div className="divBudines">

          <picture>
         <img src={prod.imagen} alt='' />
          </picture>

          <div className="infoBudines"> 
        <h1 className='tituloBudines'>{prod.budin}</h1>
        <h2 className='subtituloBudines'>{prod.sabor}</h2>
        <p  className='precioBudines'>${prod.precio}</p>
        <Link className="botonDetalle" to={`/detalle/${prod.id}`}>Ver detalle</Link>
        </div>
         </div>
         </section>
    )
}

export default Item