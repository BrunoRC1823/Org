import "./Campo.css"

const Campo = (props) => {
    const {titulo,placeholder,required,type,valor,setValor} = props;
    const placeholderMod = `${placeholder}...`
    const manejarCambio = (e) => {
        setValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{titulo}</label>
        <input
            placeholder={placeholderMod}
            required={required}
            type={type}
            value={valor}
            onChange={manejarCambio} />
    </div>
}
export default Campo