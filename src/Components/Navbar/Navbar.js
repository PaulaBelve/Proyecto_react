import './Navbar.css'
import Logo from '../Logo/Logo'
import CardWidget from '../CardWidget/CardWidget'
import { Link } from 'react-router-dom'



const navBar = () => {

    return (

        <nav className="estilosNav">

            <div className="estilosMenu">
            <div className="estilosLogo">
            <Link to='/'>
            <Logo/>
            </Link>
            </div>
            <div >
                <Link className='botonesNav' to='/'>Inicio</Link>
            <Link className="botonesNav" to='/category/vegano'>Budines veganos</Link>
            <Link className="botonesNav" to='/category/sin tacc'>Tienda</Link>
           <Link className="botonesNav" to='/category/sin tacc'> Budines sin tacc</Link>
           </div>
            
            </div>

            <div className="estilosCardWidget">
             <CardWidget  /> </div>

          </nav>
 )
}

export default navBar