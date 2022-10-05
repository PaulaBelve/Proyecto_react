import './Navbar.css'
import Logo from '../Logo/Logo'
import CardWidget from '../CardWidget/CardWidget'
import { Link } from 'react-router-dom'



const navBar = () => {

    return (

        <nav className="estilosNav">

            <div className="estilosMenu">
            <div className="estilosLogo">
            <Logo/>
            </div>
            <div >
            <Link className="botonesNav" to='/category/Muffins'>Muffins</Link>
            <Link className="botonesNav" to='/category/budines'>Budines</Link>
           <Link className="botonesNav" to='/category/tortas'> Tortas</Link>
           </div>
            
            </div>

            <div className="estilosCardWidget">
             <CardWidget  /> </div>

          </nav>
 )
}

export default navBar