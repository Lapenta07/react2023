import { useState } from "react";
export default function Contador (){

    const precio_unitario = 500;
    const [cantidad, setCantidad] = useState(0);

    
    function sumar (){
        const nuevoCantidad = cantidad + 1;
        setCantidad(nuevoCantidad);
    }

    function restar (){
        if (cantidad > 0){
        const nuevoCantidad = cantidad - 1;
        setCantidad(nuevoCantidad);
        }
    }

    /*function multi (){
        const total = cantidad * precio_unitario;
        setTotal(total);
    }*/


    return (
        <div>
            <p>Precio unitario: ${precio_unitario}</p>
            <div>
                <button onClick={restar}> Restar - </button>
                <p>{cantidad}</p>
                <button  onClick={sumar}> Sumar + </button>
            </div>
            <p>Total: ${cantidad * precio_unitario}</p>
        </div>
    )
}