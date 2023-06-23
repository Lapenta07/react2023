import './CardWrapper.css'
import Card from './Card'



export default function CardWrapper () {
    const data = {
        imagen: 'assets/colombia.jpg',
        titulo: 'Colombia',
        descripcion: 'Descripcion viaje',
        precio: 950000,
        envio: true,
    }

    return(
        <div className="wrapper">
            <h2>Destinos frecuentes</h2>

            <div className="grilla">
                <Card producto ={data} />
            </div>
        </div>
    )   
}