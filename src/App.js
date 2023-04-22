import { useRef, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg/MiOrg';
import { animateScroll } from "react-scroll";
import Equipo from './components/Equipo/Equipo';
import Footer from './components/Footer/Footer';
import { v4 as uuid } from 'uuid';
function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true);
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipos: "Programación",
    foto: "https://github.com/BrunoRC1823.png",
    nombre: "Bruno Daniel Rios Cosser",
    puesto: "Programador",
    fav: true
  },
  {
    id: uuid(),
    equipos: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipos: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuid(),
    equipos: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipos: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipos: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: true
  }
  ]);
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])
  //useStates para los campos del formulario de colaboradores
  const [nombre, setNombre] = useState("")
  const [puesto, setPuesto] = useState("")
  const [foto, setFoto] = useState("")
  //useStates para los campos del formulario de equipos
  const [titulo, setTitulo] = useState("")
  const [color, setColor] = useState("")
  //useStates para las listas del formulario de colaboradores
  const [equipo, setEquipo] = useState("")
  const miOrgRef = useRef(null);

  const listaValores = (valores, tipo) => {
    const listaCampos = valores.filter(valor => valor.form === tipo).map((valor) => ({ [valor.titulo.toLowerCase()]: valor.valor }))
    return listaCampos;
  };
  let listaEquipos = () => equipos.map((equipo) => equipo.titulo)

  const campos = [
    {
      form: "colaborador",
      titulo: "Nombre",
      placeholder: "Ingrese nombre",
      required: true,
      type: "text",
      valor: nombre,
      setValor: setNombre
    },
    {
      form: "colaborador",
      titulo: "Puesto",
      placeholder: "Ingrese puesto",
      required: true,
      type: "text",
      valor: puesto,
      setValor: setPuesto
    },
    {
      form: "colaborador",
      titulo: "Foto",
      placeholder: "Ingrese enlace de la foto",
      required: true,
      type: "text",
      valor: foto,
      setValor: setFoto
    },
    {
      form: "equipo",
      titulo: "Titulo",
      placeholder: "Ingrese el titulo del equipo",
      required: true,
      type: "text",
      valor: titulo,
      setValor: setTitulo
    },
    {
      form: "equipo",
      titulo: "Color",
      placeholder: "Ingrese el color en Hex",
      required: true,
      type: "color",
      valor: color,
      setValor: setColor
    }
  ]
  const selects = [
    {
      form: "colaborador",
      titulo: "Equipos",
      placeholder: "Seleccione un equipo...",
      listaOpciones: listaEquipos(),
      valor: equipo,
      setValor: setEquipo
    }
  ]

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
    if (!mostrarFormulario && miOrgRef.current) {
      setTimeout(() => {
        animateScroll.scrollTo((miOrgRef.current.offsetTop), {
          duration: 500,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      }, 30);
    }
  };
  const registrarColaborador = (colaborador) => {
    // combinar la lista de arreglos en uno solo
    const colaboradoresUnicos = colaborador.reduce((acumulador, objeto) => {
      acumulador = { ...acumulador, ...objeto };
      return acumulador;
    });
    actualizarColaboradores([...colaboradores, colaboradoresUnicos])
  }
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter(colaborador => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }
  const favorito = (id) =>{
    const colaboradorFav = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador
    })
    actualizarColaboradores(colaboradorFav)
  }
  const registrarEquipos = (nuevoEquipo) => {
    const equiposUnicos = nuevoEquipo.reduce((acumulador, objeto) => {
      acumulador = { ...acumulador, ...objeto, id: uuid() };
      return acumulador;
    });
    actualizarEquipos([...equipos, equiposUnicos])
  }

  let elementosEquipos = () => {
    return equipos.map((equipo) => {
      let colaboradoresFiltrados = colaboradores.filter(colaborador => colaborador.equipos === equipo.titulo)
      return <Equipo datos={equipo} key={equipo.titulo}
        colaboradores={colaboradoresFiltrados} eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor} favorito={favorito}/>
    })
  }

  return (
    <div className="App">
      <Header />
      {mostrarFormulario ? (
        <Formulario campos={campos} valorCampoColab={listaValores(campos, "colaborador")}
          selects={selects} valorSelectsColab={listaValores(selects, "colaborador")}
          valorCampoEquipo={listaValores(campos, "equipo")}
          registrarColaborador={registrarColaborador}
          registrarEquipos={registrarEquipos}
          visible="blur-in-contract" />
      ) : (
        <Formulario campos={campos} valorCampoColab={listaValores(campos, "colaborador")}
          selects={selects} valorSelectsColab={listaValores(selects, "colaborador")}
          registrarColaborador={registrarColaborador}
          registrarEquipos={registrarEquipos}
          visible="blur-out-contract" />
      )}
      <MiOrg cambiarMostrar={cambiarMostrar} miOrgRef={miOrgRef} />
      {elementosEquipos()}
      <Footer />
    </div>
  );
}


export default App;
