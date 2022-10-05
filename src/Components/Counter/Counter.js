import './Counter.css'
import {useState} from 'react'


const Contador = () => {
const inicio = 0
const [cuenta, setCount] = useState(inicio)

const restar = () => {

    setCount (cuenta - 1) 
}

const sumar = () => {

   setCount (cuenta + 1 ) 

}

return (
    <div className='contador'>
<h1 className='numero'>{cuenta}</h1>
<button className='btnContador' onClick={restar}>-</button>
<button className='btnContador' onClick={sumar}>+</button>

    </div>
)
}

export default Contador