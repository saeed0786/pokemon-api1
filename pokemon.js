//importing fetch
import fetch from 'node-fetch';
//response from api
const fetchPokemon = async (id) => {
    try {
        const rest = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await rest.json();
        return data
    } catch (err){
        console.log(err)
    }
}

fetchPokemon(100).then((data) =>{
    console.log(data.name, data.types[0].type.name,data.height,data.moves[0].move.name,data.weight)
})

    