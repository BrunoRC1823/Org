import './MiOrg.css'
const MiOrg = (props) => {
    const{miOrgRef,cambiarMostrar} = props
    return (
        <section className="org_section" ref={miOrgRef}>
            <h3 className="titulo-org_section">Mi Organización</h3>
            <img src="/img/add.png" alt="Add" onClick={cambiarMostrar} />
        </section>
    );
};
export default MiOrg