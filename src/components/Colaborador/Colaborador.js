import { useState } from 'react';
import './Colaborador.css'
import { MdClose } from 'react-icons/md'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
const Colaborador = (props) => {
    const { nombre, puesto, foto, id, fav} = props.datos
    const { colorPrimario, eliminarColaborador, favorito} = props
    const [hover, setHover] = useState(false);
    const colorEncabezado = {
        backgroundColor: colorPrimario,
    }
    const colorSombra = {
        boxShadow: `0px 5px 25px ${colorPrimario}`
    }
    const colorSombraNormal = {
        boxShadow: `${colorPrimario} 0px 0px 5px -2px, rgb(0, 0, 0,0.3) 0px 3px 3px -3px`
    }
    const eliminar = () => {
        eliminarColaborador(id)
    }
    const esFavorito = () =>{
        favorito(id)
    }
    return <div className='colaborador_card'
        style={hover ? colorSombra : colorSombraNormal}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
        <MdClose className='eliminar' onClick={eliminar} />
        <div className='colaborador_encabezado'
            style={colorEncabezado}>
            <img src={foto} alt={nombre} />
        </div>
        <div className='colaborador_Info'>
            <h4>{nombre}</h4>
            <h4>{puesto}</h4>
            <div>
                {fav ? <AiFillHeart color="red" onClick={esFavorito} /> : <AiOutlineHeart onClick={esFavorito} />}
            </div>
        </div>
    </div>
}

export default Colaborador