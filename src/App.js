import logo from './logo.svg';
import './Activos/Css/App.css'; //De acá se importa el css
import MiComponente from './Componentes/MiComponente.js';

function MostrarCurso(nombre_curso, semestre) {
  let mostrar = (
    <div>
      <h2>Curso: {nombre_curso}</h2>
      <h2>Semestre: {semestre}</h2>
    </div>
  );
  return mostrar;
}

function App() { //Función principal que contiene lo que se muestra en pantalla
  let nombre_alumno = 'Camila Díaz'
  let nombre_curso = 'Front End';
  let most_al = <h2>Nombre: {nombre_alumno}</h2>;
  let semestre = 4;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Aprendiendo React
        </p>
        {most_al} {/* para llamar una variable se escribe entre llaves */}
        {MostrarCurso(nombre_curso, semestre)}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <section className='compone'> {/* Sección donde se llama a la clase de MiComponente */}
          <MiComponente />
        </section>
      </header>
    </div>
  );
}

export default App;
