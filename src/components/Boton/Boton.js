import "./Boton.css"

const Boton = (props) => {
    const {texto} = props
    return <button className="boton">{texto}</button>
}

export default Boton