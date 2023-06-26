import { useState } from "react"
//Tree shaking estamos importando algo de react


export default function EjemploEventos (){
    //function saludar (nombre){
      //  alert(`Hola ${nombre}`)
    //}
    //en los () van los valores predetirmados
    //entre [elemento y funcion que permite modificarlo]
    const [numero, setNumero] = useState(45);
    const [mostrar, setMostrar] = useState(false);

    /*function sumar (){
        const nuevoNumero = numero + 10;
        setNumero(nuevoNumero);
    }*/


    return(
        /*<div>
            <button onClick={()=> {alert('Cómo te va benedetto?')}}>
                Bienvenida
            </button>
        </div>
        <div>
            <button onClick={()=>{saludar ("Nacho")}}>
                Saludar
            </button>
        </div>*/
        <div>
            <h2>el numero es: {numero}</h2>
            <button onClick={()=>{setMostrar(!mostrar)}}>
                Mostrar magia
            </button>
            {mostrar &&
            <p>Esta es la magia </p>
            }
        </div>
    )
}