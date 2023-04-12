import "./Header.css"
function Header(){
    return <header className="header">
        <img className="logo_header" src="/img/Logo_blanco.png" alt="imagen_logo_blanco"/>
        <div className="text-container_header">
            <p>Personas y equipos</p>
            <p>organizados en el mismo lugar</p>
        </div>
        <img className="img_header" src='/img/Header.jpg' alt='Imagen_Header'/>
    </header>
}    
export default Header