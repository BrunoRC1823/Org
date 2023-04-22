import "./Footer.css"
const Footer = () => {
    return <footer className="footer">
        <div className="figuras-geo_footer">
        <img src="img/Polygon1.png" alt="Triangulo"/>
        <img src="img/Polygon2.png" alt="Triangulo diagonal"/>
        <img src="/img/Ellipse1.png" alt="Circulo"/>
        <img src="/img/Ellipse2.png" alt="Circulo medio"/>
        </div>
        <div className="footer_container">
            <div className="redes">
                <a href="https://www.aluracursos.com/">
                    <img src="/img/facebook.png" alt="facebook" />
                </a>
                <a href="https://www.aluracursos.com/">
                    <img src="img/twitter.png" alt="twitter" />
                </a>
                <a href="https://www.aluracursos.com/">
                    <img src="/img/instagram.png" alt="instagram" />
                </a>
            </div>
            <img className="img-logo_footer" src="/img/Logo_blanco.png" alt="imagen logo footer" />
            <strong>Desarrollado por Bruno Rios</strong>
        </div>

    </footer>
}
export default Footer