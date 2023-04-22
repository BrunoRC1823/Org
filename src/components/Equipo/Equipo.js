import { useState } from "react";
import Colaborador from "../Colaborador/Colaborador"
import "./Equipo.css"
import { ChromePicker } from 'react-color';
import { VscSymbolColor } from 'react-icons/vsc'
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    const { titulo, colorPrimario ,id} = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, favorito} = props
    const [color, setColor] = useState(colorPrimario);
    const [showColorPicker, setShowColorPicker] = useState(false);
    const handleColorPickerClick = () => setShowColorPicker(!showColorPicker);
    const handleCloseColorPicker = () => setShowColorPicker(false);
    const colorFondo = {
        backgroundColor: hexToRgba(colorPrimario,0.4)
    }
    const colorSubrayadoTitulo = {
        borderBottom: `4px solid ${colorPrimario}`
    }
    const listaColaboradores = () => {
        return colaboradores.map((colaborador, index) => {
            return <Colaborador datos={colaborador} key={index}
                colorPrimario={colorPrimario} eliminarColaborador={eliminarColaborador} 
                favorito={favorito}/>
        })
    }
    return <>
        {
            colaboradores.length > 0 &&
            <section className="equipo_section" style={colorFondo} >
                {showColorPicker && (
                    <div className="color-picker">
                        <ChromePicker color={color} 
                        onChange={(color) => {setColor(color.hex); actualizarColor(color.hex, id); }}
                        />
                    </div>
                )}
                <VscSymbolColor className="paleta" onClick={handleColorPickerClick} />
                <h3 style={colorSubrayadoTitulo}>{titulo}</h3>
                <div className="colaboradores_container" onClick={handleCloseColorPicker} >
                    {listaColaboradores()}
                </div>

            </section>
        }
    </>
}
export default Equipo