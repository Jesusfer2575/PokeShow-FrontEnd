import React from 'react';
import PokeCard from './PokeCard';
import useFetch from '../hooks/useFetch';
import IPokemon from '../interfaces/IPokemon'

const PokemonList: React.FC = () => {
    let { pokecards } = useFetch(process.env.REACT_APP_API_URL || '');

    return (
        <>
            <div className="container">
                {
                    pokecards.map( (pokecard: IPokemon, key: number) => (
                            <PokeCard key={key} { ...pokecard } />
                        )
                    )
                }
            </div>
        </>
    );
}

export default PokemonList;