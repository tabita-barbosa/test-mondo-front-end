import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})

export const getPokemon = async (pokemon) =>{
    console.log(pokemon)
    try {
        const { data } = await api.get(`pokemon/${pokemon}`)
        console.log(data)
    } catch (erro) {
        console.log('errou')
    }
}

export const getTypes = async (type) => {
    const { data } = await api.get(`type/${type}`)
    console.log(data)
}

export const getLocation = async (location) => {
    const {data} = await api.get(`location/${location}`)
    console.log(data)
}