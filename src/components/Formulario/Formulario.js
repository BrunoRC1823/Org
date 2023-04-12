import CampoTexto from "../CampoTexto/CampoTexto"
import "./Formulario.css"

const Formulario = () =>{
    return <section className="section_formulario">
        <form className="formulario">
            <h2 className="formulario_titulo">Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto/>
        </form>
        </section>
}
export default Formulario