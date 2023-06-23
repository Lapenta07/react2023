import './App.css';
//importamos el componente, si esta abierto en otra pestaña VS autocompleta
import Title from './componentes/Title';
import CardWrapper from './componentes/CardWrapper';

function App() {
  return (
    <div className="App">
        <Title nombre = "Nacho" />
        <CardWrapper />
    </div>
  );
}

export default App;
