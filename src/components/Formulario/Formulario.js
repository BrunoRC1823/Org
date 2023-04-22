import Boton from "../Boton/Boton"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import {IoCreateOutline} from "react-icons/io5"
import {AiOutlineTeam} from "react-icons/ai"
import "./Formulario.css"
import Campo from "../Campo/Campo"

const Formulario = (props) => {
    const {campos,selects,valorCampoColab,valorSelectsColab,valorCampoEquipo,visible,registrarColaborador,registrarEquipos} = props
    const manejarEnvioColab = (e) => {
        e.preventDefault();
        const valoresEnviar = [...valorCampoColab, ...valorSelectsColab];
        registrarColaborador(valoresEnviar)
    }
    const manejarEnvioEquipo = (e) => {
        e.preventDefault();
        const objetoColor = valorCampoEquipo.find(obj => obj.color);
        const nuevoObjeto = { colorPrimario: objetoColor.color };
        const nuevaLista = valorCampoEquipo.map(obj => obj === objetoColor ? nuevoObjeto : obj);
        registrarEquipos(nuevaLista)
    }
    const listaCamposForm = (campos,tipo) => {
        const listaCampos = campos.filter(campo => campo.form === tipo).map((campo) =>{
            const {titulo,placeholder,required,type,valor,setValor} = campo;
            return <Campo titulo={titulo} placeholder={placeholder}
            required={required} type={type}
            valor ={valor} setValor={setValor}
            key={titulo}/>
        })
        return listaCampos;
    };
    const listaSelectsForm = (selects,tipo) => {
        const listaSelects = selects.filter(select => select.form === tipo).map((select,index) =>{
            const {titulo,placeholder,listaOpciones,valor,setValor} = select;
            return <ListaOpciones titulo={titulo} placeholder={placeholder} 
            listaOpciones = {listaOpciones}
            valor={valor} setValor={setValor} key={index} />
        })
        return listaSelects;
    };
    return <section className={`section_formulario ${visible}`} >
        <div className="container-formulario_colaboradores">
        <form className="formulario colaboradores" onSubmit={manejarEnvioColab}>
            <h2 className="formulario_titulo">Rellena el formulario para crear el colaborador.</h2>
            {listaCamposForm(campos,"colaborador")}
            {listaSelectsForm(selects,"colaborador")}
            <div className="container-boton">
            <Boton texto={IoCreateOutline()}/>
            </div>
        </form>
        </div>
        <div className="container-formulario_equipos">
        <form className="formulario equipos" onSubmit={manejarEnvioEquipo}>
            <h2 className="formulario_titulo">Rellena el formulario para crear el equipo.</h2>
            {listaCamposForm(campos,"equipo")}
            <div className="container-boton">
            <Boton texto={AiOutlineTeam()}/>
            </div>
        </form>
        </div>
    </section>
}
export default Formulario