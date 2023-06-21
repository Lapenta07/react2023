import './Title.css'

export default function Title ({nombre}) {
    //const nombre = "Nacho"
    
    return (
        <h1 className='title'>Bienvenido {nombre}!</h1>
    )
}