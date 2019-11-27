import React from 'react'
import Card from './Card'
import GetPokemon from '../../services/testePokemon'

const pokemon = new GetPokemon()
console.log(pokemon.getPokemons(['Pikachu', 'Bulbasaur']))

const listCard = [
    {   
        numero: '',
        nome: '',
        tipo: '',
    },
    {
        numero: '',
        nome: '',
        tipo: '',
    }
]

const Cards = () => {
    return <dl>
        {listCard.map(content => <Card content={content} />)}
    </dl>
}

export default Cards