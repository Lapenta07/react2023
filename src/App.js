import './App.css';
//importamos el componente, si esta abierto en otra pestaña VS autocompleta
import Title from './componentes/Title';
import CardWrapper from './componentes/CardWrapper';

function App() {
  const numeros = [45, 76, 23, 677, 3, 78];

  return (
    <div className="App">
        <Title nombre = "Nacho" />
        <CardWrapper />

        {numeros.map(numero =>{ 
          const precio = numero * 0.9;

          return (
            <p>El precio con 10% off es: {precio} </p>
          )
          })}

    </div>
  );
}

export default App;
