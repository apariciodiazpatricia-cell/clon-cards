import Testimony from './components/Testimony.jsx';
import './App.css';

function App() {
  return (
    <div className="mainContainer">
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      
      <Testimony
        name="Shawn Wang"
        country="Singapur"
        image="Shawn"
        role="Ingeniero de Software"
        company="Amazon"
        quote="Da miedo cambiar de carrera. Solo gané confianza en que podía programar al trabajar con cientos de horas de lecciones gratuitas en freeCodeCamp. En un año conseguí un trabajo con salario de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."
      />
      
      <Testimony
        name="Sarah Chima"
        country="Nigeria"
        image="Sarah"
        role="Ingeniera de Software"
        company="ChatDesk"
        quote="freeCodeCamp fue la puerta de entrada a mi carrera como desarrolladora de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de nivel principiante total a un nivel muy seguro. Fue todo lo que necesitaba para conseguir mi primer trabajo como desarrolladora en una empresa increíble."
      />
      
      <Testimony
        name="Emma Bostian"
        country="Suecia"
        image="Enma"
        role="Ingeniera de Software"
        company="Spotify"
        quote="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
      />
    </div>
  );
}

export default App;
