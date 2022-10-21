import { Grid } from '@nextui-org/react';
import type { NextPage, GetStaticProps } from 'next';
import { pokeApi } from '../api';
import {Layout} from '../components/layouts'
import { PokemonCard } from '../components/pokemon';
import { PokemonListResponse, SmallPokemon } from '../interfaces/pokemonList';

interface Props{
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({pokemons}) => {
  
  return (
    <Layout title='Listado de pokemon'>
      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon}></PokemonCard>
          ))
        }
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  const pokemons:SmallPokemon[] = data.results.map((poke, index) => ({
    ...poke, //aca ya tengo "name" y "url"
    id: index+1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
  }));
  

  return {
    props: {
      pokemons: pokemons
    }
  }
}

export default HomePage
