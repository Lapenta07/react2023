import './App.css';
//importamos el componente, si esta abierto en otra pestaña VS autocompleta
import Title from './componentes/Title';
import CardWrapper from './componentes/CardWrapper';
import Contador from './componentes/Contador';

function App() {
  return (
    <div className="App">
        <Title nombre = "Nacho" />
        <Contador />
        <CardWrapper />
    </div>
  );
}

export default App;
