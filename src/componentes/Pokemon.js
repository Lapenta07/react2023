import { useEffect, useState } from "react"

export default function Pokemon () {
    const [loading, setLoading] = useState(true);
    //sabemos que es objeto, lo preparamos con las {} 
    const [pokemon, setPokemon] = useState({});

    //Hooks van antes que los return
    useEffect(() => {
        function getRandomNumber(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
        }

        const random = getRandomNumber(1, 1017);
        const endpoint =`https://pokeapi.co/api/v2/pokemon/${random}`;

        fetch(endpoint).then((res) => {
            if (res.ok === true){
                //todo ok
                res.json().then((data_pok)=>{
                    setPokemon(data_pok);
                    setLoading(false);
                });
            } else {
                console.error("no funca, ", res.statusText);
            }
        });
    }, []);

    if (loading === true){
        return (
            <h1>Cargando Pokemones...</h1>
        )
    }

    //mostrar el nombre del pokemon
    //mostrar el "el peso de NOMBRE es Xkg"
    return (
        <>
            <h1>El nombre del Pokemón es {pokemon.name}</h1>
            <p>El peso de {pokemon.name} es {pokemon.weight}Kg y su id es {pokemon.id}</p>
            
            {pokemon.sprites &&
                <img src={pokemon.sprites.front_default}/>
            }
        </>
    )
}
