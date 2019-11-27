import ApolloClient from 'apollo-boost'
import { gql } from "apollo-boost"

const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh/',
});

const setNamesPokemons = (name) => {
  const result = {
    query: gql`
      {
        pokemon(name: "${name}") {
          id
          number
          name
          attacks {
            special {
              name
              type
              damage
            }
          }
        }
      }
      `
  }
  return result
}

export default class TestePokemon {
  getPokemons = (querys = []) => {
    querys.forEach(async query => {
      const result = await client
        .query(setNamesPokemons(query));
      return console.log(result);
    })
  }
}