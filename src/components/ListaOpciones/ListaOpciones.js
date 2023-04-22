import "./ListaOpciones.css"

const ListaOpciones = (props) => {
    const {titulo,placeholder,listaOpciones,valor,setValor} = props;
    const manejarCambio = (e) => {
        setValor(e.target.value)
    }
    const listaOpcionesOp = () => listaOpciones.map((opcion, index) => <option key={index} value={opcion}>{opcion}</option>)
    return <div className="lista-opciones">
        <label>{titulo}</label>
        <select value={valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" >{placeholder}</option>
            {listaOpcionesOp()}
        </select>
    </div>
}
export default ListaOpciones