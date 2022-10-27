import '../Inicio/Inicio.css'
import '../ItemListContainer/ItemListContainer'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import { Link } from 'react-router-dom'

const Inicio = () => {

    return (

        <div>

<p id="parrafoProp"><i>"...Una comida es una ceremonia mágica gracias a la cual la nutrición
    debe transformarse en salud, en fuerza, en amor y en luz"</i></p>

<h1 className='proposito'><b>PROPÓSITO</b></h1>

<div className='parrafo2'>

  <p>Delfos nace con la idea de transformar las recetas habituales, para brindar productos
    naturales que aporten los nutrientes necesarios hacia una alimentación mas consciente y equilibrada. Creemos
    en que una alimentación mas consciente y equilibrada ayudan a llevar a cabo una vida mas plena y vital, ya que
    de la forma en la que nos alimentamos afecta tanto en nuestro estado fisico como emocional. </p>

</div>

<Link className='enlaceTienda' to='/category/budines'><ItemListContainer saludo={'NUESTROS PRODUCTOS'}/></Link>

</div>




)
}

export default Inicio