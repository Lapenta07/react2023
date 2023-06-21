import './App.css';
//importamos el componente, si esta abierto en otra pestaña VS autocompleta
import Title from './componentes/Title';

function App() {
  return (
    <div className="App">
      <Title nombre = "Nacho" />
      Hola Mundo
    </div>
  );
}

export default App;
