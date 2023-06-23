import './CardWrapper.css'
import Card from './Card'
import data from './data_tarjeta.json'


export default function CardWrapper () {
    return(
        <div className="wrapper">
            <h2>Destinos frecuentes</h2>

            <div className="grilla">
                {data.map(paises => (
                    <Card key={paises.id} producto = {paises} />
                ))}
            </div>
        </div>
    )   
}