import './Navbar.css'
import Logo from '../Logo/Logo'
import CardWidget from '../CardWidget/CardWidget'



const navBar = () => {

    return (

        <nav className="estilosNav">

            <div className="estilosMenu">
            <div className="estilosLogo">
            <Logo/>
            </div>
            
            <li><a href="">Inicio</a></li>
            <li><a href="">Tienda</a></li>
            <li><a href="">Contacto</a></li>
            
            </div>

            <div className="estilosCardWidget">
             <CardWidget  /> </div>

          </nav>
 )
}

export default navBar