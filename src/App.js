import './App.css';
//importamos el componente, si esta abierto en otra pestaña VS autocompleta
import Title from './componentes/Title';
import Card from './componentes/Card';

function App() {
  return (
    <div className="App">
      <Title nombre = "Nacho" />
      <div className='Cards-display'> 
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
