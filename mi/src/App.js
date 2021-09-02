import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <header className="header"><h1>SPRINT PLANNING</h1></header>
          <h2 className="text-center">SPRINT NO. 1</h2>
          <div className="table-responsive">
          <table className="table">
          <thead>
            <tr className="table-active">
              <th>OBJETIVO</th>
              <th>PUNTOS DE HISTORIA</th>
              <th>DÍAS ESTIMADOS</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Habilitar todas las partes esenciales del temporizador para permitir que los usuarios puedan experimentar un proceso de trabajo completo basado en la técnica pomodoro, es decir, que puedan realizar sus tareas con los tiempos base de la técnica tanto en cada pomodoro como en los descansos correspondientes.</td>
              <td>32</td>
              <td>14</td>
            </tr>
          </tbody>
        </table>
      </div>
    <div className="table-responsive"> 
      <table className="table table-bordered">
        <thead className="table-active">
          <tr className="text-center">
            <th>ID</th>
            <th>ENUNCIADO DE LA HISTORIA</th>
            <th>PRIORIDAD</th>
            <th>PUNTOS DE HISTORIA</th>
            <th>DÍAS ESTIMADOS</th>
            <th>TAREAS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>RTTP01</td>
            <td>Yo como usuario, necesito un temporizador de 25 minutos con la finalidad de aplicar el principio de la técnica pomodoro.</td>
            <td className="text-center">1</td>
            <td className="text-center">9</td>
            <td className="text-center">5</td>
            <td ><ul>
              <li>Codificar el temporizador principal.</li>
              <li>Agregar botones de inicio, pausa y reinicio.</li>
              <li>Agregar un diseño básico que sea responsivo que sea aplicable a las secciones de descansos.</li>
              </ul></td>
          </tr>
          <tr>
            <td>RTTP02</td>
            <td>Yo como usuario, necesito una alarma con la finalidad de conocer el término del pomodoro.</td>
            <td className="text-center">2</td>
            <td className="text-center">3</td>
            <td className="text-center">2</td>
            <td><ul>
              <li>Buscar diferentes tonos de alarma.</li>
              <li>Junta para establecer el tono elegido.</li>
              <li>Agregar el tono al finalizar el pomodoro y posteriormente a los descansos</li>
              </ul></td>
          </tr>
          <tr>
            <td>RTTP03</td>
            <td>Yo como usuario, necesito poder establecer la cantidad de pomodoros con la finalidad de realizar tareas más largas</td>
            <td className="text-center">3</td>
            <td className="text-center">8</td>
            <td className="text-center">3</td>
            <td><ul>
              <li>Añadir una sección para cambiar la cantidad de pomodoros.</li>
              <li>Implementar una barra con un rango de opciones para la cantidad de pomodoros.</li>
              </ul></td>
          </tr>
          <tr>
            <td>RTTP04</td>
            <td>Yo como usuario, necesito una sección de descansos cortos con la finalidad de visualizar el tiempo disponible entre cada pomodoro.</td>
            <td className="text-center">4</td>
            <td className="text-center">6</td>
            <td className="text-center">2</td>
            <td><ul>
              <li>Codificar el temporizador de 5 minutos para los descansos cortos agregando la alarma cuando finalice.</li>
              <li>Añadir botones de inicio, pausa y reinicio.</li>
              <li>Establecer que se inicie automáticamente después de cada pomodoro.</li>
              <li>Añadir un fondo diferente para diferenciarlo.</li>
              </ul></td>
          </tr>
          <tr>
            <td>RTTP05</td>
            <td>Yo como usuario, necesito una sección de descansos largos para visualizar el tiempo transcurrido cuando sea necesario.</td>
            <td className="text-center">5</td>
            <td className="text-center">6</td>
            <td className="text-center">2</td>
            <td><ul>
              <li>Codificar el temporizador de 20 minutos para los descansos largos con el tono de alarma al finalizar.</li>
              <li>Añadir botones de inicio, pausa y reinicio.</li>
              <li>Codificar una condicional para que se inicie el descanso automáticamente cada 4 pomodoros según se requiera.</li>
              <li>Añadir un fondo diferente para diferenciarlo.</li>
              </ul></td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-center">SPRINT NO. 2</h2>
          <div className="table-responsive">
          <table className="table">
          <thead>
            <tr className="table-active">
              <th>OBJETIVO</th>
              <th>PUNTOS DE HISTORIA</th>
              <th>DÍAS ESTIMADOS</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Mejorar la aplicación agregando la función de agregar tareas y modificar los tiempos correspondientes a los temporizadores tanto de las tareas como de los descansos, teniendo así una experiencia más completa para el usuario.</td>
              <td>32</td>
              <td>14</td>
            </tr>
          </tbody>
        </table>
      </div>
    <div className="table-responsive"> 
      <table className="table table-bordered">
        <thead className="table-active">
          <tr className="text-center">
            <th>ID</th>
            <th>ENUNCIADO DE LA HISTORIA</th>
            <th>PRIORIDAD</th>
            <th>PUNTOS DE HISTORIA</th>
            <th>DÍAS ESTIMADOS</th>
            <th>TAREAS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>RTTP06</td>
            <td>Yo como usuario, necesito poder agregar tareas para organizarlas e ir realizándolas cuando lo requiera.</td>
            <td className="text-center">6</td>
            <td className="text-center">13</td>
            <td className="text-center">4</td>
            <td ><ul>
              <li>Codificar el ingreso del nombre de la tarea, así como la cantidad de pomodoros.</li>
              <li>Codificar una función para poder elegir la tarea a realizar.</li>
              <li>Añadir una opción para guardar la información proporcionada.</li>
              </ul></td>
          </tr>
          <tr>
            <td>RTTP07</td>
            <td>Yo como usuario, necesito poder editar las tareas para tener mejor control de mis actividades.</td>
            <td className="text-center">7</td>
            <td className="text-center">7</td>
            <td className="text-center">4</td>
            <td><ul>
              <li>Codificar opción para cambiar el nombre y número de pomodoros.</li>
              <li>Agregar opción para marcar como hecha una tarea.</li>
              <li>Agregar opción para eliminar una tarea.</li>
              </ul></td>
          </tr>
          <tr>
            <td>RTTP08</td>
            <td>Yo como usuario, necesito cambiar los tiempos de los temporizadores tanto de las tareas como de los descansos.</td>
            <td className="text-center">8</td>
            <td className="text-center">8</td>
            <td className="text-center">3</td>
            <td><ul>
              <li>Añadir una sección para cambiar la cantidad de pomodoros.</li>
              <li>Implementar una barra con un rango de opciones para la cantidad de pomodoros.</li>
              </ul></td>
          </tr>
          <tr>
            <td>RTTP09</td>
            <td>Yo como usuario, necesito que la aplicación sea usable y visualmente atractiva.</td>
            <td className="text-center">9</td>
            <td className="text-center">4</td>
            <td className="text-center">3</td>
            <td><ul>
              <li>Codificar el temporizador de 5 minutos para los descansos cortos agregando la alarma cuando finalice.</li>
              <li>Añadir botones de inicio, pausa y reinicio.</li>
              </ul></td>
          </tr>
        </tbody>
      </table>
    </div>


    </div>
  );
}

export default App;
